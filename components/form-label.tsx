import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const custom = defineStyle({
  fontSize: "13px",
  fontWeight: "400",
  color: "grey.200",
  letterSpacing: "0.16px",
  mb: "8px"
});

export const formLabelTheme = defineStyleConfig({
  variants: { custom },
});
