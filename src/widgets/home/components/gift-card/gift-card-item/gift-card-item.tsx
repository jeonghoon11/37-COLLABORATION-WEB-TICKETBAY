import { formatPriceToKorean } from "@shared/utils/format-price-to-korean";

import * as styles from "./gift-card-item.css";

interface Props {
  imageUrl: string;
  brandName: string;
  productTitle: string;
  originalPrice: number;
  discountRate: number;
  salePrice: number;
}

const GiftCardItem = ({
  imageUrl,
  brandName,
  productTitle,
  originalPrice,
  discountRate,
  salePrice,
}: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl} alt="기프트카드 이미지" />
      <div className={styles.textContainer}>
        <p className={styles.brandName}>{brandName}</p>
        <p className={styles.productTitle}>{productTitle}</p>
        <div className={styles.priceContainer}>
          <p className={styles.originalPrice}>{formatPriceToKorean(originalPrice)}원</p>
          <p className={styles.discountPrice}>
            <span className={styles.discountRate}>{discountRate}%</span>
            <span className={styles.salePrice}>{formatPriceToKorean(salePrice)}원</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftCardItem;
