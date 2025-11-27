import BestTicketList from "@widgets/home/components/best-ticket/best-ticket-list/best-ticket-list";
import Section from "@widgets/home/components/section/section";

import Tab from "@shared/components/tab/tab";

import * as styles from "./best-ticket.css";

const BestTicket = () => {
  return (
    <Section title="베스트" highlight="인기티켓">
      <div className={styles.container}>
        <Tab.Container initialValue="0">
          <Tab.List>
            <Tab.Item value="0">1~10위</Tab.Item>
            <Tab.Item value="1">11~20위</Tab.Item>
          </Tab.List>
          <Tab.Panel value="0">
            <BestTicketList page={0} />
          </Tab.Panel>
          <Tab.Panel value="1">
            <BestTicketList page={1} />
          </Tab.Panel>
        </Tab.Container>
      </div>
    </Section>
  );
};

export default BestTicket;
