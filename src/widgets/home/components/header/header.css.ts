import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  position: "relative",
  marginTop: "0.7rem",
  zIndex: themeVars.zIndex.header,
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 1.5rem",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  height: "4.4rem",
  
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: themeVars.color.grayscale9,
});

export const rightSection = style({
  display: "flex",
  alignItems: "center",
});

export const iconButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4.8rem",
  height: "4.8rem",
  padding: "1rem",
  gap : "1rem",
  backgroundColor: "transparent",
  color: themeVars.color.grayscale9,
  cursor: "pointer"
});
