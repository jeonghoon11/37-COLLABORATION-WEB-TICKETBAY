import { getRecentTicket } from "@entities/history/api/get-recent-ticket";
import { HISTORY_QUERY_KEY } from "@entities/history/queries/query-key";
import { queryOptions } from "@tanstack/react-query";

export const HISTORY_QUERY_OPTIONS = {
  RECENT_HISTORY: (userId: number) => {
    return queryOptions({
      queryKey: HISTORY_QUERY_KEY.RECENT_TICKET(userId),
      queryFn: () => getRecentTicket({ userId }),
    });
  },
};
