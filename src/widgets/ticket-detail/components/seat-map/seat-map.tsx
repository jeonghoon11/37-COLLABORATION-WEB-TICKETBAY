import * as styles from "./seat-map.css";

type SeatMapProps = {
  imageSrc?: string;
};

const SeatMap = ({ imageSrc }: SeatMapProps) => {
  if (!imageSrc) {
    return null;
  }

  return <img src={imageSrc} alt="좌석 배치도" className={styles.seatImage} />;
};

export default SeatMap;
