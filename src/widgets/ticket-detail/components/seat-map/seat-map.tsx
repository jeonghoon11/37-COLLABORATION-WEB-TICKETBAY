import Skeleton from "@shared/components/skeleton/skeleton";

import * as styles from "./seat-map.css";

type SeatMapProps = {
  imageSrc?: string;
  isLoading?: boolean;
};

const SeatMap = ({ imageSrc, isLoading }: SeatMapProps) => {
  if (!imageSrc) {
    return null;
  }

  return (
    <>
      {isLoading && <Skeleton width="37.5rem" height="37.6rem" className={styles.seatImage} />}

      {!isLoading && <img src={imageSrc} alt="좌석 배치도" className={styles.seatImage} />}
    </>
  );
};

export default SeatMap;
