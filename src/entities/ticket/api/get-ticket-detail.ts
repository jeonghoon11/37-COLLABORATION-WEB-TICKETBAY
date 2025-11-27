import type {
  GetTicketDetailRequest,
  GetTicketDetailResponse,
  TicketDetail,
} from "@entities/ticket/types/types";

import { api } from "@shared/apis/instance";
import { END_POINT } from "@shared/config/end-point";

export const getTicketDetail = async ({ ticketId }: GetTicketDetailRequest) => {
  const response = await api.get<GetTicketDetailResponse>(
    END_POINT.TICKET.GET_TICKET_DETAIL(ticketId),
  );

  return response.data?.data as TicketDetail;
};
