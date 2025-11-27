import type { GetTopEventsRequest, GetTopEventsResponse } from "@entities/event/types/types";

import { api } from "@shared/apis/instance";
import { END_POINT } from "@shared/config/end-point";

export const getTopEvents = async (params?: GetTopEventsRequest) => {
  const response = await api.get<GetTopEventsResponse>(END_POINT.EVENT.GET_BEST_TICKET, {
    params,
  });

  return response.data?.data?.events;
};

