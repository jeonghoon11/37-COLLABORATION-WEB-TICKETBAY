import BottomSheetContent from "@widgets/select-ticket/components/bottom-sheet/bottom-sheet-content";
import BottomSheetHeader from "@widgets/select-ticket/components/bottom-sheet/bottom-sheet-header";
import { DropdownProvider } from "@widgets/select-ticket/components/dropdown/dropdown-context";
import FilterSection from "@widgets/select-ticket/components/filter-section/filter-section";
import TicketList from "@widgets/select-ticket/components/ticket-list/ticket-list";
import useBottomSheetDrag from "@widgets/select-ticket/hooks/use-bottom-sheet-drag";

import * as styles from "./bottom-sheet.css";

const STADIUM_IMAGE_URL = "/stadium.webp";

const NAVIGATION_HEIGHT = 48;
const HEADER_HEIGHT = 61;
const IMAGE_HEIGHT = 271;

const BottomSheet = () => {
  const { sheetRef, headerRef, contentRef } = useBottomSheetDrag({
    navigationHeight: NAVIGATION_HEIGHT,
    headerHeight: HEADER_HEIGHT,
    maxTranslate: IMAGE_HEIGHT,
  });

  return (
    <>
      <div className={styles.base}>
        <img src={STADIUM_IMAGE_URL} alt="stadium" className={styles.image} />
      </div>

      <div ref={sheetRef} className={styles.bottomSheet}>
        <BottomSheetHeader ref={headerRef} />
        <BottomSheetContent ref={contentRef}>
          <DropdownProvider>
            <FilterSection />
            <TicketList />
          </DropdownProvider>
        </BottomSheetContent>
      </div>
    </>
  );
};

export default BottomSheet;
