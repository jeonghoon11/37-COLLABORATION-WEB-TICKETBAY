import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  height: "4.4rem",
  padding: "0.2rem 0 0.2rem 0.6rem",
  borderTop: `1px solid ${themeVars.color.grayscale6}`,
  borderBottom: `1px solid ${themeVars.color.grayscale6}`,
});

export const ul = style({
  display: "flex",
  height: "100%",
});

export const li = style({
  display: "flex",
  alignItems: "center",
});

export const button = style({
  ...themeVars.fontStyles.caption1_medium,
  height: "100%",
  padding: "0 1rem",
});

export const divider = style({
  width: "1px",
  height: "11px",
  background: themeVars.color.grayscale6,
});
