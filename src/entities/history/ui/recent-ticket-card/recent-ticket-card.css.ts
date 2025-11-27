import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const cardButton = style({
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  marginTop: "0.6rem",
  width: "22.9rem",
  height: "6.2rem",
  padding: "1.3rem",
  backgroundColor: themeVars.color.grayscale9,
  border: `1px solid ${themeVars.color.grayscale6}`,
  borderRadius: "8px",
  textAlign: "start",
});

export const cardInner = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.1rem",
});

export const title = style({
  ...themeVars.fontStyles.body2_semibold,
  color: themeVars.color.grayscale1,
});

export const date = style({
  ...themeVars.fontStyles.caption2_regular,
  color: themeVars.color.grayscale3,
});

export const icon = style({
  color: themeVars.color.grayscale4,
});
