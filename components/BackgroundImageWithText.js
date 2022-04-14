import {
  Stack,
  Flex,
  Button,
  Link,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function BackgroundImageWithText(props) {
  return (
    <Flex
      w={"full"}
      h={"60vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"bottom"}
      {...props}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.700, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
          >
            Explore our disruption of the pet space
          </Text>
          <Stack direction={"row"}>
            <Link
              href="/products"
              py={2}
              px={4}
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Products
            </Link>
            <Link
              href="company"
              py={2}
              px={4}
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Company
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
