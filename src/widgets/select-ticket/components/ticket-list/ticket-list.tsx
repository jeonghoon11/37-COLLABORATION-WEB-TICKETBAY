import { TICKET_QUERY_OPTIONS } from "@entities/ticket/queries/queries";
import TicketOptionCard from "@entities/ticket/ui/ticket-option-card/ticket-option-card";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { useDropdownContext } from "@widgets/select-ticket/components/dropdown/dropdown-context";
import { DROPDOWN_CONFIGS } from "@widgets/select-ticket/constants/dropdown-mock-data";

import { ROUTE_PATH } from "@shared/router/path";

import * as styles from "./ticket-list.css";

const PERFORMANCE_DATE_DROPDOWN_ID = DROPDOWN_CONFIGS[0].label;

const TicketList = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { selectedId } = useDropdownContext();

  const selectedDateId = selectedId(PERFORMANCE_DATE_DROPDOWN_ID);

  const dateParam = selectedDateId ? selectedDateId.slice(0, 10) : undefined;

  const { data: ticketOptionData } = useQuery(
    TICKET_QUERY_OPTIONS.TICKET_OPTION(Number(eventId), dateParam),
  );

  const tickets = ticketOptionData ?? [];

  const handleCardClick = (id?: number) => {
    if (id) {
      navigate(ROUTE_PATH.TICKET_DETAIL.replace(":ticketId", String(id)));
    }
  };

  return (
    <div className={styles.container}>
      {tickets.map((ticket) => (
        <TicketOptionCard
          key={ticket.id}
          onClickCard={() => handleCardClick(ticket.id)}
          {...ticket}
        />
      ))}
    </div>
  );
};

export default TicketList;
