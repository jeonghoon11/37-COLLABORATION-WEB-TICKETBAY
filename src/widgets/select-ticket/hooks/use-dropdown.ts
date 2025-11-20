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
  const registerRef = (id: string, element: HTMLElement | null) => {
    dropdownRefs.current[id] = element;
  };

  // 외부 클릭 감지
  useEffect(() => {
    if (!openDropdownId) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElement = dropdownRefs.current[openDropdownId];
      if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownId]);

  return {
    openDropdown,
    closeDropdown,
    isOpen,
    selectedId,
    selectOption,
    registerRef,
  };
};
