import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "1.2rem",
  gap: "0.4rem",
  height: "13.9rem",

  border: `1px solid ${themeVars.color.grayscale6}`,
  borderRadius: "12px",
  backgroundColor: themeVars.color.grayscale9,

  selectors: {
    "&:active": {
      backgroundColor: themeVars.color.grayscale8,
    },
  },
});

export const matchDateContainer = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const matchDateContent = style({
  display: "flex",
  gap: "0.4rem",
});

export const matchDateContentTitle = style({
  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale3,
});

export const matchDateContentValue = style({
  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale1,
});

export const matchInfo = style({
  ...themeVars.fontStyles.body2_semibold,
  color: themeVars.color.grayscale1,
});

export const seatType = style({
  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale3,
});

export const amountContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const chip = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "2rem",
  padding: "0.3rem 0.5rem",

  border: `1px solid ${themeVars.color.grayscale5}`,
  borderRadius: "4px",

  ...themeVars.fontStyles.caption1_regular,
  color: themeVars.color.grayscale3,
});

export const amountContent = style({
  display: "flex",
  gap: "0.4rem",
});

export const amountTitle = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale3,
});

export const amountValue = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale1,
});

export const priceContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "0.4rem",
});

export const priceTitle = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.primary,
});

export const priceValue = style({
  ...themeVars.fontStyles.body1_bold,
  color: themeVars.color.primary,
});
