import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const customH1 = defineStyle({
  fontFamily: "Avenir Next, sans-serif",
  fontSize: "28px",
  fontWeight: "600",
  lineHeight: "38.25px",
  letterSpacing: "-0.16px",
});

const customH2 = defineStyle({
  fontFamily: "Avenir Next, sans-serif",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "27.32px",
  letterSpacing: "-0.16px",
});

export const headingTheme = defineStyleConfig({
  variants: { customH1, customH2 },
});
