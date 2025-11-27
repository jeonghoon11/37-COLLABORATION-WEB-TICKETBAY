import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  padding: "0.3rem 0.6rem",
  gap: "0.2rem",
});

export const text = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale1,
});
