import { Flex } from "@chakra-ui/react";
import CallToActionWithIllustration from "../components/CTAwithIllustration";
import ModelViewer from "../components/aesthetics/3d/ModelViewer";

export default function Home() {
  return (
    <>
      <CallToActionWithIllustration />
      <Flex h="800px">
        <ModelViewer
          scale=".1"
          rotationAxes="y"
          model={"dumbdog"}
          position={[0, -12.79, 0]}
          rotation={[0.19, 0.03, 0]}
        />
        <ModelViewer
          scale=".8"
          rotationAxes="y"
          model={"longdog"}
          position={[0, -0.5, 0]}
          rotation={[1.42, 0, 0]}
        />
      </Flex>
    </>
  );
}
