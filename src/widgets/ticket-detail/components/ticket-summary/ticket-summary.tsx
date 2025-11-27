import type { TicketDetail } from "@entities/ticket/types/types";

import { HelpCircleIcon } from "@assets/icons";

import { formatPriceToKorean } from "@shared/utils/format-price-to-korean";

import * as styles from "./ticket-summary.css";

interface TicketSummaryProps {
  ticket: TicketDetail;
}

export const TicketSummary = ({ ticket }: TicketSummaryProps) => {
  const hasTicketText = ticket.status ? "현재 티켓 보유 중" : "티켓 미보유";
  const pricePerTicketText = `${formatPriceToKorean(ticket.pricePerTicket)}원`;
  const quantityText = `${ticket.amount}매`;
  const totalPriceText = `${formatPriceToKorean(ticket.totalPrice)}원`;

  const pointText = "팬파워 345FP 적립";

  const infoList = [
    { label: "티켓 보유 여부", value: hasTicketText },
    { label: "한 매 가격", value: pricePerTicketText },
    { label: "수량", value: quantityText },
  ];

  return (
    <section className={styles.container} aria-label="티켓 가격 요약">
      {/* 티켓 보유 여부, 한 매 가격, 수량 */}
      {infoList.map(({ label, value }) => (
        <div key={label} className={styles.row}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </div>
      ))}

      {/* 총 가격 */}
      <div className={styles.row}>
        <span className={styles.label}>총 가격</span>
        <span className={styles.totalPrice}>{totalPriceText}</span>
      </div>

      {/* 팬파워 적립 안내 */}
      <div className={styles.pointRow}>
        <span className={styles.pointText}>{pointText}</span>
        <button type="button" className={styles.pointIcon} aria-label="팬파워 적립 안내">
          <HelpCircleIcon className={styles.pointIcon} />
        </button>
      </div>
    </section>
  );
};

export default TicketSummary;
