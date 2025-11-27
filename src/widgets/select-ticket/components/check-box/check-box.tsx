import { useState } from "react";

import { CheckBoxIcon, CheckedBoxIcon } from "@assets/icons";

import * as styles from "./check-box.css";

interface Props {
  label?: string;
}

const CheckBox = ({ label }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxClick = () => {
    setIsChecked((prev) => !prev);
  };

  const Icon = isChecked ? CheckedBoxIcon : CheckBoxIcon;

  return (
    <button className={styles.container} onClick={handleCheckBoxClick}>
      <Icon width={14} height={14} className={styles.icon({ isChecked })} />
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};

export default CheckBox;
