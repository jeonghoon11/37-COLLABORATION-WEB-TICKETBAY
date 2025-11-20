import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  width: "100%",
  height: "4.8rem",
  padding: "0.2rem 1.6rem",
  alignItems: "center",
});

export const leftSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const rightSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const Icon = style({
  padding: "1rem",
  cursor: "pointer",
});

export const title = style({
  ...themeVars.fontStyles.body2_semibold,
  color: themeVars.color.grayscale1,
  textAlign: "center",
});
