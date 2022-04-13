import { Flex, Image } from "@chakra-ui/react";
import TestimonialWithSpeechBubbles from "../components/Testimonial";

export default function Testaments() {
  return (
    <Flex minH="90vh" align="center" justify="center">
      <Image src="/Character_zombieing.svg" />
      <TestimonialWithSpeechBubbles />
    </Flex>
  );
}
