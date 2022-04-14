import { Flex, Box, chakra, useColorModeValue, Image } from "@chakra-ui/react";

export default function Products() {
  return (
    <>
      <Flex minH="30vh" align="center" justify="center">
        <Flex
          justify="center"
          margin="auto"
          align="center"
          direction={{ base: "column", md: "row" }}
        >
          <Image
            src="/Illustrations_Doggie.svg"
            alt="doggie fun"
            h={["200px", "300px"]}
          />
          <Box width="full" align="center">
            <chakra.h3
              fontWeight={"bold"}
              fontSize={20}
              textTransform={"uppercase"}
              color={"purple.400"}
            >
              Find your new Best Friend
            </chakra.h3>
            <chakra.h1
              py={5}
              fontSize={48}
              fontWeight={"bold"}
              color={useColorModeValue("gray.700", "gray.50")}
            >
              Unique, Loving, and Dependent
            </chakra.h1>
            <chakra.h2
              margin={"auto"}
              width={"70%"}
              fontWeight={"medium"}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              See why over{" "}
              <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
                150,000+
              </chakra.strong>{" "}
              influencers got their dog from us!
            </chakra.h2>
          </Box>
          <Image
            src="/Illustrations_dog-jump.svg"
            alt="doggie fun"
            h={["200px", "300px"]}
          />
        </Flex>
      </Flex>
      <Flex minH="60vh"></Flex>
    </>
  );
}
