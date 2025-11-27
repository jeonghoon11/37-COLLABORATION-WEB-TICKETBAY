import { forwardRef } from "react";

import * as styles from "./bottom-sheet.css";

interface Props {
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
}

const BottomSheetHeader = forwardRef<HTMLDivElement, Props>(({ onTouchStart }, ref) => {
  return (
    <div ref={ref} className={styles.header} onTouchStart={onTouchStart}>
      <div className={styles.dragHandle} />
    </div>
  );
});

BottomSheetHeader.displayName = "BottomSheetHeader";

export default BottomSheetHeader;
