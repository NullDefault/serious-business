import {
  Flex,
  Box,
  chakra,
  Container,
  Link,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import ModelViewer from "../components/aesthetics/3d/ModelViewer";
import { ProductsHeader } from "../components/ProductsHeader";

function GridItemWrapper({ children }) {
  return (
    <GridItem align="center">
      <Container h="650px" w="100%">
        {children}
      </Container>
    </GridItem>
  );
}

function ColumnItemWrapper({ children }) {
  return (
    <Container w="100%" h="400px">
      {children}
    </Container>
  );
}

function ProductDetails({ title, body }) {
  return (
    <Box py={12} px={2}>
      <chakra.h2
        fontSize={{ base: "4xl", md: "5xl" }}
        color={useColorModeValue("gray.800", "white")}
        fontWeight="bold"
      >
        <chakra.span color={useColorModeValue("purple.600", "purple.400")}>
          {title.slice(0, 4)}
        </chakra.span>
        {title.slice(4, 8)}
      </chakra.h2>
      <chakra.p
        mt={4}
        fontSize={{ base: "lg", md: "2xl" }}
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {body}
      </chakra.p>

      <Box mt={8}>
        <Link
          bg="gray.900"
          color="gray.100"
          px={5}
          py={3}
          fontWeight="semibold"
          rounded="lg"
          _hover={{ bg: "gray.800" }}
        >
          Become Best Friends
        </Link>
      </Box>
    </Box>
  );
}

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
      scale: useBreakpointValue({ base: 0.1, lg: 0.15 }),
      position: [0, -12, 0],
    },
    {
      title: "Long Dog",
      description: `When we looked at weiner dogs, we could only think of one thing. They are cute, but what if they were longer?
      We are in the business of making dreams happen, so we decided to create the long dog - one of the major breakthroughs
      of 21st century veterinary gene-manipulation. Featuring a state-of-the-art lifespan-to-length ratio, and revolutionary
      mobility scooter-compatible hip joints, this miracle of biological sciences can't wait to become your favourite source of entertainment.`,
      model: "longdog",
      scale: useBreakpointValue({ base: 0.6, lg: 1 }),
      rotation: [1.5, 0, 0],
    },
  ];

  return (
    <>
      <ProductsHeader />
      <Box minH="60vh">
        {renderAsColumn ? (
          <Flex direction="column" py={10}>
            {dogs.map((dogData, index) => {
              return [
                <ColumnItemWrapper key={"dog" + { index } + "-model"}>
                  <ModelViewer
                    model={dogData.model}
                    scale={dogData.scale}
                    position={dogData.position}
                    rotation={dogData.rotation}
                    rotationAxes="y"
                  />
                </ColumnItemWrapper>,
                <ColumnItemWrapper key={"dog" + { index } + "-text"}>
                  <ProductDetails
                    title={dogData.title}
                    body={dogData.description}
                  />
                </ColumnItemWrapper>,
              ];
            })}
          </Flex>
        ) : (
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={10}
            pb={24}
          >
            {dogs.map((dogData, index) => {
              return index / 2 == 0
                ? [
                    <GridItemWrapper key={"dog" + { index } + "-model"}>
                      <ModelViewer
                        model={dogData.model}
                        scale={dogData.scale}
                        position={dogData.position}
                        rotation={dogData.rotation}
                        rotationAxes="y"
                      />
                    </GridItemWrapper>,
                    <GridItemWrapper key={"dog" + { index } + "-text"}>
                      <ProductDetails
                        title={dogData.title}
                        body={dogData.description}
                      />
                    </GridItemWrapper>,
                  ]
                : [
                    <GridItemWrapper key={"dog" + { index } + "-text"}>
                      <ProductDetails
                        title={dogData.title}
                        body={dogData.description}
                      />
                    </GridItemWrapper>,
                    <GridItemWrapper key={"dog" + { index } + "-model"}>
                      <ModelViewer
                        model={dogData.model}
                        scale={dogData.scale}
                        position={dogData.position}
                        rotation={dogData.rotation}
                        rotationAxes="y"
                      />
                    </GridItemWrapper>,
                  ];
            })}
          </Grid>
        )}
      </Box>
    </>
  );
}
