import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import Providers from "./providers";
import { fonts } from "./fonts";
import { Topbar } from "../components";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={`${fonts.openSans.variable} ${fonts.inter.variable}`}
    >
      <body>
        <Providers>
          <Topbar />
          <Box p="27px 89px" m="auto">
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export const metadata = {
  title: "Settings | Rotate",
};

export default RootLayout;
