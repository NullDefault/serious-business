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
      backgroundImage={props.bgImage}
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
            {props.text}
          </Text>
          <Stack direction={"row"}>
            {props.links}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
