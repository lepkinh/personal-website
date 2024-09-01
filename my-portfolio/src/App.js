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
        <VStack spacing={6} align="center">
          <HStack spacing={6} align="center">
            {/* Image Placeholder */}
            <Box boxSize="150px" bg="gray.200" borderRadius="full" overflow="hidden">
              <Image src="" alt="hi" boxSize="150px" objectFit="cover" />
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
              Engineering, tech, building. Technical and sometimes creative.
            </Text>
          </VStack>

          {/* Skills Section */}
          <VStack spacing={4}>
            <Text fontSize="l" color="white">Technical Skills</Text>
            
            {/* Software/Programming */}
            <Box p={5} shadow="md" borderWidth="1px" width="400px">
              <Text fontSize="l" color="white">Software, General Programming</Text>
              <Text fontSize="l" textAlign="left" color="gray.500">
                Python, C/C++, SQL, JavaScript, HTML & CSS
              </Text>
            </Box>

            {/* Hardware/Electronics */}
            <Box p={5} shadow="md" borderWidth="1px" width="400px">
              <Text fontSize="l" color="white">Hardware & Electronics</Text>
              <Text fontSize="l" textAlign="left" color="gray.500">
                Analog & Digital Circuit Design, Basic Memory
              </Text>
              <Text fontSize="l" textAlign="left" color="gray.500">
                Learning: PCB, Microcontroller, Sensor, Actuator
              </Text>
            </Box>

            {/* Artificial Intelligence */}
            <Box p={5} shadow="md" borderWidth="1px" width="400px">
              <Text fontSize="l" color="white">Artificial Intelligence</Text>
              <Text fontSize="l" textAlign="left" color="gray.500">
                Machine Learning Algorithms, Deep Learning,
              </Text>
              <Text fontSize="l" textAlign="left" color="gray.500">
                TensorFlow, NumPy, PyTorch
              </Text>
            </Box>

            {/* Other */}
            <Box p={5} shadow="md" borderWidth="1px" width="400px">
              <Text fontSize="l" color="white">Other</Text>
              <Text fontSize="l" textAlign="left" color="gray.500">
                SolidWorks, MATLAB Git, ROS
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
        {/* <Route path="/cv" element={<Cv />} /> */}
      </Routes>
    </Router>
  );
}

export default Main;
