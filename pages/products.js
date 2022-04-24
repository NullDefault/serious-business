import {
  Flex,
  Box,
  Container,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import ModelViewer from "../components/aesthetics/3d/ModelViewer";
import ProductsHeader from "../components/productPage/ProductsHeader";
import ProductDetails from "../components/productPage/ProductDetails";

export default function Products() {
  const renderAsColumn = useBreakpointValue({ base: true, md: false });
  const dogs = [
    {
      title: "Dumb Dog",
      description: `The tried and tested classic, the affectionally called Dumbo is the perfect starter dog.io pet.
      Easy to take care of with our standard-issue bioprocesses stabilizer, and sure to cause a laugh with
      its silly wobbly gait, there's little more we could have done to improve man's best friend! Get started
      today for a one-time bonus of 4 (!) free knee joint replacements.`,
      model: "dumbdog",
      scale: 0.15,
      position: [0, -12, 0],
    },
    {
      title: "Long Dog",
      description: `When we looked at weiner dogs, we could only think of one thing. They are cute, but what if they were longer?
      We are in the business of making dreams happen, so we decided to create the long dog - one of the major breakthroughs
      of 21st century veterinary gene-manipulation. Featuring a state-of-the-art lifespan-to-length ratio, and revolutionary
      mobility scooter-compatible hip joints, this miracle of biological sciences can't wait to become your favourite source of entertainment.`,
      model: "longdog",
      scale: 1,
      rotation: [1.5, 0, 0],
    },
    {
      title: "Foldy Dog",
      description: `Referred to by critics as Pug 2.0, everything about this dog is next-gen. Permanent puppy eyes that protrude from the skull,
      a near-incapacity for independent breath, and a goofy adorable face are just some of the amazing features for you to discover.
      Make sure to take advantage of our must-have accessory bundle (guaranteed to raise life expectancy by an average of 7.2 years)!`,
      model: "foldydog",
      scale: 1.25,
      rotation: [1.5, 0, 0],
    },
  ];

  return (
    <>
      <ProductsHeader />
      <Box minH="60vh">
        <Flex direction="column" py={10}>
          {dogs.map((dogData, index) => {
            let model = (
              <ModelViewer
                model={dogData.model}
                scale={dogData.scale}
                position={dogData.position}
                rotation={dogData.rotation}
                rotationAxes="y"
              />
            );
            let details = (
              <Box maxW="container.md">
                <ProductDetails
                  title={dogData.title}
                  body={dogData.description}
                />
              </Box>
            );
            return (
              <Container
                display="flex"
                maxW={{ base: "90vw", md: "85vw" }}
                key={"dog-container-" + index}
                flexDirection={{ base: "column", xl: "row" }}
              >
                {renderAsColumn || index % 2 == 0
                  ? [model, details]
                  : [details, model]}
              </Container>
            );
          })}
        </Flex>
        <Text align="center" h="15vh" fontSize="3xl" color="whatsapp.600">
          More coming soon!
        </Text>
      </Box>
    </>
  );
}
