import { chakra, useColorModeValue, Box, Link, Flex } from "@chakra-ui/react";

export default function ProductDetails({ title, body }) {
  return (
    <Box py={12} px={2}>
      <chakra.h2
        fontSize={{ base: "4xl", md: "5xl" }}
        color={useColorModeValue("gray.800", "white")}
        fontWeight="bold"
      >
        <chakra.span color={useColorModeValue("purple.600", "purple.400")}>
          {title.slice(0, 4)}
        </chakra.span>
        {title.slice(4, 8)}
      </chakra.h2>
      <chakra.p
        mt={4}
        fontSize={{ base: "lg", md: "xl" }}
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {body}
      </chakra.p>

      <Flex justify="space-around" mt={8}>
        <Link
          bg="teal.500"
          color="gray.100"
          px={5}
          py={3}
          fontWeight="semibold"
          rounded="lg"
          _hover={{ bg: "gray.800" }}
          w="66%"
        >
          Get Started
        </Link>
        <Link
          bg="blue.700"
          color="gray.100"
          px={5}
          py={3}
          fontWeight="semibold"
          rounded="lg"
          _hover={{ bg: "gray.800" }}
          w="33%"
        >
          Find Out More
        </Link>
      </Flex>
    </Box>
  );
}
