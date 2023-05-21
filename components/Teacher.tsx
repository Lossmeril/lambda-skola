import { HStack, Heading, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const Teacher = ({ name, title, img }: any) => {
  return (
    <HStack gap={4}>
      <Image
        borderRadius="full"
        boxSize="100px"
        src="https://bit.ly/dan-abramov"
        alt={name}
      />
      <VStack alignItems="left" w="300px">
        <Heading as="h3" size="md" color="green.500" textAlign="left">
          {name}
        </Heading>
        <Heading as="h4" size="sm" color="green.300" textAlign="left">
          {title}
        </Heading>
      </VStack>
    </HStack>
  );
};

export default Teacher;
