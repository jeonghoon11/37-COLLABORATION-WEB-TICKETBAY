import { lazy } from "react";

export const HomePage = lazy(() => import("@pages/home/home"));
export const SelectTicketPage = lazy(() => import("@pages/select-ticket/select-ticket"));
export const TicketDetailPage = lazy(() => import("@pages/ticket-detail/ticket-detail"));
