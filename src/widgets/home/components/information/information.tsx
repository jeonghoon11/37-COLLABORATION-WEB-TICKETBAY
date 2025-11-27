import { TicketbayGlobalButton } from "@widgets/home/components/ticketbay-global-button/ticketbay-global-button";

import { LEGAL_NOTICE } from "@shared/constants/legal-notice";

import * as styles from "./information.css";

const Information = () => {
  return (
    <section>
      <p className={styles.text}>@TICKETBAY.ALL RIGHTS RESERVED .</p>
      <p className={styles.notice}>{LEGAL_NOTICE}</p>
      <TicketbayGlobalButton />
    </section>
  );
};

export default Information;
