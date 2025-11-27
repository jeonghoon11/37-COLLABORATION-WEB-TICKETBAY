import GiftCardItem from "@widgets/home/components/gift-card/gift-card-item/gift-card-item";
import Section from "@widgets/home/components/section/section";
import { GIFT_CARD_LIST } from "@widgets/home/constants/gift-card-list";

import Tab from "@shared/components/tab/tab";

import * as styles from "./gift-card.css";

export const TAB = [
  { id: "0", value: "전체" },
  { id: "1", value: "카페" },
  { id: "2", value: "치킨" },
  { id: "3", value: "버거/피자" },
];
const GiftCard = () => {
  return (
    <Section title="모바일 " highlight="상품권샵" showMore={true}>
      <div className={styles.container}>
        <Tab.Container initialValue={TAB[0].id}>
          <Tab.List>
            {TAB.map((tab) => (
              <Tab.Item key={tab.id} value={tab.id}>
                {tab.value}
              </Tab.Item>
            ))}
          </Tab.List>
          <div className={styles.list}>
            {TAB.map((tab) => (
              <Tab.Panel key={tab.id} value={tab.id}>
                {GIFT_CARD_LIST.map((item) => (
                  <GiftCardItem
                    key={item.id}
                    imageUrl={item.imageUrl}
                    brandName={item.brand}
                    productTitle={item.title}
                    originalPrice={item.originalPrice}
                    discountRate={item.saleRate}
                    salePrice={item.salePrice}
                  />
                ))}
              </Tab.Panel>
            ))}
          </div>
        </Tab.Container>
      </div>
    </Section>
  );
};

export default GiftCard;
