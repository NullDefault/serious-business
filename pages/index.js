import { Link } from "@chakra-ui/react";
import CallToActionWithIllustration from "../components/CTAwithIllustration";
import BackgroundImageWithText from "../components/BackgroundImageWithText";

export default function Home() {
  return (
    <>
      <CallToActionWithIllustration />
      <BackgroundImageWithText
        bgImage="/longdog_wheeling_by.png"
        h="1200px"
        text="Unapologetically Revolutionary"
      />
      <BackgroundImageWithText
        mb={28}
        h="60vh"
        text="Explore our Disruption of the Pet Space"
        bgImage="url(https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
        links={[
          <Link
            href="/products"
            key="disruption-link-1"
            py={2}
            px={4}
            bg={"blue.400"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "blue.500" }}
          >
            Products
          </Link>,
          <Link
            href="company"
            key="disruption-link-2"
            py={2}
            px={4}
            bg={"whiteAlpha.300"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "whiteAlpha.500" }}
          >
            Company
          </Link>,
        ]}
      />
    </>
  );
}
