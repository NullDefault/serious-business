import { Flex } from "@chakra-ui/react";
import ContactFormWithSocialButtons from "../components/ContactForm";

export default function Contact() {
  return (
    <Flex w="full" align="center" justify="center">
      <ContactFormWithSocialButtons />
    </Flex>
  );
}
