import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "./aesthetics/dogIoLogo";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const linkStyles = {
    py: 2,
    px: 3,
    _hover: {},
    transition: "all ease 0.8s",
  };

  return (
    <>
      <Box px={6} py={1}>
        <Flex minH={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box h={20} display={{ base: "none", md: "block" }}>
            <Link href="/" _focus={{}}>
              <Logo />
            </Link>
          </Box>

          <Flex alignItems={"center"} w={{ base: "full", md: "fit-content" }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              fontSize="2xl"
              w={{ base: "full", md: "fit-content" }}
              align="center"
            >
              <Link {...linkStyles} href="/products">
                Products
              </Link>
              <Link {...linkStyles} href="/services">
                Services
              </Link>
              <Link {...linkStyles} href="/testaments">
                Testaments
              </Link>
              <Link {...linkStyles} href="/company">
                Company
              </Link>
              <Link
                {...linkStyles}
                border="1px"
                px={8}
                borderColor={useColorModeValue("black", "white")}
                href="/contact"
                boxShadow="inset 0 0 0 0 --chakra-colors-yellow-400"
                _hover={{
                  boxShadow:
                    "inset 200px 0 0 0 var(--chakra-colors-orange-400)",
                  color: useColorModeValue("white", "black"),
                }}
              >
                Contact Us
              </Link>
              <Button
                onClick={toggleColorMode}
                variant="transparent"
                alignSelf="center"
                _focus={{}}
                _hover={{ color: useColorModeValue("blue.400", "yellow.300") }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
