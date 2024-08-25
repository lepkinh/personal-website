import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, HStack, Image } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.md" py={10}>
        {/* About Me Section */}
        <VStack spacing={8} align="center">
          <Heading as="h1" size="2xl">
            About Me
          </Heading>

          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
          />

          <Text fontSize="xl" textAlign="center">
            Hi, I'm [Your Name], a passionate software engineer and tech enthusiast. I enjoy working on
            projects that involve AI, robotics, and web development.
          </Text>

          {/* Skills Section */}
          <HStack spacing={4} wrap="wrap" justify="center">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Programming</Heading>
              <Text mt={4}>Python, JavaScript, C++</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Web Development</Heading>
              <Text mt={4}>React.js, Flask, HTML/CSS</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">AI & Robotics</Heading>
              <Text mt={4}>Machine Learning, Computer Vision</Text>
            </Box>
          </HStack>

          {/* Additional Information */}
          <Text fontSize="lg" textAlign="center" maxW="600px">
            I'm currently a student at [University Name], pursuing a degree in Computer Engineering.
            I'm looking forward to contributing to exciting projects.
          </Text>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
