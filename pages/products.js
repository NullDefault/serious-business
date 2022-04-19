import {
  Flex,
  Box,
  chakra,
  Container,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import ModelViewer from "../components/aesthetics/3d/ModelViewer";
import { ProductsHeader } from "../components/ProductsHeader";

function GridItemWrapper({ children }) {
  return (
    <GridItem align="center">
      <Container h="60vh" w="100%">
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

function TextDescription({ title, body }) {
  return (
    <Flex direction="column" justify="center" h="full">
      <chakra.h1 fontSize={48} fontWeight={"bold"}>
        {title}
      </chakra.h1>
      {body}
    </Flex>
  );
}

export default function Products() {
  const renderAsColumn = useBreakpointValue({ base: true, md: false });

  const dogData = [
    {
      text: (
        <TextDescription
          title="Dumb Dog"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
  est laborum."
        />
      ),
      model: (
        <ModelViewer
          model="dumbdog"
          scale={useBreakpointValue({ base: 0.1, lg: 0.15 })}
          position={[0, -12, 0]}
          rotationAxes="y"
        />
      ),
    },
    {
      text: (
        <TextDescription
          title="Long Dog"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
  est laborum."
        />
      ),
      model: (
        <ModelViewer
          model="longdog"
          scale={useBreakpointValue({ base: 0.6, lg: 1 })}
          rotation={[1.5, 0, 0]}
          rotationAxes="y"
        />
      ),
    },
  ];

  return (
    <>
      <ProductsHeader />
      <Box minH="60vh">
        {renderAsColumn ? (
          <Flex direction="column" py={10}>
            {dogData.map((dog, index) => {
              return [
                <ColumnItemWrapper key={"dog" + { index } + "-model"}>
                  {dog.model}
                </ColumnItemWrapper>,
                <ColumnItemWrapper key={"dog" + { index } + "-text"}>
                  {dog.text}
                </ColumnItemWrapper>,
              ];
            })}
          </Flex>
        ) : (
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={6}
          >
            {dogData.map((dog, index) => {
              return index / 2 == 0
                ? [
                    <GridItemWrapper key={"dog" + { index } + "-model"}>
                      {dog.model}
                    </GridItemWrapper>,
                    <GridItemWrapper key={"dog" + { index } + "-text"}>
                      {dog.text}
                    </GridItemWrapper>,
                  ]
                : [
                    <GridItemWrapper key={"dog" + { index } + "-text"}>
                      {dog.text}
                    </GridItemWrapper>,
                    <GridItemWrapper key={"dog" + { index } + "-model"}>
                      {dog.model}
                    </GridItemWrapper>,
                  ];
            })}
          </Grid>
        )}
      </Box>
    </>
  );
}
