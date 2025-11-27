import type { GetOptionCardRequest, GetOptionCardResponse } from "@entities/ticket/types/types";

import { api } from "@shared/apis/instance";
import { END_POINT } from "@shared/config/end-point";

export const getTicketOption = async ({ eventId, date }: GetOptionCardRequest) => {
  const response = await api.get<GetOptionCardResponse>(
    END_POINT.TICKET.GET_TICKET_OPTION(eventId),
    {
      params: date ? { date } : undefined,
    },
  );

  return response.data?.data?.tickets;
};
