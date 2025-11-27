import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

const BACKGROUND_IMAGE_HEIGHT = "17.9rem";
const GRADIENT_HEIGHT = "7rem";
const GRADIENT_OVERLAP = "0.2rem";
const CONTAINER_MIN_HEIGHT = "24.9rem";

export const home = style({
  backgroundColor: themeVars.color.grayscale8,
});

export const container = style({
  position: "relative",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  minHeight: CONTAINER_MIN_HEIGHT,
  overflow: "hidden",
  padding: "0 1.5rem",
});

export const backgroundImage = style({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "49.3rem",
  height: BACKGROUND_IMAGE_HEIGHT,
  zIndex: themeVars.zIndex.background,
  backgroundImage: "url(/top_background.webp)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export const gradient = style({
  position: "absolute",
  top: `calc(${BACKGROUND_IMAGE_HEIGHT} - ${GRADIENT_OVERLAP})`,
  left: 0,
  width: "100%",
  height: GRADIENT_HEIGHT,
  zIndex: themeVars.zIndex.background,
  background: "linear-gradient(180deg, #000 0%, #F8F9FA 100%)",
});

export const noticeBanner = style({
  display: "flex",
  alignItems: "center",
  height: "3.5rem",
  gap: "1rem",
  width: "100%",
  padding: "0 1.5rem",
  marginTop: "0.9rem",
  backgroundColor: themeVars.color.grayscale8,
  borderBottom: `1px solid ${themeVars.color.grayscale6}`,
});

export const soundIcon = style({
  color: themeVars.color.primary,
});

export const noticeText = style({
  ...fontStyles.caption1_medium,
  color: themeVars.color.grayscale1,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  padding: "0 1.5rem",
  marginTop: "1.6rem",
  backgroundColor: themeVars.color.grayscale9,
});

export const footer = style({
  paddingTop: "2.4rem",
  marginBottom: "7.9rem",
  backgroundColor: themeVars.color.grayscale9,
});

export const inner = style({
  padding: "0 1.5rem",
});
