import { useRef } from "react";

import { OptionIcon } from "@assets/icons";

import Dropdown from "@widgets/select-ticket/components/dropdown/dropdown";
import { DROPDOWN_CONFIGS } from "@widgets/select-ticket/constants/dropdown-mock-data";

import { useHorizontalScroll } from "@shared/hooks/use-horizontal-scroll";

import * as styles from "./dropdown-list.css";

const DropDownList = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(scrollAreaRef);

  return (
    <div className={styles.container}>
      <div ref={scrollAreaRef} className={styles.scrollArea}>
        <div className={styles.dropdownList}>
          {DROPDOWN_CONFIGS.map(({ id, label, options }) => (
            <Dropdown key={id} label={label} options={options} />
          ))}
        </div>
      </div>
      <button type="button" className={styles.dropdownListIcon}>
        <OptionIcon width={24} height={24} />
      </button>
    </div>
  );
};

export default DropDownList;
