import type { ReactNode } from "react";

import * as styles from "./sns-button.css";

interface Props {
  children: ReactNode;
}

const SnsButton = ({ children }: Props) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default SnsButton;
