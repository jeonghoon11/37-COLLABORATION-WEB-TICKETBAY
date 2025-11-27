import { useRef } from "react";
import { HISTORY_QUERY_OPTIONS } from "@entities/history/queries/queries";
import RecentTicketCard from "@entities/history/ui/recent-ticket-card/recent-ticket-card";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { EVENT_ID, USER_ID } from "@shared/constants/id";
import { useHorizontalScroll } from "@shared/hooks/use-horizontal-scroll";
import { ROUTE_PATH } from "@shared/router/path";

import * as styles from "./recent-ticket-list.css";

const RecentTicketList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useHorizontalScroll(scrollRef);

  const userId = USER_ID;
  const eventId = EVENT_ID;

  const handleTicketClick = (eventId: number) => {
    navigate(ROUTE_PATH.SELECT_TICKET.replace(":eventId", String(eventId)));
  };

  const { data } = useQuery(HISTORY_QUERY_OPTIONS.RECENT_HISTORY(userId));

  const histories = data ?? [];

  return (
    <div ref={scrollRef} className={styles.container}>
      {histories?.map((ticket) => (
        <RecentTicketCard
          key={ticket.eventId}
          name={ticket.name}
          eventDate={ticket.eventDate}
          onClick={() => handleTicketClick(eventId)}
        />
      ))}
    </div>
  );
};

export default RecentTicketList;
