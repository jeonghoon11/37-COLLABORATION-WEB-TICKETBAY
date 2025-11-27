export const ROUTE_PATH = {
  HOME: "/",
  SELECT_TICKET: "/select-ticket/:eventId",
  TICKET_DETAIL: "/ticket-detail/:ticketId",
} as const;

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
