import { useState } from "react";

import { TicketbayGlobalButton } from "@widgets/home/components/ticketbay-global-button/ticketbay-global-button";
import { BuyButton } from "@widgets/ticket-detail/components/buy-button/buy-button";

import CompareAddButton from "@shared/components/compare-add-button/compare-add-button";
import FooterMenu from "@shared/components/footer-menu/footer-menu";
import { LEGAL_NOTICE } from "@shared/constants/legal-notice";

import * as styles from "./bottom-buttons.css";

const BottomButtons = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCompareButtonClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <section className={styles.container}>
      <FooterMenu />

      <p className={styles.notice}>{LEGAL_NOTICE}</p>

      <div className={styles.globalButtonWrapper}>
        <TicketbayGlobalButton />
      </div>

      <div className={styles.buttonRow}>
        <div className={styles.compareButtonWrapper}>
          <CompareAddButton size="lg" isActive={isActive} onClick={handleCompareButtonClick} />
        </div>

        <div className={styles.buyButtonWrapper}>
          <BuyButton />
        </div>
      </div>
    </section>
  );
};

export default BottomButtons;
