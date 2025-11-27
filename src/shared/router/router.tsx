import { createBrowserRouter } from "react-router";

import { PageLayout } from "@shared/layouts/page-layouts";
import GlobalLayout from "@shared/router/global-layout";
import { HomePage, SelectTicketPage, TicketDetailPage } from "@shared/router/lazy";
import { ROUTE_PATH } from "@shared/router/path";

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: (
          <PageLayout hasTabBar hasFloatingButton isUpperButtonVisible>
            <HomePage />
          </PageLayout>
        ),
      },
      {
        path: ROUTE_PATH.SELECT_TICKET,
        element: (
          <PageLayout hasTabBar hasFloatingButton>
            <SelectTicketPage />
          </PageLayout>
        ),
      },
      {
        path: ROUTE_PATH.TICKET_DETAIL,
        element: (
          <PageLayout hasFloatingButton isUpperButtonVisible>
            <TicketDetailPage />
          </PageLayout>
        ),
      },
    ],
  },
]);
