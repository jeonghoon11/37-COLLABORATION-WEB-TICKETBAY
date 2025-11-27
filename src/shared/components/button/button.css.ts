import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const button = recipe({
  base: {
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    textAlign: "center",
    cursor: "pointer",
    selectors: {
      "&:active": {
        opacity: 0.6,
      },
    },
  },

  variants: {
    color: {
      default: {
        backgroundColor: themeVars.color.grayscale1,
        color: themeVars.color.grayscale9,
      },
      subtle: {
        backgroundColor: themeVars.color.grayscale8,
        color: themeVars.color.grayscale2,
      },
    },

    size: {
      buy: [
        themeVars.fontStyles.body2_medium,
        {
          minHeight: "4.4rem",
          padding: "1.2rem",
          borderRadius: "8px",
        },
      ],
      ticketbayGlobal: [
        themeVars.fontStyles.body3_medium,
        {
          minHeight: "3.2rem",
          padding: "0.6rem 8.3rem",
          borderRadius: "6px",
        },
      ],
    },
  },

  defaultVariants: {
    color: "default",
    size: "buy",
  },
});
