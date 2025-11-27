import type { ReactNode } from "react";

import FloatingButton from "@shared/components/floating-button/floating-button";
import TabBar from "@shared/components/tabbar/tabbar";

interface Props {
  children: ReactNode;
  hasTabBar?: boolean;
  hasFloatingButton?: boolean;
  isUpperButtonVisible?: boolean;
}

export function PageLayout({
  children,
  hasTabBar,
  hasFloatingButton,
  isUpperButtonVisible,
}: Props) {
  return (
    <>
      {children}
      {hasFloatingButton && <FloatingButton isUpperButtonVisible={isUpperButtonVisible ?? false} />}
      {hasTabBar && <TabBar />}
    </>
  );
}
