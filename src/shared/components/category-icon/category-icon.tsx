import type { ReactNode } from "react";

import * as styles from "./category-icon.css";

interface Props {
  icon: ReactNode;
  text: string;
  isActive?: boolean;
}

const CategoryIcon = ({ icon, text, isActive = false }: Props) => {
  return (
    <button type="button" className={styles.container}>
      <div className={styles.icon({ isActive })}>{icon}</div>
      <p className={styles.text({ isActive })}>{text}</p>
    </button>
  );
};

export default CategoryIcon;
