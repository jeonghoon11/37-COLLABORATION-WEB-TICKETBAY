import { CUSTOMER_SERVICE } from "@widgets/home/constants/contact";

import * as styles from "./contact.css";

const Contact = () => {
  const { TEL, OPERATING_HOURS, LUNCH_BREAK } = CUSTOMER_SERVICE;

  return (
    <section className={styles.container}>
      <p className={styles.telephone}>고객센터 | {TEL}</p>
      <p className={styles.text}>운영시간: {OPERATING_HOURS}</p>
      <p className={styles.text}>점심시간: {LUNCH_BREAK}</p>
    </section>
  );
};

export default Contact;
