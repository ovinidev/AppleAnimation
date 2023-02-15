import { Flex } from "@chakra-ui/react";
import { Apple } from "./components/Apple";

export default function App() {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Apple />
    </Flex>
  );
}
