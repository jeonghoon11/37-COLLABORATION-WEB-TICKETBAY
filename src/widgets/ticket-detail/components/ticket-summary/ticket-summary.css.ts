import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

// 전체 래퍼
export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  padding: "2rem 1.6rem",
  backgroundColor: themeVars.color.grayscale9,
});

// 각 행(티켓 보유 여부 / 한 매 가격 / 수량 / 총 가격)
export const row = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "1rem",
  selectors: {
    "&:nth-of-type(-n+3)": {
      borderBottom: `1px solid ${themeVars.color.grayscale7}`,
    },
    "&:nth-of-type(4)": {
      paddingBottom: 0,
    },
  },
});

// 왼쪽 라벨 텍스트
export const label = style({
  ...themeVars.fontStyles.body2_regular,
  color: themeVars.color.grayscale3,
});

// 오른쪽 값 기본 스타일
export const value = style({
  ...themeVars.fontStyles.body2_medium,
  color: themeVars.color.grayscale1,
  textAlign: "right",
});

// "150,000원" 텍스트
export const totalPrice = style({
  ...themeVars.fontStyles.title_semibold,
  color: themeVars.color.primary,
  textAlign: "right",
});

// "팬파워 345FP 적립 ?" 줄 전체 래퍼
export const pointRow = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "0.2rem",
  marginTop: "0.8rem",
});

// "팬파워 345FP 적립" 텍스트
export const pointText = style({
  ...themeVars.fontStyles.body3_medium,
  color: themeVars.color.grayscale3,
  letterSpacing: "-0.12px",
});

// 아이콘 래퍼
export const pointIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  padding: "0.1rem",
  backgroundColor: themeVars.color.grayscale9,
  borderRadius: "50%",
  flexShrink: 0,
});
