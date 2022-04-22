import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import Carousel from "../Carousel";

export default function DetailModal(props) {
  let slides = [
    <Flex key="slide-1">
      <Image
        boxSize="xl"
        w="70%"
        pr={4}
        src="https://www.treehugger.com/thmb/XuoUZ9hFh08TtrXVJ0iPNNwLmow=/1000x562/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__03__senior_man_walking_dog-adf3819af0cb4a3f93a0cea5387fd5e6.jpg"
      />
      <Text w="30%">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </Text>
    </Flex>,
    <Flex key="slide-2">
      <Image
        boxSize="xl"
        w="70%"
        pr={4}
        src="https://www.treehugger.com/thmb/XuoUZ9hFh08TtrXVJ0iPNNwLmow=/1000x562/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__03__senior_man_walking_dog-adf3819af0cb4a3f93a0cea5387fd5e6.jpg"
      />
      <Text w="35%">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </Text>
    </Flex>,
  ];
  return (
    <Modal size="" isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent my="auto" mx="10vw">
        <ModalHeader>
          <Box h="3px" bg="blackAlpha.400" />
        </ModalHeader>
        <ModalCloseButton m={2} />
        <ModalBody>
          <Carousel slides={slides} />
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
