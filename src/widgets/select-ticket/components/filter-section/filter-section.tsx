import CheckBox from "@widgets/select-ticket/components/check-box/check-box";
import DropdownList from "@widgets/select-ticket/components/dropdown-list/dropdown-list";
import SafetyNoticeBar from "@widgets/select-ticket/components/safety-notice-bar/safety-notice-bar";

import * as styles from "./filter-section.css";

const CHECK_BOXES = [
  {
    id: 1,
    label: "연석만 보기",
  },
  {
    id: 2,
    label: "정가 이하 상품보기",
  },
];

const FilterSection = () => {
  return (
    <div className={styles.container}>
      <SafetyNoticeBar label="입장 안심 이용 가능" />
      <DropdownList />
      <div className={styles.checkBoxes}>
        {CHECK_BOXES.map(({ id, label }) => (
          <CheckBox key={id} label={label} />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
