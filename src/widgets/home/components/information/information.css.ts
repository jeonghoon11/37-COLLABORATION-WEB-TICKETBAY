import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

export const text = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale3,
  marginTop: "1.8rem",
  paddingBottom: "1.7rem",
  borderBottom: `1px solid ${themeVars.color.grayscale6}`,
});

export const notice = style({
  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale3,
  whiteSpace: "pre-line",
  margin: "0.9rem 0 2rem 0",
});
