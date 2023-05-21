import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Stack, Heading, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { WrapItem } from "@chakra-ui/react";

const BlogCard = ({ heading, image, text }: any) => {
  return (
    <WrapItem>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        maxW="sm"
        borderRadius="0"
      >
        <CardBody>
          <Image
            src={image}
            alt={heading}
            w="100%"
            h="250px"
            objectFit="cover"
          />
          <Stack mt="6" spacing="3">
            <Box minH="50px">
              <Heading size="md" color="green.500">
                {heading}
              </Heading>
            </Box>
            <Box minH="250px">
              <Text py={6}>{text}</Text>
            </Box>

            <Button variant="solid" colorScheme="green" mb={3} borderRadius="0">
              Číst dále
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </WrapItem>
  );
};

export default BlogCard;
