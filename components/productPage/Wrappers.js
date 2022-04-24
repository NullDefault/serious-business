import { GridItem, Container } from "@chakra-ui/react";

function GridItemWrapper({ children }) {
  return (
    <GridItem align="center">
      <Container h="700px" w="100%">
        {children}
      </Container>
    </GridItem>
  );
}

function ColumnItemWrapper({ children }) {
  return (
    <Container w="100%" h="800px">
      {children}
    </Container>
  );
}

export { GridItemWrapper, ColumnItemWrapper };
