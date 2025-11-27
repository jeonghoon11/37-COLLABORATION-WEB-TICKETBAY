import { style } from "@vanilla-extract/css";
import { keyframes } from "@vanilla-extract/css";
import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";
import { zIndex } from "@shared/styles/token/z-index.css";

const slideIn = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const slideOut = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(100%)",
  },
});

const sidebarWrapper = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  maxWidth: "100vw",
  overflow: "hidden",
  zIndex: zIndex.sidebar,
  "@media": {
    "(min-width: 430px)": {
      left: "calc((100vw - 430px) / 2)",
      right: "calc((100vw - 430px) / 2)",
      width: "auto",
      height: "auto",
      maxWidth: "430px",
    },
  },
});

const sidebarDimBase = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

export const sidebarWrapperStyle = sidebarWrapper;

export const sidebarDim = style([
  sidebarDimBase,
  {
    animation: `${fadeIn} 0.3s ease-out`,
  },
]);

export const sidebarDimClosing = style([
  sidebarDimBase,
  {
    animation: `${fadeOut} 0.3s ease-out forwards`,
    pointerEvents: "none",
  },
]);

const sidebarContainerBase = style({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "70vw",
  maxWidth: "100%",
  backgroundColor: color.grayscale8,
  boxShadow: "-0.2rem 0 1.4rem 0 rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  isolation: "isolate",
  "@media": {
    "(min-width: 430px)": {
      maxWidth: "26.4rem",
      width: "26.4rem",
      minWidth: "26.4rem",
    },
  },
});

export const sidebarContainer = style([
  sidebarContainerBase,
  {
    animation: `${slideIn} 0.2s ease-out`,
  },
]);

export const sidebarContainerClosing = style([
  sidebarContainerBase,
  {
    animation: `${slideOut} 0.2s ease-out forwards`,
    pointerEvents: "none",
  },
]);

export const sidebarHeader = style({
  width: "100%",
  height: "4.4rem",
  padding: "0 1.6rem",
  borderBottom: `1px solid ${color.grayscale7}`,
  backgroundColor: color.grayscale9,
  display: "flex",
  alignItems: "center",
});

export const sidebarLogo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: color.grayscale1,
});

export const sidebarItemContainer = style({
  height: "39.8rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: color.grayscale9,
});

export const loginMenuItem = style({
  display: "flex",
  alignItems: "center",
  height: "7.2rem",
  padding: "0 2.4rem",
  border: "none",
  cursor: "pointer",
  width: "100%",
  ...fontStyles.body1_medium,
  color: color.grayscale1,
});

export const menuItem = style({
  display: "flex",
  alignItems: "center",
  height: "4.8rem",
  padding: "0 2.4rem",
  border: "none",
  cursor: "pointer",
  width: "100%",
  ...fontStyles.body1_medium,
  color: color.grayscale1,
});

