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
    <div className={styles.container}>
      <button type="button" onClick={handleCheckBoxClick}>
        <Icon width={14} height={14} className={styles.icon({ isChecked })} />
      </button>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default CheckBox;
