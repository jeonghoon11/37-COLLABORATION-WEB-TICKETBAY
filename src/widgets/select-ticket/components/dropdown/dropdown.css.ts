import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";

// createPortal로 렌더링시 themeVars 사용 불가
// 따라서 직접 값을 사용

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
  position: "fixed",
  top: "var(--dropdown-top, 0)",
  left: "var(--dropdown-left, 0)",
  display: "flex",
  flexDirection: "column",
  width: "21.5rem",
  backgroundColor: "#FFFFFF", // grayscale9
  border: "1px solid #E9ECEF", // grayscale7
  borderRadius: "14px",
  overflow: "hidden",
  zIndex: "4000",
  pointerEvents: "auto",
  boxShadow: "0 0.4rem 1.2rem rgba(0, 0, 0, 0.15)",
  fontFamily: "'Pretendard Variable', sans-serif",
});

export const dropdownFirstItem = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.9rem 1.8rem",
  backgroundColor: "#FFFFFF", // grayscale9
  borderBottom: "1px solid #E9ECEF", // grayscale7
  cursor: "pointer",
  width: "100%",
  height: "4.2rem",
  zIndex: 1,
  pointerEvents: "auto",
  fontFamily: "'Pretendard Variable', sans-serif",
});

export const dropdownItemIcon = style({
  color: "#000000", // grayscale1
});

export const dropdownItem = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "1rem 2.7rem",
  backgroundColor: "#FFFFFF", // grayscale9
  border: "none",
  borderBottom: "1px solid #E9ECEF", // grayscale7
  cursor: "pointer",
  width: "100%",
  height: "4.2rem",
  zIndex: 1,
  pointerEvents: "auto",
  fontFamily: "'Pretendard Variable', sans-serif",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export const dropdownItemLabel = style({
  fontSize: "1.6rem", // body1_medium
  fontWeight: "500", // medium
  lineHeight: "140%", // normal
  letterSpacing: "0", // none
  color: "#000000", // grayscale1
});
