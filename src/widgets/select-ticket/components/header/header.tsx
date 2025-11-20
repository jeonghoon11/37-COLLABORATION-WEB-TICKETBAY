import { ChevronSmallDownIcon } from "@assets/icons";

import * as styles from "./header.css";

interface Props {
  eventTitle: string;
  stadiumName: string;
}

const Header = ({ eventTitle, stadiumName }: Props) => {
  return (
    <header className={styles.container}>
      <button type="button" className={styles.titleButton}>
        <p className={styles.eventTitleText}>{eventTitle}</p>
        <ChevronSmallDownIcon width={24} height={24} className={styles.Icon} />
      </button>
      <p className={styles.stadiumName}>{stadiumName}</p>
    </header>
  );
};

export default Header;
