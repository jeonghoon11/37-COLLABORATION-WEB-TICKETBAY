import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const button = style({
  width: "3rem",
  height: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: themeVars.color.grayscale1,
  borderRadius: "16px",
});
