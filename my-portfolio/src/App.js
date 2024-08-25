import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, HStack, Image, Link, Stack, extendTheme } from '@chakra-ui/react';

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
        <VStack spacing={6} align="start"> {/* Reduced spacing from 8 to 6 */}
          <HStack spacing={6} align="center">
            {/* Image Placeholder */}
            <Box boxSize="150px" bg="gray.200" borderRadius="full" overflow="hidden">
              <Image src="https://preview.redd.it/n3fwd81de3521.png?width=640&crop=smart&auto=webp&s=be459b3d8f43e7e8c9bc59382768b575881a646c" alt="hi" boxSize="150px" objectFit="cover" />
            </Box>

            {/* Name and Description */}
            <VStack spacing={1} align="start"> {/* Less space between name and description */}
              <Heading as="h1" size="md">
                Nicolas Lepki
              </Heading>
              <Text fontSize="md" color="gray.600">
                software · hardware · ai · robotics
              </Text>
            </VStack>
          </HStack>

          {/* About Me Text */}
          <VStack spacing={2} align="start"> {/* Reduced spacing to tighten the layout */}
            <Text fontSize="l" color="white">About</Text>
            <Text fontSize="l" textAlign="left" color="gray.500">
              I am a computer engineering student at McMaster University, where I study circuits, embedded systems, electronics, software development, and mathematics. I apply these areas of study to the fields of robotics and artificial intelligence. I also develop software as a hobby.
            </Text>
          </VStack>

          {/* Skills Section */}
          <HStack spacing={4} wrap="wrap" justify="center">
            <Box p={5} shadow="md" borderWidth="1px" maxW="800px">
              <Heading fontSize="xl">Programming</Heading>
              <Text mt={4}>Python, C/C++, SQL Databases, JavaScript HTML & CSS</Text>
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
        <Stack direction="row" spacing={4} justify="center" mt={10}>
          <Link href="/" color="teal.200">Home</Link>
          <Link href="/projects" color="teal.200">Projects</Link>
          <Link href="/resume" color="teal.200">Resume</Link>
          <Link href="/contact" color="teal.200">Contact</Link>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
