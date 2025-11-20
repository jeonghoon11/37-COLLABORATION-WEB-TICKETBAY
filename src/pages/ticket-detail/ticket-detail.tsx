import { useParams } from "react-router";

const TicketDetail = () => {
  const { ticketId } = useParams();

  return <div>TicketDetail-{ticketId}</div>;
};

export default TicketDetail;
