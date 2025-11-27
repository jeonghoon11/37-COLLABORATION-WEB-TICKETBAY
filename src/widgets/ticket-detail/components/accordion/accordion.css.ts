import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

// 아코디언 한 블럭(헤더 + 콘텐츠) 전체 래퍼
export const accordionSection = style({
  width: "100%",
  backgroundColor: themeVars.color.grayscale9,
  borderBottom: `1px solid ${themeVars.color.grayscale7}`,
});

// 헤더 버튼 (체크 아이콘 + 타이틀 + 화살표)
export const headerButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "1.4rem 3rem 1.4rem 1.6rem",
  boxSizing: "border-box",
  backgroundColor: themeVars.color.grayscale9,
});

// 헤더 왼쪽(체크 아이콘 + 타이틀) 래퍼
export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  columnGap: "0.8rem",
});

export const checkIconWrapper = style({
  width: "2rem",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: themeVars.color.semantic,
});

// 헤더 타이틀 텍스트
export const title = style({
  ...themeVars.fontStyles.body1_medium,
  color: themeVars.color.grayscale1,
});

// 헤더 우측 화살표
export const arrowWrapper = style({
  width: "2rem",
  height: "2rem",
  transition: "transform 0.2s ease",
  flexShrink: 0,
});

export const arrowOpen = style({
  transform: "rotate(180deg)",
});

// 공통 내부 콘텐츠
export const content = style({
  boxSizing: "border-box",
  backgroundColor: themeVars.color.grayscale8,
  overflow: "hidden",
  maxHeight: "0",
  transition: "max-height 0.25s ease",
});

export const contentOpen = style({
  maxHeight: "500px",
});

// 좌석 배치도 아코디언 콘텐츠
export const seatMapWrapper = style({
  display: "flex",
  justifyContent: "center",
  backgroundColor: themeVars.color.grayscale9,
});

export const seatMapImage = style({
  width: "100%",
  maxWidth: "37.5rem",
  height: "auto",
});

// 구매 안전 프로그램 아코디언 콘텐츠
export const safetyWrapper = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  padding: "1.6rem",
  paddingRight: "3.1rem",
});

// 구매 안전 프로그램 콘텐츠 내부 텍스트
export const safetyItem = style([
  themeVars.fontStyles.body2_regular,
  {
    color: themeVars.color.grayscale2,
    position: "relative",
    paddingLeft: "1.2rem",
  },
]);
