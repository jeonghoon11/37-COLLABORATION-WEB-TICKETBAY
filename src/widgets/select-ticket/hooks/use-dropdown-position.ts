import { type RefObject, useEffect, useLayoutEffect, useState } from "react";

import { DROPDOWN_POSITION } from "@widgets/select-ticket/constants/dropdown-position";

interface DropdownPosition {
  top: number;
  left: number;
}

/**
 * 드롭다운의 위치를 계산하고 CSS 변수로 설정하는 커스텀 훅
 *
 * 이 훅이 필요한 이유:
 * - 드롭다운이 `bottomSheet`의 `transform` 속성 때문에 `position: fixed`가 뷰포트 기준이 아닌 `bottomSheet` 기준으로 동작합니다.
 * - `bottomSheet` 기준 상대 위치를 계산하여 드롭다운이 버튼 아래 정확한 위치에 렌더링되도록 합니다.
 * - 바텀시트의 좌우 padding(1.6rem)을 고려하여 드롭다운이 경계를 벗어나지 않도록 조정합니다.
 * - 화면 크기나 스크롤 위치가 변경될 때 드롭다운 위치를 자동으로 업데이트합니다.
 * - `useLayoutEffect`를 사용하여 브라우저가 화면을 그리기 전에 CSS 변수를 설정하여 깜빡임 방지합니다.
 *
 * @param isOpen - 드롭다운이 열려있는지 여부
 * @param containerRef - 드롭다운 버튼 컨테이너 ref
 * @param buttonRef - 드롭다운 버튼 ref
 * @param dropdownListRef - 드롭다운 리스트 ref
 * @returns 계산된 드롭다운 위치
 */
/**
 * transform 속성이 있는 부모 요소(bottomSheet)를 찾습니다.
 */
const findBottomSheetElement = (element: HTMLElement | null): HTMLElement | null => {
  if (!element) {
    return null;
  }

  const transform = window.getComputedStyle(element).transform;
  if (transform && transform !== "none") {
    return element;
  }

  return findBottomSheetElement(element.parentElement);
};

export const useDropdownPosition = (
  isOpen: boolean,
  containerRef: RefObject<HTMLDivElement | null>,
  buttonRef: RefObject<HTMLButtonElement | null>,
  dropdownListRef: RefObject<HTMLDivElement | null>,
): DropdownPosition | null => {
  const [position, setPosition] = useState<DropdownPosition | null>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current || !buttonRef.current) {
      return;
    }

    const calculatePosition = (): DropdownPosition | null => {
      const buttonElement = buttonRef.current;
      if (!buttonElement) {
        return null;
      }

      const bottomSheetElement = findBottomSheetElement(containerRef.current);
      if (!bottomSheetElement) {
        return null;
      }

      const buttonRect = buttonElement.getBoundingClientRect();
      const { DROPDOWN_WIDTH, ROOT_MAX_WIDTH, BOTTOM_SHEET_PADDING, BUTTON_DROPDOWN_GAP } =
        DROPDOWN_POSITION;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const containerWidth = Math.min(viewportWidth, ROOT_MAX_WIDTH);
      const rootLeftOffset = (viewportWidth - containerWidth) / 2;

      // position: fixed는 뷰포트 기준이므로 뷰포트 기준으로 계산
      // getBoundingClientRect()는 뷰포트 기준이므로, 바텀시트가 닫혀있어도 버튼의 실제 뷰포트 위치를 반환함
      let top = buttonRect.bottom + BUTTON_DROPDOWN_GAP;
      let left = buttonRect.left;

      // 드롭다운 높이 추정 (실제 높이를 계산하거나 대략적인 값 사용)
      const estimatedDropdownHeight = 250; // 드롭다운 아이템들의 대략적인 높이

      // 버튼이 화면 안에 있는지 확인 (바텀시트가 열려있을 때)
      const isButtonVisible = buttonRect.top >= 0 && buttonRect.bottom <= viewportHeight;

      // 화면 밖으로 나가지 않도록 조정
      // 단, 버튼이 화면 안에 있을 때만 위쪽 표시 옵션 사용
      if (top + estimatedDropdownHeight > viewportHeight && isButtonVisible) {
        // 화면 아래로 나가면 위쪽에 표시 (버튼이 화면 안에 있을 때만)
        top = buttonRect.top - estimatedDropdownHeight - BUTTON_DROPDOWN_GAP;
        // 위쪽도 화면 밖이면 버튼 아래에 최대한 표시
        if (top < 0) {
          top = Math.max(0, viewportHeight - estimatedDropdownHeight);
        }
      }
      // 버튼이 화면 밖에 있으면(바텀시트가 닫혀있을 때) 항상 버튼 아래에 표시

      // left 위치 조정 (뷰포트 기준)
      const maxViewportLeft =
        rootLeftOffset + containerWidth - DROPDOWN_WIDTH - BOTTOM_SHEET_PADDING;
      const minViewportLeft = rootLeftOffset + BOTTOM_SHEET_PADDING;

      if (left + DROPDOWN_WIDTH > rootLeftOffset + containerWidth - BOTTOM_SHEET_PADDING) {
        left = maxViewportLeft;
      }
      if (left < minViewportLeft) {
        left = minViewportLeft;
      }

      return { top, left };
    };

    const updatePosition = () => {
      const newPosition = calculatePosition();
      if (newPosition) {
        setPosition(newPosition);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    // 바텀시트의 transform 변경을 감지하기 위해 MutationObserver 사용
    const bottomSheetElement = findBottomSheetElement(containerRef.current);
    let observer: MutationObserver | null = null;

    if (bottomSheetElement) {
      observer = new MutationObserver(() => {
        // 바텀시트의 style이 변경될 때마다 위치 업데이트
        updatePosition();
      });

      // 바텀시트의 style 속성 변경 감지
      observer.observe(bottomSheetElement, {
        attributes: true,
        attributeFilter: ["style"],
      });
    }

    // 추가로 requestAnimationFrame을 사용하여 위치 추적 (더 정확한 업데이트)
    let animationFrameId: number | null = null;
    let lastButtonBottom = 0;

    const observeBottomSheet = () => {
      if (buttonRef.current) {
        const currentButtonBottom = buttonRef.current.getBoundingClientRect().bottom;
        // 버튼 위치가 변경되었을 때만 업데이트 (성능 최적화)
        if (Math.abs(currentButtonBottom - lastButtonBottom) > 1) {
          updatePosition();
          lastButtonBottom = currentButtonBottom;
        }
      }
      if (isOpen) {
        animationFrameId = requestAnimationFrame(observeBottomSheet);
      }
    };

    // 드롭다운이 열려있을 때만 위치 추적 시작
    if (isOpen && buttonRef.current) {
      lastButtonBottom = buttonRef.current.getBoundingClientRect().bottom;
      animationFrameId = requestAnimationFrame(observeBottomSheet);
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      if (observer) {
        observer.disconnect();
      }
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      setPosition(null);
    };
  }, [isOpen, containerRef, buttonRef]);

  // position이 변경되거나 dropdownListRef가 마운트될 때 CSS 변수를 설정합니다.
  useLayoutEffect(() => {
    if (!position || !dropdownListRef.current) {
      return;
    }

    dropdownListRef.current.style.setProperty("--dropdown-top", `${position.top}px`);
    dropdownListRef.current.style.setProperty("--dropdown-left", `${position.left}px`);
  }, [position, dropdownListRef]);

  return position;
};
