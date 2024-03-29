import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const custom = defineStyle({
  w: "55px",
  h: "18px",
  borderRadius: "30px",
  fontSize: "9px",
  letterSpacing: "0.16px",
  p: "0 8.5px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});

export const badgeTheme = defineStyleConfig({
  variants: { custom },
});
