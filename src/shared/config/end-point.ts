export const END_POINT = {
  HISTORY: {
    GET_RECENT_TICKET: (userId: number) => `/users/${userId}/recent`,
  },
  EVENT: {
    GET_BEST_TICKET: "/events/top",
  },
  TICKET: {
    GET_TICKET_OPTION: (eventId: number) => `/events/${eventId}/tickets`,
    GET_TICKET_DETAIL: (ticketId: number) => `/tickets/${ticketId}`,
  },
};
