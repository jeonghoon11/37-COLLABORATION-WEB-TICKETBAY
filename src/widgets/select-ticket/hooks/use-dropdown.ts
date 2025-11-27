import { useEffect, useRef, useState } from "react";

/**
 * 드롭다운의 열림/닫힘 상태와 선택 상태를 관리하는 커스텀 훅입니다.
 * 여러 드롭다운 중 하나를 열면 다른 드롭다운은 자동으로 닫힙니다.
 */
export const useDropdown = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string | null>>({});
  const dropdownRefs = useRef<Record<string, HTMLElement | null>>({});

  /**
   * 드롭다운을 엽니다. 이미 열려있으면 닫습니다. 다른 드롭다운이 열려있으면 자동으로 닫습니다.
   */
  const openDropdown = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  /**
   * 드롭다운을 닫습니다.
   */
  const closeDropdown = () => {
    setOpenDropdownId(null);
  };

  /**
   * 특정 드롭다운이 열려있는지 확인합니다.
   */
  const isOpen = (id: string) => {
    return openDropdownId === id;
  };

  /**
   * 특정 드롭다운의 선택된 옵션 ID를 반환합니다.
   */
  const selectedId = (id: string) => {
    return selectedOptions[id] ?? null;
  };

  /**
   * 드롭다운에서 옵션을 선택합니다. 선택 후 드롭다운을 자동으로 닫습니다.
   */
  const selectOption = (dropdownId: string, optionId: string | null) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [dropdownId]: optionId,
    }));
    closeDropdown();
  };

  /**
   * 드롭다운의 ref를 등록합니다.
   */
  const setDropdownRef = (id: string, element: HTMLElement | null) => {
    dropdownRefs.current[id] = element;
  };

  // 외부 클릭 감지, 카드 클릭 차단, 스크롤 감지
  useEffect(() => {
    if (!openDropdownId) {
      return;
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const dropdownElement = dropdownRefs.current[openDropdownId];
      const target = event.target as HTMLElement;

      // 드롭다운 컨테이너나 리스트 내부 클릭이 아니면 닫기
      const isInsideDropdown =
        (dropdownElement && dropdownElement.contains(target)) ||
        target.closest("[data-dropdown-list]") !== null;

      if (!isInsideDropdown) {
        closeDropdown();
      }
    };

    // 카드 클릭 차단: 드롭다운이 열려있을 때 드롭다운 리스트 내부 버튼이 아닌 클릭만 차단
    const handleCardClickBlock = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;

      // 드롭다운 리스트 내부 클릭이지만 버튼이 아닌 경우에만 이벤트 전파 차단
      const dropdownList = target.closest("[data-dropdown-list]");
      if (dropdownList && !target.closest("button")) {
        event.stopPropagation();
      }
    };

    // 스크롤 감지: 바텀시트 content 영역의 스크롤을 감지하여 드롭다운 닫기
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      // 드롭다운 리스트 내부 스크롤이 아닌 경우에만 닫기
      if (!target.closest("[data-dropdown-list]")) {
        closeDropdown();
      }
    };

    // click 이벤트 사용 (capture phase에서 실행하여 onClick보다 먼저 실행되지만, stopPropagation으로 막을 수 있음)
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("touchend", handleClickOutside, true);

    // 카드 클릭 차단을 위한 이벤트 리스너 (capture phase에서 실행)
    document.addEventListener("click", handleCardClickBlock, true);
    document.addEventListener("touchend", handleCardClickBlock, true);

    // 바텀시트 content 요소 찾기
    const dropdownElement = dropdownRefs.current[openDropdownId];
    let bottomSheetContent: HTMLElement | null = null;
    if (dropdownElement) {
      // 드롭다운 컨테이너에서 상위로 올라가면서 바텀시트 content 찾기
      let parent = dropdownElement.parentElement;
      while (parent) {
        const computedStyle = window.getComputedStyle(parent);
        if (computedStyle.overflowY === "auto" || computedStyle.overflowY === "scroll") {
          bottomSheetContent = parent;
          break;
        }
        parent = parent.parentElement;
      }
    }

    // 바텀시트 content의 스크롤 이벤트 리스너 추가
    if (bottomSheetContent) {
      bottomSheetContent.addEventListener("scroll", handleScroll, true);
    }

    // 전역 스크롤 이벤트도 감지 (fallback)
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("touchend", handleClickOutside, true);
      document.removeEventListener("click", handleCardClickBlock, true);
      document.removeEventListener("touchend", handleCardClickBlock, true);
      window.removeEventListener("scroll", handleScroll, true);
      if (bottomSheetContent) {
        bottomSheetContent.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, [openDropdownId]);

  return {
    openDropdown,
    closeDropdown,
    isOpen,
    selectedId,
    selectOption,
    setDropdownRef,
  };
};
