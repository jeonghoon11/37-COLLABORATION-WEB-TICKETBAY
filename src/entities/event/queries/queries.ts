import { getTopEvents } from "@entities/event/api/getTopEvents";
import { EVENT_QUERY_KEY } from "@entities/event/queries/query-key";
import { queryOptions } from "@tanstack/react-query";

export const EVENT_QUERY_OPTIONS = {
  TOP_EVENTS: (page?: number, size?: number) => {
    return queryOptions({
      queryKey: EVENT_QUERY_KEY.TOP_EVENTS(page, size),
      queryFn: () => getTopEvents({ page, size }),
    });
  },
};

