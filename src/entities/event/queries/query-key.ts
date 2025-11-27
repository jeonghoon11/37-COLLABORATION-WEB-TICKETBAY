export const EVENT_QUERY_KEY = {
  ALL: ["event"],
  TOP_EVENTS: (page?: number, size?: number) => [
    ...EVENT_QUERY_KEY.ALL,
    "top-events",
    page,
    size,
  ],
};

