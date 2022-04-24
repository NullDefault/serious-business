import {
  chakra,
  useColorModeValue,
  useDisclosure,
  Box,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import DetailModal from "./DetailModal";

export default function ProductDetails({ title, body }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box py={12} px={2}>
      <chakra.h2
        fontSize={{ base: "4xl", md: "5xl" }}
        color={useColorModeValue("gray.800", "white")}
        fontWeight="bold"
      >
        <chakra.span color={useColorModeValue("orange.600", "orange.200")}>
          {title}
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        fontSize={{ base: "lg", md: "xl" }}
        color={useColorModeValue("gray.600", "gray.200")}
      >
        {body}
      </chakra.p>

      <Flex justify="end" p={8}>
        {[1, 2, 3].map(() => {
          return (
            <Box
              borderRadius="full"
              h={{ base: "50px", md: "100px" }}
              w={{ base: "50px", md: "100px" }}
              bg="gray.700"
              mr={4}
            />
          );
        })}
      </Flex>
      <Text align="right">Recommended Accessories</Text>
      <Flex justify="start" mt={8}>
        <Link
          bg="teal.500"
          color="gray.100"
          px={5}
          py={3}
          fontWeight="semibold"
          rounded="lg"
          _hover={{ bg: "gray.800" }}
          mr={4}
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
          onClick={onOpen}
        >
          Find Out More
        </Link>
        <DetailModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
}
