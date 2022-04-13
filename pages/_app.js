import { ChakraProvider, chakra } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Background } from "../components/aesthetics/backgroundManager";
import theme from "../util/theme";
import "@fontsource/secular-one";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Background opacity={0.1}>
        <chakra.div>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </chakra.div>
      </Background>
    </ChakraProvider>
  );
}

export default MyApp;
