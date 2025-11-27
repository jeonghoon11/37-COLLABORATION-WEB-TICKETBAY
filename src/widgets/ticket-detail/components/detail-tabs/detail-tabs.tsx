import Tab from "@shared/components/tab/tab";

import * as styles from "./detail-tabs.css";

const TAB_KEYS = {
  DETAIL: "DETAIL",
  PAYMENT: "PAYMENT",
  REFUND: "REFUND",
} as const;

const TAB_LIST = [
  { value: TAB_KEYS.DETAIL, label: "상세정보" },
  { value: TAB_KEYS.PAYMENT, label: "상품 결제/수령안내" },
  { value: TAB_KEYS.REFUND, label: "취소/환불안내" },
] as const;

const TAB_PANEL_LIST = [TAB_KEYS.DETAIL, TAB_KEYS.PAYMENT, TAB_KEYS.REFUND] as const;

const DetailRow = () => {
  return (
    <div className={styles.row}>
      <span className={styles.label}>등록 일시</span>
      <span className={styles.value}>2025.10.30 21:35</span>
    </div>
  );
};

const DetailTabs = () => {
  return (
    <>
      <div className={styles.whiteBlock} />
      <section className={styles.container}>
        <Tab.Container initialValue={TAB_KEYS.DETAIL}>
          {/* 상단 탭 영역 (공통 Tab 컴포넌트 사용) */}
          <div>
            <Tab.List>
              {TAB_LIST.map((tab) => (
                <Tab.Item key={tab.value} value={tab.value}>
                  {tab.label}
                </Tab.Item>
              ))}
            </Tab.List>
          </div>

          {/* 탭별 컨텐츠 영역 */}
          <div className={styles.content}>
            {TAB_PANEL_LIST.map((key) => (
              <Tab.Panel key={key} value={key}>
                <DetailRow />
              </Tab.Panel>
            ))}
          </div>
        </Tab.Container>
      </section>
    </>
  );
};

export default DetailTabs;
