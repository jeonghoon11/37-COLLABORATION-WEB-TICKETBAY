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

/**
 * 드롭다운의 left 위치를 경계 내로 조정합니다.
 */
const adjustLeftPosition = (
  left: number,
  buttonViewportLeft: number,
  bottomSheetLeft: number,
  containerWidth: number,
  rootLeftOffset: number,
  dropdownWidth: number,
  padding: number,
): number => {
  const maxViewportLeft = rootLeftOffset + containerWidth - dropdownWidth - padding;
  const minViewportLeft = rootLeftOffset + padding;

  if (buttonViewportLeft + dropdownWidth > rootLeftOffset + containerWidth - padding) {
    return maxViewportLeft - bottomSheetLeft;
  }
  if (buttonViewportLeft < minViewportLeft) {
    return minViewportLeft - bottomSheetLeft;
  }

  return left;
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
      const bottomSheetRect = bottomSheetElement.getBoundingClientRect();
      const { DROPDOWN_WIDTH, ROOT_MAX_WIDTH, BOTTOM_SHEET_PADDING, BUTTON_DROPDOWN_GAP } =
        DROPDOWN_POSITION;

      const viewportWidth = window.innerWidth;
      const containerWidth = Math.min(viewportWidth, ROOT_MAX_WIDTH);
      const rootLeftOffset = (viewportWidth - containerWidth) / 2;

      // bottomSheet 기준 상대 위치 계산
      const top = buttonRect.bottom - bottomSheetRect.top + BUTTON_DROPDOWN_GAP;
      const left = adjustLeftPosition(
        buttonRect.left - bottomSheetRect.left,
        buttonRect.left,
        bottomSheetRect.left,
        containerWidth,
        rootLeftOffset,
        DROPDOWN_WIDTH,
        BOTTOM_SHEET_PADDING,
      );

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

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
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
