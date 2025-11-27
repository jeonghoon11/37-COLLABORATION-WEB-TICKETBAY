import type { ReactElement } from "react";

import { ChevronSmallRightIcon, HelpCircleIcon } from "@assets/icons";

import * as styles from "./payment-method-select.css";

const MOCK_PAYMENT_METHOD = {
  label: "PIN(E-ticket) 거래",
  guideText: "PIN(E-ticket) 거래란?",
};

const PaymentMethodSelect = (): ReactElement => {
  return (
    <section className={styles.container} aria-labelledby="payment-method-select-heading">
      {/* HEADER */}
      <div className={styles.headerRow}>
        <h2 id="payment-method-select-heading" className={styles.headerLabel}>
          거래 방식 선택
        </h2>

        <button type="button" aria-label="거래 방식 안내" className={styles.headerIconButton}>
          <HelpCircleIcon />
        </button>
      </div>

      {/* METHOD ROW */}
      <div className={styles.methodRow}>
        {/* 왼쪽: 라디오 + 라벨 */}
        <div className={styles.methodInfo}>
          <div className={styles.radioWrapper}>
            <div className={styles.radioOuter}>
              <div className={styles.radioInner} />
            </div>
          </div>

          <span className={styles.methodLabel}>{MOCK_PAYMENT_METHOD.label}</span>
        </div>

        {/* 오른쪽: 안내 버튼 */}
        <button
          type="button"
          aria-label="PIN(E-ticket) 거래 설명 보기"
          className={styles.methodGuideButton}
        >
          <span className={styles.methodGuideText}>{MOCK_PAYMENT_METHOD.guideText}</span>

          <span className={styles.methodGuideIcon} aria-hidden="true">
            <ChevronSmallRightIcon width={24} height={24} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default PaymentMethodSelect;
