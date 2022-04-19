import { Flex, Image } from "@chakra-ui/react";
import TestimonialWithSpeechBubbles from "../components/TestimonialWithSpeechBubbles";

export default function Testaments() {
  return (
    <Flex
      minH="90vh"
      align="center"
      justify="center"
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Image boxSize="250px" src="/Character_zombieing.svg" />
      <TestimonialWithSpeechBubbles />
    </Flex>
  );
}
