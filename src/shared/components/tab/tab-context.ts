import { createContext, useContext } from "react";

interface Props {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

export const TabContext = createContext<Props | null>(null);

export const useTabContext = () => {
  const tabContext = useContext(TabContext);

  if (!tabContext) {
    throw new Error("Tab 컴포넌트는 Tab.Container 내부에서 사용되어야 합니다.");
  }

  return tabContext;
};
