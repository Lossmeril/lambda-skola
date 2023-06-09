import { Image } from "@chakra-ui/image";
import { Container, Box, HStack, Spacer } from "@chakra-ui/layout";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      as="nav"
      zIndex={10}
      position="absolute"
      top="0"
      backgroundColor="blackAlpha.100"
      w="100vw"
      h="100px"
    >
      <Container maxW="container.xl" h="100%">
        <HStack alignItems="center" h="100%">
          <Link href="/">
            <Image src="/img/logo.svg" alt="LAMBDA škola logo" width="200px" />
          </Link>
          <Spacer />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
