import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  marginTop: "1.9rem",
  color: themeVars.color.grayscale1,
});
export const telephone = style({
  ...themeVars.fontStyles.body2_medium,
});

export const text = style({
  ...themeVars.fontStyles.caption1_medium,
});
