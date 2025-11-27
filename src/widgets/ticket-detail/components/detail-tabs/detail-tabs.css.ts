import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const whiteBlock = style({
  height: "3.6rem",
  backgroundColor: themeVars.color.grayscale9,
  marginBottom: "0.7rem",
});

export const container = style({
  backgroundColor: themeVars.color.grayscale9,
});

export const content = style({
  padding: "2rem 1.6rem",
  height: "18.3rem",
});

export const row = style({
  display: "flex",
  gap: "0.8rem",
});

export const label = style({
  ...themeVars.fontStyles.body2_medium,
  color: themeVars.color.grayscale3,
});

export const value = style({
  ...themeVars.fontStyles.body2_medium,
  color: themeVars.color.grayscale1,
});
