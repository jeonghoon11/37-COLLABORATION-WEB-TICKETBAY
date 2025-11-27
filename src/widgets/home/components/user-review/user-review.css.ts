import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",

  width: "30.4rem",
  height: "15.7rem",
  backgroundColor: themeVars.color.grayscale9,
  border: `1px solid ${themeVars.color.grayscale6}`,
  borderRadius: "10px",

  padding: "1.6rem",
  gap: "1.1rem",

  scrollSnapAlign: "start",
  flexShrink: 0,
  textAlign: "start",
});

export const category = style({
  ...themeVars.fontStyles.caption2_regular,
  color: themeVars.color.grayscale1,
});

export const matchTitle = style({
  ...themeVars.fontStyles.body2_medium,
  color: themeVars.color.grayscale1,
});

export const info = style({
  display: "flex",
  gap: "0.7rem",
});

export const userName = style({
  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale3,
});

export const date = style({
  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale3,
});

export const content = style({
  ...themeVars.fontStyles.body3_regular,
  color: themeVars.color.grayscale1,
});
