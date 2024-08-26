import React from 'react';
import { ChakraProvider, Container, Heading, Text, VStack, HStack, Box, extendTheme } from '@chakra-ui/react';

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
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Code & Building
          </Heading>
          <Text fontSize="lg" color="gray.400">
            Full-stack development, machine learning, and hardware projects.
          </Text>
        </VStack>

        {/* Software Projects Section */}
        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="xl" color="teal.200">
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
          <Heading as="h2" size="xl" color="teal.200">
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
          <Heading as="h2" size="xl" color="teal.200">
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
      </Container>
    </ChakraProvider>
  );
}

export default Building;