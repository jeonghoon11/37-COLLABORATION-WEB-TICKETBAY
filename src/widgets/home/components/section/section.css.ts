import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
});

export const title = style({
  ...themeVars.fontStyles.body1_bold,
  color: themeVars.color.grayscale1,
});

export const highlight = style({
  color: themeVars.color.primary,
});

export const button = style({
  ...themeVars.fontStyles.body3_medium,
  color: themeVars.color.grayscale3,
  display: "flex",
  gap: "0.8rem",
  alignItems: "center",
});
