import { ChakraProvider } from "@chakra-ui/react";
import theme from "../util/theme";
import "@fontsource/secular-one"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
