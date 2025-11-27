import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

// 전체 컨테이너
export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "2rem 1.6rem",
  gap: "1rem",
});

// 헤더 영역 ("거래 방식 선택" + ? 아이콘)
export const headerRow = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const headerLabel = style({
  ...themeVars.fontStyles.body2_medium,
  color: themeVars.color.grayscale3,
});

export const headerIconButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
});

// 거래 방식 선택 Row 전체 (좌측 라디오 + 우측 안내 버튼)
export const methodRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

// 좌측 영역 (라디오 버튼 + "PIN(E-ticket) 거래")
export const methodInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

export const methodLabel = style({
  ...themeVars.fontStyles.body2_medium,
  color: themeVars.color.grayscale1,
});

// 우측 안내 버튼 ("PIN(E-ticket) 거래란?" + > 아이콘)
export const methodGuideButton = style({
  display: "flex",
  alignItems: "center",
  color: themeVars.color.primary,
});

export const methodGuideText = style({
  ...themeVars.fontStyles.body3_medium,
  color: themeVars.color.primary,
});

export const methodGuideIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// 라디오 버튼 스타일 (바깥 원 + 안쪽 원)
// 라디오 버튼 전체 감싸는 wrapper
export const radioWrapper = style({
  width: "2.4rem",
  height: "2.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// 바깥 원
export const radioOuter = style({
  width: "1.6rem",
  height: "1.6rem",
  borderRadius: "50%",
  backgroundColor: themeVars.color.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// 안쪽 원
export const radioInner = style({
  width: "0.8rem",
  height: "0.8rem",
  borderRadius: "50%",
  backgroundColor: themeVars.color.grayscale9,
});
