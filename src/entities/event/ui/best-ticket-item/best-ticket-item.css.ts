import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const container = recipe({
  base: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "1rem 1rem 1rem 0.8rem",
    gap: "1.4rem",
    borderBottom: `1px solid ${themeVars.color.grayscale6}`,
  },
  variants: {
    isTight: {
      true: {
        gap: "0.5rem",
      },
      false: {
        gap: "1.2rem",
      },
    },
    clickable: {
      true: {
        cursor: "pointer",
      },
      false: {
        cursor: "default",
      },
    },
  },
});

export const rank = recipe({
  base: {
    ...themeVars.fontStyles.body2_semibold,
  },
  variants: {
    isTopRank: {
      true: {
        color: themeVars.color.primary,
      },
      false: {
        color: themeVars.color.grayscale1,
      },
    },
  },
});

export const title = style({
  ...themeVars.fontStyles.body3_medium,
  color: themeVars.color.grayscale1,
});

export const location = style({
  ...themeVars.fontStyles.caption2_regular,
  color: themeVars.color.grayscale3,
});

