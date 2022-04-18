import {
  Box,
  Flex,
  Link,
  Text,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "./aesthetics/dogIoLogo";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

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
            <Link href="/" _focus={{}} _hover={{}}>
              <Flex h="full" justify="center" align="center">
                <motion.div
                  style={{ height: "100%" }}
                  whileHover={{ rotate: 12 }}
                >
                  <Logo p={1} />
                </motion.div>

                <Text
                  color="orange.500"
                  fontWeight="extrabold"
                  fontSize={{ base: "xl", md: "2xl", xl: "5xl" }}
                  pl={6}
                >
                  Dog.io
                </Text>
              </Flex>
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
              <motion.button
                whileHover={{ scale: 1.1, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 100,
                }}
                onClick={toggleColorMode}
                variant="transparent"
                _focus={{}}
                _hover={{ color: useColorModeValue("blue.400", "yellow.300") }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </motion.button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
