import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, HStack, Image, Icon, Link, Stack, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Guh from './assets/Guh.png';
import About from './About';
import Building from './Building';
import CV from './Cv';

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
        {/* About Me section */}
        <VStack spacing={6} align="center">
          <HStack spacing={6} align="center">
            {/* Image placeholder */}
            <VStack spacing={2} align="center">
              <Box boxSize="200" bg="gray.200" borderRadius="full" overflow="hidden">
                <Image src= {Guh} alt="hi" boxSize="200" objectFit="cover" />
              </Box>
              <Text fontSize="sm" color="gray.600">
                (Placeholder image, not actually me)
              </Text>
            </VStack>s
            {/* Name and desc */}
            <VStack spacing={1} align="start">
              <Heading as="h1" size="lg">
                Nicolas Lepki
              </Heading>
              <Text fontSize="lg" color="gray.600">
                software · hardware · ai · robotics
              </Text>
            </VStack>
          </HStack>

          {/* About Me Text */}
          <VStack spacing={2} align="start">
            <Text fontSize="lg" color="white">About</Text>
            <Text fontSize="lg" textAlign="left" color="gray.500">
              Related to engineering, tech, building. Functional thoughts and portfolio.
            </Text>
            
          </VStack>

          {/* Skills Section */}
          <VStack spacing={4}>
            <Text fontSize="lg" color="white">Technical Skills</Text>
            
            {/* Software/Programming */}
            <Box p={5} shadow="md" borderWidth="1px" width="lg">
              <Text fontSize="lg" color="white">Software, General Programming</Text>
              <Text fontSize="lg" textAlign="left" color="gray.500">
                Python, C/C++, CMake, SQL, JavaScript, HTML & CSS
              </Text>
            </Box>

            {/* Hardware/Electronics */}
            <Box p={5} shadow="md" borderWidth="1px" width="lg">
              <Text fontSize="lg" color="white">Hardware & Electronics</Text>
              <Text fontSize="lg" textAlign="left" color="gray.500">
                Analog & Digital Circuit Design, Basic Memory, Embedded Programming & Microcontroller
              </Text>
              <Text fontSize="lg" textAlign="left" color="gray.500">
                Learning: PCB, Microcontroller, Sensor, Actuator
              </Text>
            </Box>

            {/* Artificial Intelligence */}
            <Box p={5} shadow="md" borderWidth="1px" width="lg">
              <Text fontSize="lg" color="white">Artificial Intelligence</Text>
              <Text fontSize="lg" textAlign="left" color="gray.500">
                Machine Learning Algorithms, Deep Learning,
              </Text>
              <Text fontSize="lg" textAlign="left" color="gray.500">
                TensorFlow, NumPy, PyTorch
              </Text>
            </Box>

            {/* Other */}
            <Box p={5} shadow="md" borderWidth="1px" width="md">
              <Text fontSize="lg" color="white">Other</Text>
              <Text fontSize="lg" textAlign="left" color="gray.500">
                SolidWorks, MATLAB, Git, ROS
              </Text>
            </Box>
          </VStack>
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

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/building" element={<Building />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default Main;
