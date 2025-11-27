import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "0.4rem 0.9rem",
  alignItems: "center",
  marginTop: "0.2rem",
});
