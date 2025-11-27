import { useState } from "react";
import type { ReactNode } from "react";

import { CheckIcon, ChevronSmallDownIcon } from "@assets/icons";

import * as styles from "./accordion.css";

interface Props {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={styles.accordionSection}>
      <button type="button" className={styles.headerButton} onClick={handleToggle}>
        <div className={styles.headerLeft}>
          <span className={styles.checkIconWrapper}>
            <CheckIcon />
          </span>
          <span className={styles.title}>{title}</span>
        </div>

        <span className={`${styles.arrowWrapper} ${isOpen ? styles.arrowOpen : ""}`}>
          <ChevronSmallDownIcon />
        </span>
      </button>

      {isOpen && (
        <div className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}>{children}</div>
      )}
    </section>
  );
};

export default Accordion;
