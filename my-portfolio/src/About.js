import React from 'react';
import { ChakraProvider, Container, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

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
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md">
            About This Site
          </Heading>
          <Text fontSize="md" color="gray.400">
            This site was created to document my technical efforts and thoughts. It is built using React, Chakra UI, and Vercel. The code for this site is available on <a style="text-decoration:none" href="https://github.com/lepkinh/personal-website">this GitHub repo</a>.
          </Text>
        </VStack>   

        <VStack spacing={1} align="start">
          <Heading as="h1" size="md">
            About Me
          </Heading>
          <Text fontSize="md" color="gray.400">
            I am a computer engineering student at McMaster University, where I study circuits, embedded systems, electronics, software development, and mathematics. I apply these areas of study to the fields of robotics and artificial intelligence. I also develop software as a hobby. I am an ex-University of Waterloo student where I majored in mathematics before transferring.
          </Text>
          <Text>
            I am looking for a project to do a full deep dive into, where I can grind and contribute as a part of a team.
          </Text>
        </VStack>

        {/* Software Projects Section */}
        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="md" color="teal.200">
            Software Projects
          </Heading>
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">Project 1: Description, img, link for the software project.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">Project 2: Description, img, link for another software project.</Text>
          </Box>
          {/* Add more projects as needed */}
        </VStack>

        {/* Machine Learning Projects Section */}
        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="md" color="teal.200">
            Machine Learning Projects
          </Heading>
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">ML Project 1: Description, img, link for the machine learning project.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">ML Project 2: Description, img, link for another machine learning project.</Text>
          </Box>
          {/* Add more projects as needed */}
        </VStack>

        {/* Hardware Projects Section */}
        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="md" color="teal.200">
            Hardware Projects
          </Heading>
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">Hardware Project 1: Description, img, link for the hardware project.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">Hardware Project 2: Description, img, link for another hardware project.</Text>
          </Box>
          {/* Add more projects as needed */}
        </VStack>

        {/* Links to Other Routes */}
        <Stack direction="row" spacing={4} justify="center" mt={4}>
          <Link href="/" color="teal.200">Home</Link>
          <Link href="/about" color="teal.200">About</Link>
          <Link href="/building" color="teal.200">Code & Building</Link>
          <Link href="/cv" color="teal.200">CV</Link>
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