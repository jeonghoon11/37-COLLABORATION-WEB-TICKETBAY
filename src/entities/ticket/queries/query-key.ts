export const TICKET_QUERY_KEY = {
  ALL: ["ticket"],
  OPTION_CARD: (eventId: number, date?: string) => [
    ...TICKET_QUERY_KEY.ALL,
    "ticket-option",
    eventId,
    date,
  ],
  // 티켓 상세 조회 쿼리키
  DETAIL: (ticketId: number) => [...TICKET_QUERY_KEY.ALL, "ticket-detail", ticketId],
};
