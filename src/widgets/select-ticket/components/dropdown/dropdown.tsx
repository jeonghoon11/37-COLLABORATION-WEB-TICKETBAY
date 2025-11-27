import { useEffect, useRef } from "react";

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

  return (
    <div ref={containerRef} className={styles.container}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.dropdownButton({ isSelected })}
        onClick={() => openDropdown(label)}
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

      {currentIsOpen && dropdownPosition && (
        <div ref={dropdownListRef} className={styles.dropdownList}>
          <button
            type="button"
            className={styles.dropdownFirstItem}
            onClick={() => selectOption(label, null)}
          >
            <CheckSmallIcon width={24} height={24} className={styles.dropdownItemIcon} />
            <span className={styles.dropdownItemLabel}>전체</span>
          </button>

          {options.map((option) => (
            <button
              type="button"
              key={option.id}
              className={styles.dropdownItem}
              onClick={() => selectOption(label, option.id)}
            >
              <span className={styles.dropdownItemLabel}>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
