import type { components, paths } from "@shared/types/schema";

export type GetTopEventsRequest = paths["/events/top"]["get"]["parameters"]["query"];

export type GetTopEventsResponse =  paths["/events/top"]["get"]["responses"]["200"]["content"]["*/*"];

export type EventPageMetaResponse = components["schemas"]["EventPageMetaResponse"];
