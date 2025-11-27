import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { CheckSmallIcon, ChevronSmallDownIcon } from "@assets/icons";

import { useDropdownPosition } from "@widgets/select-ticket/hooks/use-dropdown-position";
import type { DropdownOption } from "@widgets/select-ticket/types/dropdown";

import { useDropdownContext } from "./dropdown-context";

import * as styles from "./dropdown.css";

/**
 * label에서 날짜 부분만 추출하는 함수입니다. (2025-10-31(금) 18:30 → 2025.10.31)
 * @param label - 날짜가 포함된 문자열
 * @returns - 날짜가 추출된 문자열 (YYYY.MM.DD)
 */
const formatDateLabel = (label: string): string => {
  const match = label.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}`;
  }
  return label;
};

interface Props {
  label: string;
  options: DropdownOption[];
}

const Dropdown = ({ label, options }: Props) => {
  const { openDropdown, isOpen, selectedId, selectOption, setDropdownRef } = useDropdownContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownListRef = useRef<HTMLDivElement>(null);

  const currentIsOpen = isOpen(label);
  const currentSelectedId = selectedId(label);
  const isSelected = currentSelectedId != null;
  const selectedOption = options.find((opt) => opt.id === currentSelectedId);
  const displayText = selectedOption ? formatDateLabel(selectedOption.label) : null;

  const dropdownPosition = useDropdownPosition(
    currentIsOpen,
    containerRef,
    buttonRef,
    dropdownListRef,
  );

  useEffect(() => {
    setDropdownRef(label, containerRef.current);
    return () => {
      setDropdownRef(label, null);
    };
  }, [label, setDropdownRef]);

  const isBottomSheetOpen = (): boolean => {
    if (!containerRef.current) {
      return false;
    }

    let element: HTMLElement | null = containerRef.current;
    while (element) {
      const transform = window.getComputedStyle(element).transform;
      if (transform && transform !== "none") {
        const translateY = getComputedStyle(element).getPropertyValue("--bottom-sheet-translate");
        if (translateY) {
          const translateValue = parseFloat(translateY.trim().replace("px", ""));
          return !isNaN(translateValue) && translateValue <= 10;
        }
        break;
      }
      element = element.parentElement;
    }

    return false;
  };

  const handleDropdownClick = () => {
    if (isBottomSheetOpen()) {
      openDropdown(label);
    }
  };

  const handleListEvent = (e: React.MouseEvent | React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest("button")) {
      e.stopPropagation();
    }
  };

  const handleItemEvent = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleItemClick = (optionId: string | null) => (e: React.MouseEvent) => {
    e.stopPropagation();
    selectOption(label, optionId);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.dropdownButton({ isSelected })}
        onClick={handleDropdownClick}
      >
        <div className={styles.value}>
          <span>{label}</span>
          {displayText && <span> {displayText}</span>}
        </div>
        <ChevronSmallDownIcon
          className={styles.icon({ isOpen: currentIsOpen })}
          width={20}
          height={20}
        />
      </button>

      {currentIsOpen &&
        dropdownPosition &&
        createPortal(
          <div
            ref={dropdownListRef}
            className={styles.dropdownList}
            data-dropdown-list={label}
            onClick={handleListEvent}
            onMouseDown={handleListEvent}
            onTouchStart={handleListEvent}
          >
            <button
              type="button"
              className={styles.dropdownFirstItem}
              onClick={handleItemClick(null)}
              onMouseDown={handleItemEvent}
              onTouchStart={handleItemEvent}
            >
              <CheckSmallIcon width={24} height={24} className={styles.dropdownItemIcon} />
              <span className={styles.dropdownItemLabel}>전체</span>
            </button>

            {options.map((option) => (
              <button
                type="button"
                key={option.id}
                className={styles.dropdownItem}
                onClick={handleItemClick(option.id)}
                onMouseDown={handleItemEvent}
                onTouchStart={handleItemEvent}
              >
                <span className={styles.dropdownItemLabel}>{option.label}</span>
              </button>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Dropdown;
