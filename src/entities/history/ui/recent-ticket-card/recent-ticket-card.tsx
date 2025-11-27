import type { HistoryResponse } from "@entities/history/types/type";

import { ChevronSmallRightIcon } from "@assets/icons";

import { formatDateToDot } from "@shared/utils/format-date-to-dot";

import * as styles from "./recent-ticket-card.css";

interface Props extends HistoryResponse {
  onClick?: () => void;
}

const RecentTicketCard = ({ name, eventDate, onClick }: Props) => {
  return (
    <button type="button" className={styles.cardButton} onClick={onClick}>
      <div className={styles.cardInner}>
        <div className={styles.content}>
          <p className={styles.title}>{name}</p>
          <p className={styles.date}>경기 일시 : {formatDateToDot(eventDate!)}</p>
        </div>
        <ChevronSmallRightIcon width={20} height={20} className={styles.icon} />
      </div>
    </button>
  );
};

export default RecentTicketCard;
