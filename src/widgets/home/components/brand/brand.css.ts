import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const section = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "3rem",
});

export const logoContainer = style({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
});

export const logo = style({
  color: themeVars.color.grayscale1,
});

export const snsContainer = style({
  display: "flex",
  gap: "0.8rem",
});
