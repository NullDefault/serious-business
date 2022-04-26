import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Box,
} from "@chakra-ui/react";
import Carousel from "../Carousel";

export default function DetailModal(props) {
  return (
    <Modal size="" isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent my="auto" mx="10vw">
        <ModalHeader>
          <Box h="3px" bg="blackAlpha.400" />
        </ModalHeader>
        <ModalCloseButton m={2} />
        <ModalBody>
          <Carousel slides={props.slides} />
        </ModalBody>

        <ModalFooter>
          <Flex justify="center" w="full">
            Copyright 2022: Dog.IO
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
