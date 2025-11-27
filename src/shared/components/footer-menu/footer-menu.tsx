import * as styles from "./footer-menu.css";

const menuItems = ["서비스 소개", "이용 가이드", "공지사항", "고객센터"];

const FooterMenu = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        {menuItems.map((item, index) => (
          <li key={item} className={styles.li}>
            <button type="button" className={styles.button}>
              {item}
            </button>
            {index !== menuItems.length - 1 && <div className={styles.divider} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterMenu;
