import * as styles from "./best-ticket-item.css";

interface Props {
  title: string;
  location: string;
  rank: number;
  isTopRank: boolean;
  onClick?: () => void;
}

const BestTicketItem = ({ rank, title, location, isTopRank, onClick }: Props) => {
  const isTight = rank >= 10;
  const isClickable = !!onClick;

  return (
    <div className={styles.container({ isTight, clickable: isClickable })} onClick={onClick}>
      <h3 className={styles.rank({ isTopRank })}>{rank}</h3>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default BestTicketItem;

