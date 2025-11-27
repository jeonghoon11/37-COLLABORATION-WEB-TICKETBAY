import type { TicketDetail } from "@entities/ticket/types/types";

import { ChevronSmallRightIcon } from "@assets/icons";

import { formatDateToDot } from "@shared/utils/format-date-to-dot";

import * as styles from "./ticket-info.css";

interface TicketInfoProps {
  ticket: TicketDetail;
}

export const TicketInfo = ({ ticket }: TicketInfoProps) => {
  const { productNumber, event, seat } = ticket;

  const breadcrumbItems = [event.mainCategory, event.subCategory, event.name];

  const mainTitle = `${event.detailName} | ${seat.area}구역 | ${seat.seatColumn}열`;

  return (
    <section className={styles.container}>
      {/* 상단 내용 */}
      <div className={styles.headerRow}>
        <p className={styles.sectionTitle}>상품 정보</p>
        <p className={styles.productNumber}>
          <span className={styles.productNumberLabel}>상품번호</span>
          <span className={styles.productNumberValue}>{productNumber}</span>
        </p>
      </div>

      {/* 하단 내용 */}
      <div className={styles.content}>
        {/* breadcrumb */}
        <p className={styles.breadcrumb}>
          {breadcrumbItems.map((item, index) => (
            <span key={`${item}-${index}`} className={styles.breadcrumbItem}>
              {index > 0 && <ChevronSmallRightIcon aria-hidden className={styles.breadcrumbIcon} />}
              {item}
            </span>
          ))}
        </p>

        {/* 경기 일시 / 장소 */}
        <div className={styles.metaBlock}>
          <p className={styles.metaRow}>
            <span className={styles.metaLabel}>경기 일시</span>
            <span className={styles.metaValue}>{formatDateToDot(event.date)}</span>
          </p>

          <p className={styles.metaRow}>
            <span className={styles.metaLabel}>경기 장소</span>
            <span className={styles.metaValue}>{event.place}</span>
          </p>
        </div>

        {/* 메인 제목 및 좌석 타입 */}
        <p className={styles.mainTitle}>{mainTitle}</p>
        <p className={styles.seatType}>{seat.seatType}</p>
      </div>
    </section>
  );
};

export default TicketInfo;
