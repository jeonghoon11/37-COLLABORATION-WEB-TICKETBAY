import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  margin: "0 1.5rem",
  height: "3.6rem",
  padding: "0 1.6rem 0 1.7rem",
  zIndex: themeVars.zIndex.content, 
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  border: `1px solid ${themeVars.color.grayscale9}`,
  borderRadius: "30px",
  backdropFilter: "blur(2px)",
});

export const input = style({
  width: "100%",
  ...themeVars.fontStyles.body3_regular,
  color: themeVars.color.grayscale9,
  backgroundColor: "transparent",
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: themeVars.color.grayscale9,
    },
    "&:focus::placeholder": {
      opacity: 0,
    },
  },
});

export const searchButton = style({
justifyContent: "center",
alignItems: "center",
  backgroundColor: "transparent",
  color: themeVars.color.grayscale9,
});

