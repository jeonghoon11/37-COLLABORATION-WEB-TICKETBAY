import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  display: "flex",
  width: "100%",
  gap: "0.7rem",
});

export const image = style({
  width: "11.6rem",
  height: "11.6rem",
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  justifyContent: "center",
});

export const brandName = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale3,
});

export const productTitle = style({
  ...themeVars.fontStyles.body2_medium,
  color: themeVars.color.grayscale1,
});

export const originalPrice = style({
  ...themeVars.fontStyles.caption2_regular,
  color: themeVars.color.grayscale3,
  textDecoration: "line-through",
});

export const priceContainer = style({
  ...themeVars.fontStyles.body1_bold,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const discountPrice = style({
  display: "flex",
  gap: "0.2rem",
});

export const discountRate = style({
  color: themeVars.color.primary,
});

export const salePrice = style({
  color: themeVars.color.grayscale1,
});
