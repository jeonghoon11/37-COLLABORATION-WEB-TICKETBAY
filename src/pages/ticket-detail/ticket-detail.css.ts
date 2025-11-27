import { style } from "@vanilla-extract/css";

import { themeVars } from "@shared/styles/theme.css";

export const pageContainer = style({
  backgroundColor: themeVars.color.grayscale8,
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
});

export const ticketInfoOffset = style({
  paddingTop: "5.6rem",
});

export const removeGapTop = style({
  marginTop: "-0.7rem",
});

export const seatMapWrapper = style({
  backgroundColor: themeVars.color.grayscale9,
});
