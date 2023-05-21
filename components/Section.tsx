import { Box, Center } from "@chakra-ui/layout";

const Section = ({ children, bgColor }: any) => {
  return (
    <Box minH="100vh" background={bgColor}>
      <Center w="100%" h="100%" minH="100vh">
        <Box>{children}</Box>
      </Center>
    </Box>
  );
};

export default Section;
