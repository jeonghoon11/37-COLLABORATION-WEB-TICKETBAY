import { useEffect, useRef } from "react";

const BOTTOM_SHEET_TRANSLATE_CSS_VAR = "--bottom-sheet-translate";

/**
 * 바텀시트 드래그 훅에 전달되는 레이아웃 정보입니다.
 *
 * - `navigationHeight`: 상단 네비게이션 높이 (px)
 * - `headerHeight`: 네비게이션 바로 아래 헤더 높이 (px)
 * - `maxTranslate`: 바텀시트가 아래로 최대 내려갈 거리 (px, 보통 이미지 높이)
 */
interface BottomSheetDragOptions {
  navigationHeight: number;
  headerHeight: number;
  maxTranslate: number;
}

/**
 * 드래그 시작 시점의 스냅샷 좌표를 저장하기 위한 메트릭입니다.
 *
 * - `sheetY`: 드래그 시작 시 바텀시트의 translateY 값
 * - `touchY`: 드래그를 시작한 터치/마우스의 Y 좌표
 */
interface DragMetrics {
  sheetY: number;
  touchY: number;
}

// 드래그로 인식할 최소 이동 거리(px)
const MIN_DRAG_DISTANCE = 10;

/**
 * 헤더로만 드래그되고, content 영역은 스크롤되는 바텀시트 동작을 제공하는 훅입니다.
 *
 * 사용처에서는 `sheetRef`, `headerRef`, `contentRef`를 각 DOM 요소에 연결만 해주면 됩니다.
 * 드래그/스냅/스크롤 관련 이벤트 등록과 바디 스크롤 잠금은 모두 이 훅 내부에서 처리합니다.
 */
