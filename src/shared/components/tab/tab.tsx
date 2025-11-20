import { type ReactNode, useState } from "react";

import { TabContext, useTabContext } from "./tab-context";

import * as styles from "./tab.css";

interface TabValueProps {
  value: string;
  children: ReactNode;
}

const Container = ({ initialValue, children }: { initialValue: string; children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState(initialValue);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>{children}</TabContext.Provider>
  );
};

const List = ({ children }: { children: ReactNode }) => {
  return (
    <nav>
      <ul className={styles.list}>{children}</ul>
    </nav>
  );
};

const Item = ({ value, children }: TabValueProps) => {
  const { selectedTab, setSelectedTab } = useTabContext();

  const isActive = selectedTab === value;

  return (
    <li className={styles.item}>
      <button
        type="button"
        onClick={() => setSelectedTab(value)}
        className={styles.button({ isActive })}
      >
        {children}
      </button>
    </li>
  );
};

const Panel = ({ value, children }: TabValueProps) => {
  const { selectedTab } = useTabContext();

  if (selectedTab !== value) {
    return null;
  }

  return <>{children}</>;
};

const Tab = {
  Container,
  List,
  Item,
  Panel,
};

export default Tab;
