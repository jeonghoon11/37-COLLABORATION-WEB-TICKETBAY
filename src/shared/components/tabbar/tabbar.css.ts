import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@shared/styles/theme.css";
import { zIndex } from "@shared/styles/token/z-index.css";

export const wrapper = style({
  position: "fixed",
  bottom: 0,
  width: "100%",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  zIndex: zIndex.tabbar,
});

// TabBar 레이아웃
export const container = style({
  width: "100%",
  padding: "0.8rem 1.6rem 1.6rem",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: "2.3rem",
  backgroundColor: themeVars.color.grayscale8,
});

// li 기본 스타일 + 활성 상태
export const baseItem = recipe({
  base: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    isItemActive: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0.4,
      },
    },
  },
});
