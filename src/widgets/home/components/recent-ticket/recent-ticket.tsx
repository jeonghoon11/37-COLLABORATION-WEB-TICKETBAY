import RecentTicketList from "@widgets/home/components/recent-ticket/recent-ticket-list/recent-ticket-list";
import Section from "@widgets/home/components/section/section";

import * as styles from "./recent-ticket.css";

const RecentTicket = () => {
  return (
    <Section title="최근 본 " highlight="티켓" showMore={true}>
      <div className={styles.container}>
        <RecentTicketList />
      </div>
    </Section>
  );
};

export default RecentTicket;
