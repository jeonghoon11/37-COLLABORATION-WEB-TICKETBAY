import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const container = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${themeVars.color.grayscale6}`,
  },
  variants: {
    size: {
      sm: {
        width: "7rem",
        height: "2rem",
        padding: "0.3rem",
        borderRadius: "4px",
      },
      lg: {
        width: "12.5rem",
        height: "4.4rem",
        padding: "1.2rem 1.2rem",
        borderRadius: "8px",
      },
    },
    isActive: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "lg",
        isActive: true,
      },
      style: {
        borderColor: themeVars.color.primary,
      },
    },
  ],
});

export const icon = recipe({
  variants: {
    isActive: {
      true: {
        fill: themeVars.color.primary,
        color: themeVars.color.primary,
      },
      false: {
        fill: themeVars.color.grayscale4,
        color: themeVars.color.grayscale4,
      },
    },
  },
});

export const text = recipe({
  variants: {
    size: {
      sm: {
        ...themeVars.fontStyles.caption1_regular,
        color: themeVars.color.grayscale3,
      },
      lg: {
        ...themeVars.fontStyles.body2_medium,
        color: themeVars.color.grayscale1,
      },
    },
  },
});
