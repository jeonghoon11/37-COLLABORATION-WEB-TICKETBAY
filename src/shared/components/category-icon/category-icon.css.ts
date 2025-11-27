import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "4.8rem",
  height: "4.8rem",
  gap: "0.6rem",
});

export const text = recipe({
  base: {
    ...themeVars.fontStyles.caption2_regular,
    textAlign: "center",
    width: "100%",
    whiteSpace: "nowrap",
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.grayscale2,
      },
      false: {
        color: themeVars.color.grayscale1,
      },
    },
  },
});

export const icon = recipe({
  base: {},
  variants: {
    isActive: {
      true: {
        color: themeVars.color.grayscale2,
      },
      false: {
        color: themeVars.color.grayscale1,
      },
    },
  },
});
