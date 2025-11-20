import type { ReactNode } from "react";

import * as styles from "./navigation.css";

interface Props {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftAction?: () => void;
  rightAction?: () => void;
}

const Navigation = ({ title, leftIcon, rightIcon, leftAction, rightAction }: Props) => {
  return (
    <nav className={styles.container}>
      <div className={styles.leftSection}>
        {leftIcon && (
          <button className={styles.Icon} type="button" onClick={leftAction}>
            {leftIcon}
          </button>
        )}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.rightSection}>
        {rightIcon && (
          <button className={styles.Icon} type="button" onClick={rightAction}>
            {rightIcon}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
