import React from 'react';
import { ChakraProvider, Container, Flex, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon, Image } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
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
              Computer Vision
            </Link>s
          </HStack>
        </Flex>


        {/* Text */}
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md" color="teal.200" mt={6}>
            Under construction...
          </Heading>
          <Text fontSize="md" color="gray.400" mt={2}>
            Should exist within a week or so!
          </Text>
        </VStack>

        {/* Canvas */}
        

        {/* Buttons */}

        
        {/* Links to Other Routes */}
        <Stack direction="row" spacing={4} justify="center" mt={10}>
          <Link href="/" color="teal.200">Home</Link>
          <Link href="/about" color="teal.200">About</Link>
          <Link href="/building" color="teal.200">Projects</Link>
          <Link href="/cv" color="teal.200">CV</Link>
          <Link href="/computervision" color="teal.200">
            Computer Vision
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