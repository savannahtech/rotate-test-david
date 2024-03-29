import { extendBaseTheme } from "@chakra-ui/react";

import styles from "./styles";
import colors from "./colors";

import {
  badgeTheme,
  buttonTheme,
  formLabelTheme,
  headingTheme,
  inputTheme,
} from "../components";

const overrides = {
  styles,
  colors,
  components: {
    Badge: badgeTheme,
    Button: buttonTheme,
    FormLabel: formLabelTheme,
    Heading: headingTheme,
    Input: inputTheme,
    Select: inputTheme,
  },
};

export default extendBaseTheme(overrides);
