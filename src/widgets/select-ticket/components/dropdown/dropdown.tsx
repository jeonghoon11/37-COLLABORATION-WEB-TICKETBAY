import { useEffect, useRef } from "react";

import { CheckSmallIcon, ChevronSmallDownIcon } from "@assets/icons";

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
  const { openDropdown, isOpen, selectedId, selectOption, registerRef } = useDropdownContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const currentIsOpen = isOpen(label);
  const currentSelectedId = selectedId(label);
  const isSelected = currentSelectedId != null;
  const selectedOption = options.find((opt) => opt.id === currentSelectedId);
  const displayText = selectedOption && formatDateLabel(selectedOption.label);
  const hasDisplayText = isSelected && displayText;

  useEffect(() => {
    registerRef(label, containerRef.current);
    return () => {
      registerRef(label, null);
    };
  }, [label, registerRef]);

  return (
    <div ref={containerRef} className={styles.container}>
      <button
        type="button"
        className={styles.dropdownButton({ isSelected })}
        onClick={() => openDropdown(label)}
      >
        <div className={styles.value}>
          <span>{label}</span>
          {hasDisplayText && <span> {displayText}</span>}
        </div>
        <ChevronSmallDownIcon
          className={styles.icon({ isOpen: currentIsOpen })}
          width={20}
          height={20}
        />
      </button>

      {currentIsOpen && (
        <div className={styles.dropdownList}>
          <div className={styles.dropdownFirstItem} onClick={() => selectOption(label, null)}>
            <CheckSmallIcon width={24} height={24} className={styles.dropdownItemIcon} />
            <span className={styles.dropdownItemLabel}>전체</span>
          </div>

          {options.map((option) => (
            <div
              key={option.id}
              className={styles.dropdownItem}
              onClick={() => selectOption(label, option.id)}
            >
              <span className={styles.dropdownItemLabel}>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
