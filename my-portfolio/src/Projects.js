import React from 'react';
import { ChakraProvider, Container, Flex, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon, Image } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import prediction_5 from './assets/prediction_5.png';
import physicsEngine from './assets/physicsEngineScreenshot.png';

// Lightish theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white", // Light background color
        color: "gray.700", // Dark text color for readability
        fontFamily: "Arial, sans-serif", // Ensure a clean, modern look
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "gray.800", // Darker color for headings
        fontWeight: "bold",
      },
      sizes: {
        xl: { fontSize: "3xl" }, // Adjust large heading sizes as in the example
        lg: { fontSize: "2xl" },
        md: { fontSize: "xl" },
      },
    },
    Text: {
      baseStyle: {
        color: "gray.600", // Subtle color for descriptive text
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.md",
        p: 4,
      },
    },
  },
});

function Projects() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={10} centerContent>

        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <HStack spacing={6}>
            <Link href="/" color="gray.800" fontWeight="bold">
              Home
            </Link>
            <Link href="/blog" color="gray.800" fontWeight="bold">
              Blog
            </Link>
            <Link href="/projects" color="gray.800" fontWeight="bold">
              Technical Portfolio
            </Link>
            <Link href="/cv" color="gray.800" fontWeight="bold">
              CV
            </Link>
          </HStack>
        </Flex>

        {/* Title */}
        <VStack spacing={1} align="start">
          <Heading as="h2" size="md" color="gray.800" fontWeight="bold" px={4}>Technical Projects</Heading>

          <Text fontSize="lg" color="gray.700" px={4}>
            Full-stack development, machine learning, and hardware projects.
          </Text>
        </VStack>

        {/* Software Projects Section */}
        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="md" color="gray.800" fontWeight="bold" px={4}>Software Projects</Heading>

          {/* Software 1 - Sodoku Solver */}
          {/*
          <Box p={5} shadow="lg" borderWidth="1px" bg="gray.800">
            <Heading as="h3" size="md" color="teal.200">
              Sodoku Solver in C++ Terminal
            </Heading>
            <Text fontSize="lg" color="gray.300" mb={4} margin={5}>
              Desc.
            </Text> */}

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
          {/*</Box> */}

          {/* Software - 2D Physics Engine */}
          <Box p={5} shadow="lg" borderWidth="1px">
            <Heading as="h2" size="md" color="gray.800" fontWeight="bold" px={4}>
              2D Physics Engine
            </Heading>

            <Text fontSize="lg" color="gray.700" px={4} mb={4} margin={5}>
              2D physics engine built in Python using Pygame. The engine simulates rigid body dynamics, collisions, and friction. The engine lets the user choose the colour and size of circles and spawn them in. This is just a little test project to learn more about simulating physics. The GUI was added for fun.
            </Text>
            <HStack spacing={4} justify="center">
              <Image src={physicsEngine} alt="circles GUI" width="13em" borderRadius="md" />
            </HStack>
            <Text fontSize="lg" color="gray.700" px={4} mt={4} margin={5}>
              Source code is available <Link href="https://github.com/lepkinh/2D-physics-engine" color="gray.800" fontWeight="bold" isExternal>
                here
              </Link>. Shouts outs to PyGame library.
            </Text>
          </Box>
        </VStack>

        {/* Machine Learning Projects Section */}
        <VStack spacing={6} align="start" mt={10}>
          <Heading as="h2" size="md" color="gray.800" fontWeight="bold" px={4}>
            Machine Learning Projects
          </Heading>

          {/* AI 1 - Digit Recognizer */}
          <Box p={5} shadow="lg" borderWidth="1px">
            <Heading as="h3" size="md" color="gray.800" fontWeight="bold" px={4}>
              Handwritten Text Recognition App
            </Heading>
            <Text fontSize="lg" mb={4} margin={5} color="gray.700" px={4}>
              This is a web app that uses a CNN to recognize strings of characters handwritten by a user. The model is x, y, and z, made using a, b, and c. The app is built using React for the frontend and Flask for the backend.
            </Text>

            {/* Screenshots */}
            <HStack spacing={4} justify="center">
              <Image src={prediction_5} alt="A handdrawn 5" width="13em" borderRadius="md" />
            </HStack>

            {/* GitHub Link */}
            <Text fontSize="lg" color="gray.700" px={4} mt={4} margin={5}>
              Source code available on this <Link href="https://github.com/lepkinh/digit-recognition-webapp/tree/new-approach" color="gray.800" fontWeight="bold" isExternal>
                GitHub repo
              </Link>.
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

        {/* Links to Socials */}
        <HStack spacing={6} justify="center" mt={4}>
          <Link href="https://www.linkedin.com/in/nicolaslepki/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} color="grey.200" />
          </Link>
          <Link href="https://github.com/lepkinh" isExternal>
            <Icon as={FaGithub} boxSize={6} color="grey.200" />
          </Link>
          {/*
          <Link href="" isExternal>
            <Icon as={FaTwitter} boxSize={8} color="teal.200" />
          </Link>
          */}
        </HStack>
        <Text fontSize="2xs" color="gray.400" px={4} mt={4} textAlign="center">
          © 2024 Nicolas Lepki
        </Text>
      </Container>
    </ChakraProvider>
  );
}

export default Projects;
