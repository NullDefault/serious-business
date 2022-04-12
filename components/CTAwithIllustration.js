import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Illustration } from "./aesthetics/Illustration";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 8 }}
        py={{ base: 6, md: 12 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Do you{" "}
          <Text as={"span"} color={"orange.400"}>
            absolutely hate{" "}
          </Text>
          dogs?
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "md", sm: "lg", md: "xl" }}>
          Do you enjoy the prestige of owning a living being, but hate{" "}
          <Text as={"span"} color={"blue.400"}>
            the responsibility
          </Text>{" "}
          of having to take care of one?
          <br /> Do your children no longer speak to you, and you crave
          connection to something,{" "}
          <Text as={"span"} color={"red.400"}>
            literally anything
          </Text>
          ? <br />
          Do you believe that man is superior to nature,{" "}
          <Text as={"span"} color={"yellow.500"}>
            imbued with divine right
          </Text>{" "}
          to mold it to his will?
        </Text>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"orange.400"}>
            You are in the right place!
          </Text>
        </Heading>
        <Flex w={"full"} position="relative">
          <chakra.div
            fontSize={"xl"}
            position={"absolute"}
            left="10%"
            top={{ base: "0%", md: "10%" }}
            color="blue.500"
          >
            <motion.div
              initial={{ rotate: 4 }}
              animate={{ rotate: -12 }}
              transition={{
                type: "spring",
                damping: 30,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              I Love Money!
            </motion.div>
          </chakra.div>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 8, sm: 12 }}
          />
          <chakra.div
            fontSize={"xl"}
            position={"absolute"}
            right="10%"
            top={{ base: "0%", md: "10%" }}
            color="orange.400"
          >
            <motion.div
              initial={{ rotate: 4 }}
              animate={{ rotate: 12 }}
              transition={{
                type: "spring",
                damping: 30,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Dumb Animal!
            </motion.div>
          </chakra.div>
        </Flex>
      </Stack>
    </Container>
  );
}
