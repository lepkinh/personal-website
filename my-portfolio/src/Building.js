import React from 'react';
import { ChakraProvider, Container, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon, Image } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import prediction_2 from './assets/prediction_2.png';
import prediction_5 from './assets/prediction_5.png';
import prediction_7 from './assets/prediction_7.png';

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

function Building() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={10}>
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md">
            Code & Building
          </Heading>
          <Text fontSize="md" color="gray.400">
            Full-stack development, machine learning, and hardware projects.
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

          {/* AI 1 */}
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Heading as="h3" size="sm" color="teal.200">
              User-Drawn Digit Recognizor Webapp (WIP, functional)
            </Heading>
            <Text fontSize="md" color="gray.300" mb={4}>
              This is a web app that uses machine learning to recognize handwritten digits by the user. I created this model using TensorFlow and NumPy, it has a ~98% accuracy. The app is built using React for the frontend and Flask for the backend. Below are some screenshots and a link to the GitHub repo. WIP next steps: changing model to predict alphanumeric characters, adding other pages, stylizing front end to look cute.
            </Text>

            {/* Screenshots */}
            <HStack spacing={4} justify="center">
              <Image src={prediction_2} alt="A handdrawn 2" boxSize="200px" borderRadius="md" />
              <Image src={prediction_5} alt="A handdrawn 5" boxSize="200px" borderRadius="md" />
              <Image src={prediction_7}  alt="A handdrawn 7" boxSize="200px" borderRadius="md" />
            </HStack>

            {/* GitHub Link */}
            <Text fontSize="md" color="gray.400" mt={4}>
              Check out the source code on my <Link href="https://github.com/lepkinh/digit-recognition-webapp/tree/new-approach" color="teal.200" isExternal>
                GitHub repo
              </Link>, cleaner code on release v1.1 under the 'Tags' section.
              
            </Text>
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

export default Building;
