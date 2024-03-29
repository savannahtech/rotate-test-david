"use client";

import { ReactNode, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { AuthProvider } from "../context";

import themes from "../themes";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <ChakraProvider theme={themes}>
          <Global
            styles={`
      /* latin */
      @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./fonts/AvenirNextCyr-Demi.woff2') format('woff2'), url('./fonts/AvenirNextCyr-Demi.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./fonts/AvenirNextCyr-Medium.woff2') format('woff2'), url('./fonts/AvenirNextCyr-Medium.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
          />
          {children}
        </ChakraProvider>
      </AuthProvider>
    </Suspense>
  );
};

export default Providers;
