import { ChevronSmallDownIcon } from "@assets/icons";

import * as styles from "./accordion.css";

const Accordion = () => {
  return (
    <button type="button" className={styles.button}>
      <p className={styles.text}>(주)팀플러스</p>
      <ChevronSmallDownIcon />
    </button>
  );
};

export default Accordion;
