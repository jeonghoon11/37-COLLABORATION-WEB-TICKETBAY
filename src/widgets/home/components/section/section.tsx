import type { ReactNode } from "react";

import { ChevronSmallRightIcon } from "@assets/icons";

import * as styles from "./section.css";

interface Props {
  title: string;
  highlight: string;
  children: ReactNode;
  showMore?: boolean;
}

const Section = ({ title, children, highlight, showMore = false }: Props) => {
  return (
    <section>
      <header className={styles.header}>
        <p className={styles.title}>
          {title} <span className={styles.highlight}>{highlight}</span>
        </p>
        {showMore && (
          <button type="button" className={styles.button}>
            더보기
            <ChevronSmallRightIcon />
          </button>
        )}
      </header>
      {children}
    </section>
  );
};

export default Section;
