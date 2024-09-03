import React from 'react';
import { ChakraProvider, Container, Flex, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon, Image } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import charlie2 from './assets/charlie2.jpg';
import Guh from './assets/Guh.png';

// Darker theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900', // Dark background color
        color: 'gray.200', // Light text color
      },
    },
  },
});
  
function About() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={10}>
        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <HStack spacing={4}>
            
            <a href="/"><Box borderRadius="full" overflow="hidden"><Image src={Guh} alt="Guh" boxSize={10} objectFit="cover"/></Box></a>

            <Link href="/" color="teal.200" fontSize="xl">
              Home
            </Link>
          </HStack>
          <HStack spacing={6}>
            <Link color="gray.900"></Link> {/* Spacer for mobile view */}
            <Link href="/about" color="teal.200">
              About
            </Link>
            <Link href="/building" color="teal.200">
              Projects
            </Link>
            <Link href="/cv" color="teal.200">
              CV
            </Link>
            <Link href="/computervision" color="teal.200">
              Digit Recognition
            </Link>
          </HStack>
        </Flex>


        {/* About Me (serious) Section */}
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md" color="teal.200" mt={6}>
            About Me {/* (Serious) */}
          </Heading>
          <Text fontSize="md" color="gray.400" mt={2}>
            I am actively searching for a large project to deep dive into. I am an engineering student at McMaster University, currently studying circuits, embedded systems, electronics, software, and mathematics. A greater goal of mine is applying acquired knowledge to build embodied AI. I also develop software as a hobby. I am an ex University of Waterloo student where I majored in mathematics before transferring.
          </Text>
        </VStack>

        {/* About This Site Section */}
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md" color="teal.200" mt={8}>
            About This Site
          </Heading>
          <Text fontSize="md" color="gray.400" mt={2}>
            This site was created to document my thoughts and technical efforts, it is a WIP. It is built using React and Chakra UI. The code for this site is available <Link target="_blank" href="https://github.com/lepkinh/personal-website" color="teal.200">here</Link>.
          </Text>
        </VStack>   

        {/* Media */}
        <Box p={5} shadow="md" borderWidth="1px" bg="gray.800" marginTop={6}>
          <HStack spacing={4} justify="center">
            <Image src={charlie2} alt="Charlie the dog 2" width="3xs" borderRadius="md" />
          </HStack>
          <Text fontSize="md" color="gray.300" align="center" marginTop={4}>Charlie</Text>
        </Box>
        
        {/* About Me (unserious) Section */}
        {/*
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md">
            About Me (Unserious)
          </Heading>
          <Text fontSize="md" color="gray.400">
            
          </Text>
        </VStack>
        */}
        
        {/* Links to Other Routes */}
        <Stack direction="row" spacing={4} justify="center" mt={10}>
          <Link href="/" color="teal.200">Home</Link>
          <Link href="/about" color="teal.200">About</Link>
          <Link href="/building" color="teal.200">Projects</Link>
          <Link href="/cv" color="teal.200">CV</Link>
          <Link href="/computervision" color="teal.200">
            Digit Recognition
          </Link>
        </Stack>

        {/* Links to Socials */}
        <HStack spacing={6} justify="center" mt={4}>
          <Link href="https://www.linkedin.com/in/nicolaslepki/" isExternal>
            <Icon as={FaLinkedin} boxSize={8} color="teal.200" />
          </Link>
          <Link href="https://github.com/lepkinh" isExternal>
            <Icon as={FaGithub} boxSize={8} color="teal.200" />
          </Link>
          {/*
          <Link href="" isExternal>
            <Icon as={FaTwitter} boxSize={8} color="teal.200" />
          </Link>
          */}
        </HStack>
      </Container>
    </ChakraProvider>
  );
}

export default About;