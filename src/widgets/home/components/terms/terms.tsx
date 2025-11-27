import * as styles from "./terms.css";

const TOP_TERMS = ["이용약관", "취소 패널티 정책", "개인정보처리방침"] as const;

const BOTTOM_TERMS = ["위치기반서비스 이용약관", "청년보호정책"] as const;

const Terms = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.container({ row: "top" })}>
        {TOP_TERMS.map((label) => (
          <li key={label}>
            <button className={styles.button}>{label}</button>
          </li>
        ))}
      </ul>
      <ul className={styles.container({ row: "bottom" })}>
        {BOTTOM_TERMS.map((label) => (
          <li key={label}>
            <button className={styles.button}>{label}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Terms;
