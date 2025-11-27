import { StarFiveIcon } from "@assets/icons";

import * as styles from "./user-review.css";

interface Props {
  category: string;
  matchTitle: string;
  userName: string;
  date: string;
  content: string;
}

const UserReview = ({ category, matchTitle, userName, date, content }: Props) => {
  return (
    <button type="button" className={styles.container}>
      <p className={styles.category}>{category}</p>
      <div>
        <p className={styles.matchTitle}>{matchTitle}</p>
        <div className={styles.info}>
          <StarFiveIcon width={77} height={17} />
          <p className={styles.userName}>{userName}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
      <p className={styles.content}>{content}</p>
    </button>
  );
};

export default UserReview;
