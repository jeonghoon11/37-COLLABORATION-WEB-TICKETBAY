import { EVENT_QUERY_OPTIONS } from "@entities/event/queries/queries";
import BestTicketItem from "@entities/event/ui/best-ticket-item/best-ticket-item";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { ROUTE_PATH } from "@shared/router/path";

import * as styles from "./best-ticket-list.css";

const BEST_TICKET_PAGE_SIZE = 10;

interface Props {
  page: number;
}

const BestTicketList = ({ page }: Props) => {
  const navigate = useNavigate();
  const { data: events = [] } = useQuery(
    EVENT_QUERY_OPTIONS.TOP_EVENTS(page, BEST_TICKET_PAGE_SIZE),
  );

  const handleTicketClick = (eventId?: number) => {
    if (eventId) {
      navigate(ROUTE_PATH.SELECT_TICKET.replace(":eventId", String(eventId)));
    }
  };

  return (
    <div className={styles.container}>
      {events.map((event, index) => {
        const rank = index + 1 + page * BEST_TICKET_PAGE_SIZE;
        return (
          <BestTicketItem
            key={event.id}
            rank={rank}
            title={event.name || ""}
            location={event.place || ""}
            isTopRank={event.isTopRankng ?? false}
            onClick={rank === 1 ? () => handleTicketClick(event.id) : undefined}
          />
        );
      })}
    </div>
  );
};

export default BestTicketList;
