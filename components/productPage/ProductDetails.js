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
        <chakra.span color={useColorModeValue("orange.600", "orange.400")}>
          {title}
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        fontSize={{ base: "lg", md: "xl" }}
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {body}
      </chakra.p>

      <Flex justify="space-between" p={8}>
        <Box borderRadius="full" h="100px" w="100px" bg="gray.700" />
        <Box borderRadius="full" h="100px" w="100px" bg="gray.600" />
        <Box borderRadius="full" h="100px" w="100px" bg="gray.500" />
      </Flex>
      <Text>Recommended Accessories</Text>
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
          onClick={onOpen}
        >
          Find Out More
        </Link>
        <DetailModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
}
