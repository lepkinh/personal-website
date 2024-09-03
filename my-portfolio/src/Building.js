import React from 'react';
import { ChakraProvider, Container, Flex, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon, Image } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import prediction_5 from './assets/prediction_5.png';
import Guh from './assets/Guh.png';

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

        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <HStack spacing={4}>
            
            <a href="/"><Box borderRadius="full" overflow="hidden"><Image src={Guh} alt="Guh" boxSize={50} objectFit="cover"/></Box></a>

            <Link href="/" color="teal.200" fontSize="xl">
              Home
            </Link>
          </HStack>
          <HStack spacing={6}>
            <Link href="/about" color="teal.200">
              About
            </Link>
            <Link href="/building" color="teal.200">
              Building
            </Link>
            <Link href="/cv" color="teal.200">
              CV
            </Link>
            <Link href="/" color="teal.200">
              Digit Recognition
            </Link>
          </HStack>
        </Flex>

        {/* Title */}
        <VStack spacing={1} align="start">
          <Heading as="h1" size="lg">
            Code & Building
          </Heading>
          <Text fontSize="lg" color="gray.400">
            Full-stack development, machine learning, and soon to be hardware projects.
          </Text>
        </VStack>

        {/* Software Projects Section */}


        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="lg" color="teal.200">
            Software Projects
          </Heading>

          {/* Software 1 - Sodoku Solver */}
          <Box p={5} shadow="lg" borderWidth="1px" bg="gray.800">
            <Heading as="h3" size="md" color="teal.200">
              Sodoku Solver in C++ Terminal
            </Heading>
            <Text fontSize="lg" color="gray.300" mb={4} margin={5}>
              Desc.
            </Text>

            {/* Screenshots 
            <HStack spacing={4} justify="center">
              <Image src={prediction_2} alt="A handdrawn 2" width="3xs" borderRadius="md" />
              <Image src={prediction_5} alt="A handdrawn 5" width="3xs" borderRadius="md" />
              <Image src={prediction_7}  alt="A handdrawn 7" width="3xs" borderRadius="md" />
            </HStack> */}

            {/* GitHub Link 
            <Text fontSize="lg" color="gray.400" mt={4} margin={5}>
              Check out the source code on my <Link href="https://github.com/lepkinh/digit-recognition-webapp/tree/new-approach" color="teal.200" isExternal>
                GitHub repo
              </Link>, cleaner code on release v1.1 under the 'Tags' section.
              
            </Text> */}
          </Box>

          {/* Software 2 - 2D Physics Engine */}
          <Box p={5} shadow="lg" borderWidth="1px" bg="gray.800">
            <Heading as="h3" size="md" color="teal.200">
              2D Physics Engine in C++ w/ SFML (WIP, not yet functional)
            </Heading>
            <Text fontSize="lg" color="gray.300" mb={4} margin={5}>
              This is a 2D physics engine that simulates "particles" with mass and velocity. Properties are typically stored as 2D vectors (s, v, a, f) or as floats (r, m, ...). This project is not particularly novel but it is really challenging my OOP and low level programming skills and I am learning a lot through this process. Screenshots coming soon.
            </Text>

            {/* GitHub Link */}
            <Text fontSize="lg" color="gray.300" mt={4} margin={5}>
              Source code is <Link href="https://github.com/lepkinh/2D-physics-engine" color="teal.200" isExternal>
                here
              </Link>, but project is not working. Check again soon.
            </Text>
          </Box>
          {/*
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">Project 2: Description, img, link for another software project.</Text>
          </Box>
          */}
        </VStack>

        {/* Machine Learning Projects Section */}
        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="lg" color="teal.200">
            Machine Learning Projects
          </Heading>

          {/* AI 1 - Digit Recognizer */}
          <Box p={5} shadow="lg" borderWidth="1px" bg="gray.800">
            <Heading as="h3" size="md" color="teal.200">
              User-Drawn Digit Recognizor Webapp (WIP, functional)
            </Heading>
            <Text fontSize="lg" color="gray.300" mb={4} margin={5}>
              This is a web app that uses machine learning to recognize handwritten digits by the user. The model is a computer vision neural network that I created and trained using TensorFlow and NumPy on the MNIST dataset, it has a ~98% accuracy. The app is built using React for the frontend and Flask for the backend. Below are some screenshots and a link to the GitHub repo.
            </Text>
            <Text fontSize="lg" color="gray.300" mb={4} margin={5}>
              Next steps: changing model to predict alphanumeric characters, adding other pages, stylizing front end to look cute. Already made a new model trained on EMNIST and some synthetic data, this will be used to convert handwriting to text. Exciting!
            </Text>

            {/* Screenshots */}
            <HStack spacing={4} justify="center">
              <Image src={prediction_5} alt="A handdrawn 5" width="13em" borderRadius="md" />
            </HStack>

            {/* GitHub Link */}
            <Text fontSize="lg" color="gray.400" mt={4} margin={5}>
              Check out the source code on my <Link href="https://github.com/lepkinh/digit-recognition-webapp/tree/new-approach" color="teal.200" isExternal>
                GitHub repo
              </Link>, cleaner code on release v1.1 under the 'Tags' section.
              
            </Text>
          </Box>

          {/*}
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800">
            <Text fontSize="md" color="gray.300">ML Project 2: Description, img, link for another machine learning project.</Text>
          </Box> */}
          {/* Add more projects as needed */}
        </VStack>
        
        {/* Hardware Projects Section
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
        </VStack>
        */}

        {/* Links to Other Routes */}
        <Stack direction="row" spacing={4} justify="center" mt={10}>
          <Link href="/" color="teal.200">Home</Link>
          <Link href="/about" color="teal.200">About</Link>
          <Link href="/building" color="teal.200">Code & Building</Link>
          <Link href="/cv" color="teal.200">CV</Link>
          <Link href="/" color="teal.200">
            Digit Recognition
          </Link>
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

export default Building;
