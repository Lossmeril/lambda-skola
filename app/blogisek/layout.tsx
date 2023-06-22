"use client";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { MDXProvider } from "@mdx-js/react";
import { Text, Divider } from "@chakra-ui/react";

const components = {
  h1: (props: any) => (
    <Text pb={2} fontSize="4xl">
      {props.children}
    </Text>
  ),
  h2: (props: any) => (
    <Text pb={2} fontSize="2xl">
      {props.children}
    </Text>
  ),
  hr: () => <Divider my={3} />,
  p: (props: any) => <Text pb={2}>{props.children}</Text>,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Box height={100} />
      <MDXProvider components={components}>
        <Container maxWidth={"container.xl"} py={4}>
          {children}

          <Box>- Ing. Radovan Milánek</Box>
        </Container>
      </MDXProvider>
    </>
  );
}
