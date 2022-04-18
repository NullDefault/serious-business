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

function GridItemWrapper({ big = false, children }) {
  return (
    <GridItem align="center">
      <Container h="60vh" w="100%">
        {children}
      </Container>
    </GridItem>
  );
}

export default function Products() {
  return (
    <>
      <ProductsHeader />
      <Box minH="60vh">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          <GridItemWrapper>
            <ModelViewer
              model="dumbdog"
              scale={useBreakpointValue({ base: 0.05, md: 0.1, lg: 0.15 })}
              position={[0, -12, 0]}
              rotationAxes="y"
            />
          </GridItemWrapper>
          <GridItemWrapper>
            <Flex direction="column" justify="center" h="full">
              <chakra.h1 fontSize={48} fontWeight={"bold"}>
                Dumb Dog
              </chakra.h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Flex>
          </GridItemWrapper>
          <GridItemWrapper>
            <Flex direction="column" justify="center" h="full">
              <chakra.h1 fontSize={48} fontWeight={"bold"}>
                Long Dog
              </chakra.h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Flex>
          </GridItemWrapper>
          <GridItemWrapper>
            <ModelViewer
              model="longdog"
              scale={useBreakpointValue({ base: 0.4, md: 0.6, lg: 1 })}
              rotation={[1.5, 0, 0]}
              rotationAxes="y"
            />
          </GridItemWrapper>
        </Grid>
      </Box>
    </>
  );
}
