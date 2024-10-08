import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Icon,
  Link,
  Stack,
  extendTheme,
  Flex
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Guh from './assets/Guh.png';
import About from './About';
import Building from './Building';
import CV from './Cv';
import Computervision from './Computervision';

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
            </Link>
          </HStack>
        </Flex>

        {/* About Section */}
          <VStack align="start" mb={8}>
            <Heading as="h2" size="md" color="teal.200">
              About
            </Heading>
            <Text fontSize="md" color="gray.500" align="start">
              Related to engineering, tech, building. Functional thoughts and portfolio.
            </Text>
            <Text fontSize="md" color="gray.500" align="start">
              I am collecting data, please test out my <Link href="/computervision" color="teal.200">computer vision project</Link>.
            </Text>
          </VStack>

          {/* Skills Section */}
          <VStack align="start" spacing={8} mb={12}>
            <Box>
              <Heading as="h2" size="md" color="teal.200">Technical Skills</Heading>

              {/* Image */}
              <Box borderRadius="full" overflow="" mt="3" mb="3"><Image src="https://media.istockphoto.com/id/1315335712/photo/dog-using-computer-in-nerd-glasses-laptop-keyboard.jpg?s=612x612&w=0&k=20&c=zJBVnTlIARSBfAx-HxfoRLvXsdT6ZWnpSHBpG6s8Hys=" alt="Guh" boxSize={200} objectFit="cover"/></Box>

              <Heading as="h2" size="sm" color="teal.200">
                Software/Programming
              </Heading>
              <Text fontSize="md" color="gray.500">
                Python, C/C++, SQL, JavaScript, HTML & CSS, Learning: CMake
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="sm" color="teal.200">
                Hardware & Electronics
              </Heading>
              <Text fontSize="md" color="gray.500">
                Analog & Digital Circuit Design, Basic Memory, Embedded Programming & Microcontroller
              </Text>
              <Text fontSize="md" color="gray.500">
                Learning: PCB, Microcontroller, Sensor, Actuator
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="sm" color="teal.200">
                AI
              </Heading>
              <Text fontSize="md" color="gray.500">
                Machine Learning Algorithms, Deep Learning, TensorFlow, NumPy, PyTorch
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="sm" color="teal.200">
                Other
              </Heading>
              <Text fontSize="md" color="gray.500">
                SolidWorks, MATLAB, Git, ROS
              </Text>
            </Box>
          </VStack>
        </Container>

        {/* Footer */}
        <Stack direction="row" spacing={4} justify="center" mt={8}>
          <Link href="/" color="teal.200">
            Home
          </Link>
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
          </Link>
        </Stack>

        <HStack spacing={6} justify="center" mt={4}>
          <Link href="https://www.linkedin.com/in/nicolaslepki/" isExternal>
            <Icon as={FaLinkedin} boxSize={8} color="teal.200" />
          </Link>
          <Link href="https://github.com/lepkinh" isExternal>
            <Icon as={FaGithub} boxSize={8} color="teal.200" />
          </Link>
        </HStack>
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
        <Route path="/computervision" element={<Computervision />} />
      </Routes>
    </Router>
  );
}

export default Main;
