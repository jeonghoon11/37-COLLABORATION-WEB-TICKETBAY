import { keyframes, style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

const shimmer = keyframes({
  "0%": {
    backgroundPosition: "-46.8rem 0",
  },
  "100%": {
    backgroundPosition: "46.8rem 0",
  },
});

export const skeleton = style({
  display: "block",

  backgroundColor: themeVars.color.grayscale7,
  backgroundImage: `linear-gradient(
    90deg,
    ${themeVars.color.grayscale7} 0rem,
    ${themeVars.color.grayscale8} 4rem,
    ${themeVars.color.grayscale7} 8rem
  )`,

  backgroundSize: "46.8rem 100%",

  animation: `${shimmer} 1.2s ease-in-out infinite`,
});

export const rectangular = style({
  borderRadius: "0.4rem",
});

export const circular = style({
  borderRadius: "50%",
});
