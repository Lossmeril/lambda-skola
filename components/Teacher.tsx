import { HStack, Heading, VStack, WrapItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const Teacher = ({ name, title, img }: any) => {
  return (
    <WrapItem>
      <HStack gap={4}>
        <Image borderRadius="full" boxSize="100px" src={img} alt={name} />
        <VStack alignItems="left" w="300px">
          <Heading as="h3" size="md" color="green.500" textAlign="left">
            {name}
          </Heading>
          <Heading as="h4" size="sm" color="blackAlpha.700" textAlign="left">
            {title}
          </Heading>
        </VStack>
      </HStack>
    </WrapItem>
  );
};

export default Teacher;
