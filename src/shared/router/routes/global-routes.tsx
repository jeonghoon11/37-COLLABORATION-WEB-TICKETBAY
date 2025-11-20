import { HomePage, SelectTicketPage, TicketDetailPage } from "@shared/router/lazy";
import { ROUTE_PATH } from "@shared/router/path";

export const globalRoutes = [
  {
    path: ROUTE_PATH.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTE_PATH.SELECT_TICKET,
    element: <SelectTicketPage />,
  },
  {
    path: ROUTE_PATH.TICKET_DETAIL,
    element: <TicketDetailPage />,
  },
];
