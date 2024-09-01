import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, HStack, Image, Icon, Link, Stack, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import About from './About';
import Building from './Building';
import Cv from './Cv';

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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={10}>
        {/* About Me Section */}
        <VStack spacing={6} align="start">
          <HStack spacing={6} align="center">
            {/* Image Placeholder */}
            <Box boxSize="150px" bg="gray.200" borderRadius="full" overflow="hidden">
              <Image src="https://media.discordapp.net/attachments/829085119960580170/1277674570333163582/IMG_7626.png?ex=66ce06ab&is=66ccb52b&hm=5b4940db2cd276c8c461fcb0bbb5882a03968418cb03e89008c8423d3230c635&=&format=webp&quality=lossless&width=649&height=700" alt="hi" boxSize="150px" objectFit="cover" />
            </Box>

            {/* Name and Description */}
            <VStack spacing={1} align="start">
              <Heading as="h1" size="md">
                Nicolas Lepki
              </Heading>
              <Text fontSize="md" color="gray.600">
                software · hardware · ai · robotics
              </Text>
            </VStack>
          </HStack>

          {/* About Me Text */}
          <VStack spacing={2} align="start">
            <Text fontSize="l" color="white">About</Text>
            <Text fontSize="l" textAlign="left" color="gray.500">
              I am a computer engineering student at McMaster University, where I study circuits, embedded systems, electronics, software development, and mathematics. I apply these areas of study to the fields of robotics and artificial intelligence. I also develop software as a hobby.
            </Text>
          </VStack>

          {/* Skills Section */}
          <HStack spacing={4} wrap="wrap" justify="center">
            <Box p={5} shadow="md" borderWidth="1px" maxW="800px">
              <Heading fontSize="xl">Programming</Heading>
              <Text mt={4}>Python, C/C++, SQL Databases, JavaScript, HTML & CSS</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" maxW="800px">
              <Heading fontSize="xl">Hardware & Electronics</Heading>
              <Text mt={4}>Microcontrollers, Analog & Digital Circuit Design, Sensors, Actuators</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" maxW="800px">
              <Heading fontSize="xl">Artificial Intelligence</Heading>
              <Text mt={4}>Machine Learning Algorithms, Deep Learning</Text>
              <Text mt={1}>TensorFlow, NumPy, PyTorch</Text>
            </Box>
          </HStack>
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
      </Container>\
    </ChakraProvider>
  );
}

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/building" element={<Building />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Router>
  );
}

export default Main;
