import {
  CouponIcon,
  DiscountIcon,
  GoodsIcon,
  MickIcon,
  MovieIcon,
  MusicalIcon,
  SportsIcon,
  TravelIcon,
} from "@assets/icons";
import CategoryIcon from "@shared/components/category-icon/category-icon";

import * as styles from "./category.css";

const CATEGORIES = [
  { id: "concert", label: "콘서트", Icon: MickIcon },
  { id: "sports", label: "스포츠", Icon: SportsIcon },
  { id: "musical", label: "뮤지컬/연극", Icon: MusicalIcon },
  { id: "movie", label: "영화/전시", Icon: MovieIcon },
  { id: "travel", label: "숙박/여행", Icon: TravelIcon },
  { id: "coupon", label: "상품권/쿠폰", Icon: CouponIcon },
  { id: "goods", label: "굿즈", Icon: GoodsIcon },
  { id: "discount", label: "정가이하", Icon: DiscountIcon },
] as const;

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {CATEGORIES.map(({ id, label, Icon }) => (
          <CategoryIcon key={id} icon={<Icon />} text={label} />
        ))}
      </div>
    </div>
  );
};

export default Category;

