import type { GetRecentTicketRequest, GetRecentTicketResponse } from "@entities/history/types/type";

import { api } from "@shared/apis/instance";
import { END_POINT } from "@shared/config/end-point";

export const getRecentTicket = async ({ userId }: GetRecentTicketRequest) => {
  const response = await api.get<GetRecentTicketResponse>(
    END_POINT.HISTORY.GET_RECENT_TICKET(userId),
  );

  return response.data?.data?.histories;
};
