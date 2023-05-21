import { Box, Center } from "@chakra-ui/layout";

const Section = ({ children, bgColor }: any) => {
  return (
    <Box height="100vh" backgroundColor={bgColor}>
      <Center w="100%" h="100%">
        <Box>{children}</Box>
      </Center>
    </Box>
  );
};

export default Section;
