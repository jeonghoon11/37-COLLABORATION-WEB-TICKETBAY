import { TICKET_QUERY_OPTIONS } from "@entities/ticket/queries/queries";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { ChevronBigLeftIcon, InfoIcon } from "@assets/icons";

import SafetyProgramAccordion from "@widgets/ticket-detail/components/accordion/safety-program-accordion";
import SeatMapAccordion from "@widgets/ticket-detail/components/accordion/seat-map-accordion";
import BottomButtons from "@widgets/ticket-detail/components/bottom-buttons/bottom-buttons";
import DetailTabs from "@widgets/ticket-detail/components/detail-tabs/detail-tabs";
import SeatMap from "@widgets/ticket-detail/components/seat-map/seat-map";
import TicketInfo from "@widgets/ticket-detail/components/ticket-info/ticket-info";
import TicketSummary from "@widgets/ticket-detail/components/ticket-summary/ticket-summary";

import Navigation from "@shared/components/navigation/navigation";

import * as styles from "./ticket-detail.css";

const TicketDetail = () => {
  const navigate = useNavigate();
  const { ticketId } = useParams<{ ticketId: string }>();
  const numericTicketId = Number(ticketId);

  const { data: ticketDetail = null } = useQuery(
    TICKET_QUERY_OPTIONS.TICKET_DETAIL(numericTicketId),
  );

  const handleNavigateBack = () => navigate(-1);

  return (
    <>
      <Navigation
        title={ticketDetail?.event?.name || ""}
        leftIcon={<ChevronBigLeftIcon width={24} height={24} />}
        rightIcon={<InfoIcon width={24} height={24} />}
        leftAction={handleNavigateBack}
      />

      <main className={styles.pageContainer}>
        <div className={styles.ticketInfoOffset}>
          {ticketDetail && <TicketInfo ticket={ticketDetail} />}
        </div>

        <div className={`${styles.removeGapTop} ${styles.seatMapWrapper}`}>
          {ticketDetail && <SeatMap imageSrc={ticketDetail.seat?.seatImageUrl || ""} />}
        </div>

        {ticketDetail && <TicketSummary ticket={ticketDetail} />}

        <SeatMapAccordion />
        <SafetyProgramAccordion />
        <DetailTabs />

        <div className={styles.removeGapTop}>
          <BottomButtons />
        </div>
      </main>
    </>
  );
};

export default TicketDetail;
