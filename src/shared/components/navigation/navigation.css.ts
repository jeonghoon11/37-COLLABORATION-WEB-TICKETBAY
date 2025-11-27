import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "grid",
  position: "fixed",
  top: 0,
  zIndex: themeVars.zIndex.header,
  gridTemplateColumns: "1fr auto 1fr",
  width: "100%",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  height: "4.8rem",
  padding: "0.2rem 1.6rem",
  alignItems: "center",
  borderBottom: `1px solid ${themeVars.color.grayscale6}`,
  backgroundColor: themeVars.color.grayscale9,
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
