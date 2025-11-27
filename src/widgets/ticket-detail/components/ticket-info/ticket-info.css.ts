import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

// 전체 래퍼
export const container = style({
  padding: "1rem 1.6rem 1.6rem",
  backgroundColor: themeVars.color.grayscale9,
});

// "상품 정보  /  상품번호 9702..."
export const headerRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 -1.6rem 0",
  padding: "1rem 1.6rem",
  borderBottom: `1px solid ${themeVars.color.grayscale7}`,
});

// "상품 정보" 타이틀
export const sectionTitle = style({
  ...themeVars.fontStyles.body1_bold,
  color: themeVars.color.grayscale1,
});

// "상품번호" 라벨 + 값 묶음
export const productNumber = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

// "상품번호" 라벨
export const productNumberLabel = style({
  ...themeVars.fontStyles.body3_regular,
  color: themeVars.color.grayscale3,
});

// 번호 값
export const productNumberValue = style({
  ...themeVars.fontStyles.body3_regular,
  color: themeVars.color.grayscale1,
});

// 아래 내용 전체 래퍼
export const content = style({
  paddingTop: "1.6rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

// 브레드크럼 (스포츠 > 2025 프로야구 포스트시즌 > 한국시리즈 5차전 [대전])
export const breadcrumb = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale3,
  display: "flex",
  alignItems: "center",
});

export const breadcrumbIcon = style({
  margin: "0 0.4rem",
  verticalAlign: "middle",
});

export const breadcrumbItem = style({
  display: "flex",
  alignItems: "center",
});

// "경기 일시 / 장소" 묶음
export const metaBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
});

// 각 행: "경기 일시  2025..."
export const metaRow = style({
  display: "flex",
  gap: "0.3rem",
});

// "경기 일시", "경기 장소" 라벨
export const metaLabel = style({
  ...themeVars.fontStyles.body3_regular,
  color: themeVars.color.grayscale3,
});

// 라벨 오른쪽 값
export const metaValue = style({
  ...themeVars.fontStyles.body3_medium,
  color: themeVars.color.grayscale1,
});

// 메인 타이틀 "LG vs 한화 | 507구역 | 2열"
export const mainTitle = style({
  ...themeVars.fontStyles.title_semibold,
  color: themeVars.color.grayscale1,
  marginTop: "0.8rem",
});

// 좌석 타입 "외야 지정석"
export const seatType = style({
  ...themeVars.fontStyles.body3_regular,
  color: themeVars.color.grayscale3,
});
