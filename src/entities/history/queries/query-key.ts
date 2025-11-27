export const HISTORY_QUERY_KEY = {
  ALL: ["history"],
  RECENT_TICKET: (userId: number) => [...HISTORY_QUERY_KEY.ALL, "history-recent", userId],
};
