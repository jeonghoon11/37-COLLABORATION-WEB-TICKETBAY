import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "6.1rem",
  padding: "1rem 0",
  borderBottom: `1px solid ${themeVars.color.grayscale7}`,
});

export const titleButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const eventTitleText = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale1,
});

export const Icon = style({
  color: themeVars.color.grayscale1,
});

export const stadiumName = style({
  ...themeVars.fontStyles.body3_medium,
  color: themeVars.color.grayscale3,
});
