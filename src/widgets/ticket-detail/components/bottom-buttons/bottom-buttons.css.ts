import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  backgroundColor: themeVars.color.grayscale9,
});

// 안내 문구
export const notice = style({
  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale3,
  padding: "1.6rem",
  whiteSpace: "pre-line",
});

// Ticketbay Global 버튼 wrapper
export const globalButtonWrapper = style({
  padding: "0.8rem 1.6rem 1.6rem",
});

// 하단 두 개 버튼 row
export const buttonRow = style({
  display: "flex",
  padding: "1.2rem 1.6rem",
  gap: "0.8rem",
});

// 비교담기 버튼
export const compareButtonWrapper = style({
  flex: "0 1 auto",
});

// 구매하기 버튼
export const buyButtonWrapper = style({
  flex: "1 0 0",
  display: "flex",
});
