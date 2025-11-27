import { forwardRef, type ReactNode } from "react";

import * as styles from "./bottom-sheet.css";

interface Props {
  children?: ReactNode;
}

const BottomSheetContent = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div ref={ref} className={styles.content}>
      {children}
    </div>
  );
});

export default BottomSheetContent;
