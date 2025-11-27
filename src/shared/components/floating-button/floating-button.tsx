import { ChevronBigTopIcon, FabIcon } from "@assets/icons";

import * as styles from "./floating-button.css";

interface Props {
  isUpperButtonVisible: boolean;
}

const FloatingButton = ({ isUpperButtonVisible }: Props) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.floatingButtonContainer}>
      {isUpperButtonVisible && (
        <button
          type="button"
          className={styles.floatingButtonTop}
          onClick={handleScrollToTop}
          aria-label="최상단으로 이동"
        >
          <ChevronBigTopIcon width={24} height={24} />
        </button>
      )}

      <button type="button" className={styles.floatingButtonHelp} aria-label="1:1 문의하기">
        <FabIcon width={17} height={17} />
      </button>
    </div>
  );
};

export default FloatingButton;
