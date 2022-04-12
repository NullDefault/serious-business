import { Flex, useColorModeValue } from "@chakra-ui/react";
import CallToActionWithIllustration from "../components/CTAwithIllustration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModelViewer from "../components/3d/ModelViewer";
import { Background } from "../components/aesthetics/backgroundManager";

export default function Home() {
  return (
    <Background
      opacity={0.1}
      bgColor={useColorModeValue("efe9d9", "646055")}
      fgColor={useColorModeValue("d9ad50", "171716")}
    >
      <Header />
      <CallToActionWithIllustration />
      <Flex h="800px">
        <ModelViewer
          scale=".1"
          rotationAxes={"y"}
          model={"dumbdog"}
          position={[0, 0, 0]}
          rotation={[0.19, 0.03, 0]}
        />
        <ModelViewer
          scale=".1"
          rotationAxes="y"
          model={"dumbdog"}
          position={[0, 0, 0]}
          rotation={[0.19, 0.03, 0]}
        />
        <ModelViewer
          scale=".1"
          rotationAxes="y"
          model={"dumbdog"}
          position={[0, 0, 0]}
          rotation={[0.19, 0.03, 0]}
        />
      </Flex>
      <Footer />
    </Background>
  );
}
