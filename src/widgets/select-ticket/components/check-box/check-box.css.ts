import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem 0",
  gap: "0.5rem",
});

export const label = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale1,
});

export const icon = recipe({
  base: {},
  variants: {
    isChecked: {
      true: {
        color: themeVars.color.grayscale1,
      },
      false: {
        stroke: themeVars.color.grayscale5,
        color: themeVars.color.grayscale5,
      },
    },
  },
});
