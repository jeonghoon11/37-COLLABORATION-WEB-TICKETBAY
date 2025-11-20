import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router";

import { rootStyle } from "@shared/styles/global.css";

export default function GlobalLayout() {
  return (
    <div className={rootStyle}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ScrollRestoration />
    </div>
  );
}
