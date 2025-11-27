import type { components, paths } from "@shared/types/schema";

type GetTicketListPath = paths["/events/{eventId}/tickets"]["get"]["parameters"]["path"];
type GetTicketListQuery = paths["/events/{eventId}/tickets"]["get"]["parameters"]["query"];

export type GetOptionCardRequest = GetTicketListPath & GetTicketListQuery;

export type GetOptionCardResponse =
  paths["/events/{eventId}/tickets"]["get"]["responses"]["200"]["content"]["*/*"];

export type TicketResponse = components["schemas"]["TicketResponse"];

export type GetTicketDetailRequest = paths["/tickets/{ticketId}"]["get"]["parameters"]["path"];

export type GetTicketDetailResponse =
  paths["/tickets/{ticketId}"]["get"]["responses"]["200"]["content"]["*/*"];

type RawEventResponse = components["schemas"]["EventResponse"];
type RawSeatResponse = components["schemas"]["SeatResponse"];

export type EventDetail = Required<RawEventResponse>;
export type SeatDetail = Required<RawSeatResponse>;

export interface TicketDetail {
  id: number;
  productNumber: number;
  event: EventDetail;
  seat: SeatDetail;
  status: boolean;
  pricePerTicket: number;
  amount: number;
  totalPrice: number;
  createdAt: string;
}
