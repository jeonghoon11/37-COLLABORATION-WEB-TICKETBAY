import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const list = style({
  display: "flex",
});

export const item = style({
  width: "100%",
});

export const button = recipe({
  base: {
    ...themeVars.fontStyles.body2_medium,
    width: "100%",
    padding: "1rem 0",
  },
  variants: {
    isActive: {
      true: {
        color: `${themeVars.color.grayscale1}`,
        borderBottom: `2px solid ${themeVars.color.grayscale1}`,
      },
      false: {
        color: `${themeVars.color.grayscale3}`,
        borderBottom: `2px solid ${themeVars.color.grayscale6}`,
      },
    },
  },
});
