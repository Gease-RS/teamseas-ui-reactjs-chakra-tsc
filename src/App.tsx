import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";

import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  extendTheme,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Counter } from "./donation/Counter";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.50">
        <VStack spacing={8}>
          <Logo h="32" pointerEvents="none" />
          <Heading as="h1" size="xl">
            JOIN THE MOVEMENT
          </Heading>
          <Text>
            The team is growing everday and scoring wins for
            <br /> Temove trash with us and track our progress!
          </Text>

          <Heading as="h2" size="4x1">
            <Counter from={0} to={23445345} />
          </Heading>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
