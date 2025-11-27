import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "4.4rem",
});

// 드롭다운들만 스크롤되는 영역
export const scrollArea = style({
  flex: 1,
  height: "100%",
  overflowX: "auto",
  overflowY: "visible",
  minWidth: 0,
});

export const dropdownList = style({
  display: "flex",
  flexWrap: "nowrap",
  gap: "1rem",
  width: "max-content",
  paddingRight: "4.4rem",
  alignItems: "center",
  height: "100%",
});

export const dropdownListIcon = style({
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translateY(-50%)",
  padding: "1rem",
  borderLeft: `1px solid ${themeVars.color.grayscale7}`,
  boxShadow: `-10px 0 6px 0 ${themeVars.color.grayscale9}`,
  cursor: "pointer",
  backgroundColor: themeVars.color.grayscale9,
});
