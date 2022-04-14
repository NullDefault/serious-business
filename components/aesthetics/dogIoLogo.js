import { Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Image
      src="/dogio_logo.svg"
      width="100%"
      height="100%"
      alt="Dog.io Logo"
      {...props}
    />
  );
}
