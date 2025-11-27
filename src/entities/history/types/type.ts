import type { components, paths } from "@shared/types/schema";

export type GetRecentTicketRequest = paths["/users/{userId}/recent"]["get"]["parameters"]["path"];

export type GetRecentTicketResponse =
  paths["/users/{userId}/recent"]["get"]["responses"]["200"]["content"]["*/*"];

export type HistoryResponse = components["schemas"]["HistoryResponse"];
