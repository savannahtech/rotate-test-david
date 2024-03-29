import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const custom = defineStyle({
  border: "1px solid",
  borderColor: "blue.100",
  h: "27px",
  p: "0 19.5px",
  borderRadius: "30px",
  bgColor: "transparent",
  color: "blue.100",
  fontSize: "10px",
  fontWeight: "400",
  lineHeight: "1",
});

export const buttonTheme = defineStyleConfig({
  variants: { custom },
});
