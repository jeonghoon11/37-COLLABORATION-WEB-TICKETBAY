import AccordionItem from "./accordion";

import * as styles from "./accordion.css";

const SeatMapAccordion = () => {
  return (
    <AccordionItem title="좌석 배치도">
      <div className={styles.seatMapWrapper}>
        <img src="/stadium.webp" alt="구장 좌석 배치도" className={styles.seatMapImage} />
      </div>
    </AccordionItem>
  );
};

export default SeatMapAccordion;