const useBottomSheetDrag = ({
  navigationHeight,
  headerHeight,
  maxTranslate,
}: BottomSheetDragOptions) => {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const optionsRef = useRef({
    BOTTOM_SHEET_START_Y: navigationHeight + headerHeight,
    MIN_TRANSLATE: 0,
    MAX_TRANSLATE: maxTranslate,
  });

  const metrics = useRef<DragMetrics>({
    sheetY: 0,
    touchY: 0,
  });

  // 초기 마운트 시 CSS 변수 설정 (content 높이 계산을 위해)
  useEffect(() => {
    if (sheetRef.current) {
      sheetRef.current.style.setProperty(BOTTOM_SHEET_TRANSLATE_CSS_VAR, `${maxTranslate}px`);
    }
  }, [maxTranslate]);

  // 드래그(터치 + 마우스) 처리
  useEffect(() => {
    let isDragging = false;
    let hasMoved = false;

    /**
     * 현재 translateY 위치를 기반으로 스냅할 위치를 계산합니다.
     * 중간점을 기준으로 위쪽이면 완전히 올림(MIN_TRANSLATE), 아래쪽이면 완전히 내림(MAX_TRANSLATE).
     */
    const getSnapPoint = (currentTranslateY: number): number => {
      const { MIN_TRANSLATE, MAX_TRANSLATE } = optionsRef.current;
      const midPoint = (MIN_TRANSLATE + MAX_TRANSLATE) / 2;
      return currentTranslateY < midPoint ? MIN_TRANSLATE : MAX_TRANSLATE;
    };

    /**
     * 바텀시트의 translateY 값을 업데이트합니다.
     * transform과 CSS 변수를 동시에 업데이트하여 content 높이 계산이 자동으로 반영되도록 합니다.
     * @param value - translateY 값 (px)
     * @param options - transition 옵션 (드래그 중에는 "none", 스냅 시에는 애니메이션 적용)
     */
    const setSheetTranslate = (value: number, options?: { transition?: string }) => {
      if (!sheetRef.current) {
        return;
      }
      // transform 업데이트: 바텀시트 위치 변경
      sheetRef.current.style.setProperty("transform", `translateY(${value}px)`);
      // CSS 변수 업데이트: content 높이 계산에 사용 (calc에서 var(--bottom-sheet-translate) 참조)
      sheetRef.current.style.setProperty(BOTTOM_SHEET_TRANSLATE_CSS_VAR, `${value}px`);
      if (options?.transition !== undefined) {
        sheetRef.current.style.setProperty("transition", options.transition);
      }
    };

    /**
     * 드래그를 시작합니다.
     * 현재 바텀시트 위치와 포인터 위치를 스냅샷으로 저장하고, body 스크롤을 잠급니다.
     */
    const startDrag = (startY: number) => {
      if (!sheetRef.current) {
        return;
      }

      isDragging = true;
      hasMoved = false;

      // 현재 바텀시트의 실제 Y 좌표에서 시작 지점을 빼서 translateY 값 계산
      const rectY = sheetRef.current.getBoundingClientRect().y;
      metrics.current.sheetY = rectY - optionsRef.current.BOTTOM_SHEET_START_Y;
      metrics.current.touchY = startY;

      // 드래그 중 body 스크롤 방지
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    };

    /**
     * 드래그 중 바텀시트 위치를 업데이트합니다.
     * 최소/최대 범위를 제한하고, transition을 "none"으로 설정하여 즉시 반영합니다.
     */
    const moveDrag = (currentY: number) => {
      if (!isDragging || !sheetRef.current) {
        return;
      }

      const { sheetY, touchY } = metrics.current;
      const dragDistance = Math.abs(currentY - touchY);

      // 최소 드래그 거리를 넘어야 실제 드래그로 인식 (클릭과 구분)
      if (dragDistance > MIN_DRAG_DISTANCE) {
        hasMoved = true;
      }

      // 시작 위치에서의 이동 거리를 계산하여 새로운 translateY 값 계산
      const offset = currentY - touchY;
      const nextTranslateY = Math.max(
        optionsRef.current.MIN_TRANSLATE,
        Math.min(optionsRef.current.MAX_TRANSLATE, sheetY + offset),
      );

      // transition을 "none"으로 설정하여 드래그 중 부드러운 이동
      setSheetTranslate(nextTranslateY, { transition: "none" });
    };

    /**
     * 드래그를 종료하고 스냅 포인트로 이동합니다.
     * 실제로 드래그하지 않았으면(클릭) 아무 동작도 하지 않습니다.
     */
    const endDrag = () => {
      if (!isDragging) {
        return;
      }

      const didMove = hasMoved;

      isDragging = false;
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

      // 클릭(드래그 없음)인 경우: 현재 위치 유지
      if (!didMove) {
        if (sheetRef.current) {
          setSheetTranslate(metrics.current.sheetY, { transition: "transform 0.3s ease-out" });
        }
        metrics.current = { sheetY: 0, touchY: 0 };
        return;
      }

      // 드래그한 경우: 현재 위치를 기반으로 스냅 포인트 계산 후 이동
      if (sheetRef.current) {
        const currentSheetY = sheetRef.current.getBoundingClientRect().y;
        const currentTranslateY = currentSheetY - optionsRef.current.BOTTOM_SHEET_START_Y;
        const snapPoint = getSnapPoint(currentTranslateY);
        // 애니메이션과 함께 스냅 포인트로 이동
        setSheetTranslate(snapPoint, { transition: "transform 0.3s ease-out" });
      }

      metrics.current = { sheetY: 0, touchY: 0 };
    };

    // 터치 이벤트: 헤더 영역에서만 드래그 시작
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      // 헤더 영역이 아니면 드래그 시작하지 않음 (content 영역은 스크롤)
      if (!headerRef.current || !headerRef.current.contains(target)) {
        return;
      }
      startDrag(e.touches[0].clientY);
      e.preventDefault();
      e.stopPropagation();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) {
        return;
      }
      moveDrag(e.touches[0].clientY);
      e.preventDefault();
      e.stopPropagation();
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        endDrag();
      }
    };

    // 마우스 이벤트: 헤더 영역에서만 드래그 시작
    const handleMouseDown = (e: MouseEvent) => {
      // 왼쪽 버튼만 처리
      if (e.button !== 0) {
        return;
      }

      const target = e.target as HTMLElement;
      // 헤더 영역이 아니면 드래그 시작하지 않음
      if (!headerRef.current || !headerRef.current.contains(target)) {
        return;
      }

      startDrag(e.clientY);
      e.preventDefault();
      e.stopPropagation();

      // 마우스가 헤더를 벗어나도 계속 추적하기 위해 전역 리스너 등록
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        moveDrag(e.clientY);
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        endDrag();
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const sheetElement = sheetRef.current;
    sheetElement?.addEventListener("touchstart", handleTouchStart, { passive: false });
    sheetElement?.addEventListener("touchmove", handleTouchMove, { passive: false });
    sheetElement?.addEventListener("touchend", handleTouchEnd, { passive: false });
    sheetElement?.addEventListener("mousedown", handleMouseDown);

    return () => {
      sheetElement?.removeEventListener("touchstart", handleTouchStart);
      sheetElement?.removeEventListener("touchmove", handleTouchMove);
      sheetElement?.removeEventListener("touchend", handleTouchEnd);
      sheetElement?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  /**
   * content 영역에서 스크롤 처리 (모바일 터치 + 데스크톱 휠)
   * 바텀시트 내부 content 영역의 스크롤이 body 스크롤로 전파되지 않도록 처리합니다.
   */
  useEffect(() => {
    // 터치 이벤트: content 영역에서 body 스크롤 방지
    const handleContentTouchMove = (e: TouchEvent) => {
      if (contentRef.current && contentRef.current.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    document.addEventListener("touchmove", handleContentTouchMove, { passive: false });

    // 데스크톱 휠 스크롤: 바텀시트 또는 content 영역에서 휠 이벤트를 받아서 content로 전달
    const sheetElement = sheetRef.current;
    const contentElement = contentRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (!contentElement) {
        return;
      }

      // 바텀시트 영역 내에서만 처리
      const target = e.target as Node;
      if (sheetElement && (sheetElement.contains(target) || contentElement.contains(target))) {
        // body 스크롤 방지하고 content에만 스크롤 적용
        e.preventDefault();
        e.stopPropagation();
        contentElement.scrollTop += e.deltaY;
      }
    };

    // document에 등록하여 바텀시트 영역 어디서든 휠 이벤트 감지
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleContentTouchMove);
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return {
    sheetRef,
    headerRef,
    contentRef,
  };
};
export default useBottomSheetDrag;
