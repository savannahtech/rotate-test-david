import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "blue.100-trans",
    bgColor: "light-grey.300",
    w: "100%",
    h: "42px",
    p: "0 24px",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "400",
    color: "black.200",
    letterSpacing: "0.32px",
    appearance: "none",
    _readOnly: {
      pointerEvents: "none",
    },
  },
  icon: {
    color: 'light-grey.200',
    right: "15px",
    w: "14px"
  },
});

const file = definePartsStyle({
  field: {
    h: "90px",
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    file,
  },
});
