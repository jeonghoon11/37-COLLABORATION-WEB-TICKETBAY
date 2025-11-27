import { TicketinSulationIcon } from "@assets/icons";

import * as styles from "./safety-notice-bar.css";

interface Props {
  label: string;
}

const SafetyNoticeBar = ({ label }: Props) => {
  return (
    <div className={styles.container}>
      <TicketinSulationIcon width={16} height={16} />
      <span className={styles.text}>{label}</span>
    </div>
  );
};

export default SafetyNoticeBar;
