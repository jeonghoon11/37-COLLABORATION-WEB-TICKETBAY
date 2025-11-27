import AccordionItem from "./accordion";

import * as styles from "./accordion.css";

const SAFETY_TEXTS = [
  "티켓베이의 모든 판매자는 본인인증이 완료된 회원입니다.",
  "결제하시는 대금은 티켓베이가 안전하게 보관하며, 티켓을 수령 후 구매 확정을 하면 판매자에게 지급됩니다.",
  "티켓베이는 공연(경기)이 공식적으로 취소될 경우 100% 환불을 보장합니다.",
  "티켓베이는 안전한 거래를 위해 고객센터를 운영하고 있습니다. 문의가 있으시면 언제든지 연락 주시기 바랍니다.",
];

const SafetyProgramAccordion = () => {
  return (
    <AccordionItem title="티켓베이 구매 안전 프로그램">
      <div className={styles.safetyWrapper}>
        {SAFETY_TEXTS.map((text, index) => (
          <p key={index} className={styles.safetyItem}>
            {text}
          </p>
        ))}
      </div>
    </AccordionItem>
  );
};

export default SafetyProgramAccordion;
