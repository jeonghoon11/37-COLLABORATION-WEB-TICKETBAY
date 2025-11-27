import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const section = style({
  display: "grid",
  gap: "0.6rem",
  marginTop: "2.4rem",
});

export const container = recipe({
  base: {
    display: "grid",
    gap: "0.6rem",
  },
  variants: {
    row: {
      top: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      bottom: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
  },
});

export const button = style({
  ...themeVars.fontStyles.caption1_regular,
  width: "100%",
  padding: "0.7rem 1rem",
  background: themeVars.color.grayscale9,
  border: `1px solid ${themeVars.color.grayscale7}`,
  color: themeVars.color.grayscale3,
});
