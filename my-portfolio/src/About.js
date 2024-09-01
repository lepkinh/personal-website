import React from 'react';
import { AspectRatio, ChakraProvider, Container, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon, Image } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import charlie1 from './assets/charlie1.jpg';
import charlie2 from './assets/charlie2.jpg';
import beautiful_world from './assets/beautiful_world.jpg';

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
        {/* About Me (serious) Section */}
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md">
            About Me {/* (Serious) */}
          </Heading>
          <Text fontSize="md" color="gray.400">
            I am actively searching for a large project to deep dive into. I am an engineering student at McMaster University, currently studying circuits, embedded systems, electronics, software, and mathematics. A greater goal of mine is applying acquired knowledge to build embodied AI. I also develop software as a hobby. I am an ex University of Waterloo student where I majored in mathematics before transferring.
          </Text>
        </VStack>

        {/* About This Site Section */}
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md" marginTop={6}>
            About This Site
          </Heading>
          <Text fontSize="md" color="gray.400">
            This site was created to document my thoughts and technical efforts, it is very WIP. It is built using React and Chakra UI. The code for this site is available <Link target="_blank" href="https://github.com/lepkinh/personal-website" color="teal.200">here</Link>.
          </Text>
        </VStack>   

        {/* Fun Media Section */}
        <Box p={5} shadow="md" borderWidth="1px" bg="gray.800" marginTop={6}>
          <HStack spacing={4} justify="center">
            <Image src={charlie1} alt="Charlie the dog 1" maxW="200px" borderRadius="md" />
            <Image src={charlie2} alt="Charlie the dog 2" maxW="200px" borderRadius="md" />
            <Image src={beautiful_world}  alt="Beautiful amazing world" maxW="200px" borderRadius="md" />
          </HStack>
          <Text fontSize="md" color="gray.300" align="center" marginTop={4}>enjoyable media</Text>
        </Box>
        
        {/* About Me (unserious) Section */}
        {/* :p
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md">
            About Me (Unserious)
          </Heading>
          <Text fontSize="md" color="gray.400">
            I like to grind and immerse myself in stuff, I live when I'm in a flow state. I am a ex-amateur-mma-fighter, love animals and sometimes women, rank diamond in league of legends, produce techno music (trance, industrial) and have been featured in a Toronto club, caffeine connoisseur, read horror fiction.
          </Text>
        </VStack>
        */}
        
        {/* Links to Other Routes */}
        <Stack direction="row" spacing={4} justify="center" mt={10}>
          <Link href="/" color="teal.200">Home</Link>
          <Link href="/about" color="teal.200">About</Link>
          <Link href="/building" color="teal.200">Code & Building</Link>
          {/* <Route path="/cv" element={<Cv />} /> */}
        </Stack>

        {/* Links to Socials */}
        <HStack spacing={6} justify="center" mt={4}>
          <Link href="https://www.linkedin.com/in/nicolaslepki/" isExternal>
            <Icon as={FaLinkedin} boxSize={8} color="teal.200" />
          </Link>
          <Link href="https://github.com/lepkinh" isExternal>
            <Icon as={FaGithub} boxSize={8} color="teal.200" />
          </Link>
          <Link href="https://x.com/fixedawakening" isExternal>
            <Icon as={FaTwitter} boxSize={8} color="teal.200" />
          </Link>
        </HStack>
      </Container>
    </ChakraProvider>
  );
}

export default About;