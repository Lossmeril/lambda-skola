import Head from "next/head";

import { Container, HStack, Heading, Text, Wrap } from "@chakra-ui/layout";

import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Teacher from "@/components/Teacher";
import Section from "@/components/Section";

import BlogDescs from "@/data/blogDescs";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          LAMBDA škola: Jestli jsi opravdu tak šikovný, tak proč studovat jinde?
        </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <Section bgColor="url(/img/zak-ktery-u-nas-stoprocentne-studuje.webp)">
          <Container maxW="container.xl" pr={12}>
            <Heading as="h1" fontSize="6em" mb={12} lineHeight="0.85em">
              Škola čar a kouzel v Pardubicích
            </Heading>
            <Heading as="p" size="xl">
              Takže otázka zní:{" "}
            </Heading>
            <Heading as="p" size="xl" color="green.500">
              Jestli jsi opravdu tak šikovný, tak proč studovat jinde?
            </Heading>
            <Text mt={12} color="blackAlpha.600" pr="50%" fontSize="20px">
              Program zaměřený na vyhrávání co nejvíce soutěží v oblasti
              programování a IT.
            </Text>
            <Text mt={2} color="blackAlpha.600" pr="50%" fontSize="20px">
              Nechte se učit od zaměstnanců softwarových firem, týpka z České
              Televize, který naposledy točil film 30 let zpátky a umělce, který
              squatuje ve škole.
            </Text>
          </Container>
        </Section>

        <Section bgColor="blackAlpha.100">
          <Heading textAlign="center" mb={12}>
            Učitelský sbor LAMBDY
          </Heading>
          <Wrap
            alignItems="flex-start"
            maxW="80vw"
            mx="auto"
            justify="space-between"
            my={6}
            spacing={12}
          >
            <Teacher
              name="Ing. Radovan Milánek"
              title="ředitel školy"
              img="/img/milanek.jpg"
            />
            <Teacher
              name="Usb. Jan Prodal, MUDr."
              title="učitel fyziky, programování, správce kódů pro odpálení nukleárních hlavic"
              img="/img/prodal.jpg"
            />
            <Teacher
              name="akademický malíř El Greco"
              title="učitel grafiky, školní doktor"
              img="/img/malir.jpg"
            />
            <Teacher
              name="Ing. Kateřina Milánková"
              title="zástupkyně ředitele, učitelka ekonimiky, praní peněz"
              img="/img/milánková.jpg"
            />
            <Teacher
              name="Mgr. Alena Hlohovcová"
              title="učitelka českého jazyka"
              img="/img/hlohovcová.jpg"
            />
          </Wrap>
        </Section>

        <Section>
          <Heading textAlign="center" mb={6} mt={12}>
            Blogísek ředitele Milánka
          </Heading>
          <Wrap
            alignItems="flex-start"
            maxW="80vw"
            mx="auto"
            justify="space-between"
          >
            <BlogCard
              heading="MHD Kacys pomohlo najít kluka z autobusu"
              image="https://www.delta-skola.cz/data/blog-posts/images/orig/dopravni-podnik.webp"
              text={BlogDescs.MHDkacys}
              link="/blogisek/mhd-kacys"
            />
            <BlogCard
              heading="Už nám nesmrdí umyvadlo"
              image="https://images.unsplash.com/photo-1584961503022-d19acee0af7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=718&q=80"
              text={BlogDescs.Umyvadlo}
              link="#"
            />
            <BlogCard
              heading="Venda Sigsauer je prostě talent"
              image="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.15752-9/333173556_2150560005141995_5050978864726998452_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=zLh8GGq7HWEAX8jFhKD&_nc_ht=scontent-lhr8-1.xx&oh=03_AdQ2nA4xFjqgFH1HoUdvCl61lrdxcziEaE4_sFmOLShCZg&oe=6491757A"
              link="#"
            />
          </Wrap>
        </Section>
      </main>
    </>
  );
}
