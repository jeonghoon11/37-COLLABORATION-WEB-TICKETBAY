import { HeartIcon } from "@assets/icons";

import * as styles from "./compare-add-button.css";

interface Props {
  size: "sm" | "lg";
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const CompareAddButton = ({ size, isActive = false, onClick }: Props) => {
  return (
    <button type="button" className={styles.container({ size, isActive })} onClick={onClick}>
      <HeartIcon className={styles.icon({ isActive })} width={20} height={20} />
      <span className={styles.text({ size })}>비교담기</span>
    </button>
  );
};

export default CompareAddButton;
