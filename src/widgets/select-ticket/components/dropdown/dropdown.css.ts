import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
});

export const dropdownButton = recipe({
  base: {
    width: "100%",
    minWidth: "fit-content",
    height: "3.6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.8rem 1rem",
    border: "1px solid",
    borderRadius: "7px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  variants: {
    isSelected: {
      true: {
        borderColor: themeVars.color.primary,
      },
      false: {
        borderColor: themeVars.color.grayscale6,
      },
    },
  },
});

export const value = style({
  ...themeVars.fontStyles.caption1_medium,
  color: themeVars.color.grayscale1,
});

export const icon = recipe({
  base: {
    color: themeVars.color.grayscale4,
    transition: "transform 0.2s ease",
    transform: "rotate(0deg)",
  },
  variants: {
    isOpen: {
      true: {
        transform: "rotate(180deg)",
      },
      false: {
        transform: "rotate(0deg)",
      },
    },
  },
});

export const dropdownList = style({
  position: "absolute",
  top: "100%",
  marginTop: "0.6rem",
  display: "flex",
  flexDirection: "column",
  width: "21.5rem",
  backgroundColor: themeVars.color.grayscale9,
  border: `1px solid ${themeVars.color.grayscale7}`,
  borderRadius: "14px",
  overflow: "hidden",
  zIndex: themeVars.zIndex.dropdown,
});

export const dropdownFirstItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.9rem 1.8rem",
  backgroundColor: themeVars.color.grayscale9,
  borderBottom: `1px solid ${themeVars.color.grayscale7}`,
  cursor: "pointer",
  width: "100%",
  height: "4.2rem",
});

export const dropdownItemIcon = style({
  color: themeVars.color.grayscale1,
});

export const dropdownItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "1rem 2.7rem",
  backgroundColor: themeVars.color.grayscale9,
  border: "none",
  borderBottom: `1px solid ${themeVars.color.grayscale7}`,
  cursor: "pointer",
  width: "100%",
  height: "4.2rem",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export const dropdownItemLabel = style({
  ...themeVars.fontStyles.body1_medium,
  color: themeVars.color.grayscale1,
});
