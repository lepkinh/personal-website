import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  HStack,
  Icon,
  Link,
  extendTheme,
  Flex
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import About from './About';
import Building from './Projects';
import CV from './Cv';

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

function App() {
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

          {/* Profile Section */}
          <Box mt={10} textAlign="center" shadow="md">
            <Heading as="h2" size="xl">Nicolas</Heading>
            <Text fontSize="md" color="gray.500" mb={4}>Electrical and Computer Engineering Major</Text>
            <Text fontSize="lg" color="gray.700" px={4}>
              Welcome to my site. I'm passionate about engineering software and hardware to develop innovative. Right now, I am interested in ML, brain-computer interface, and robotics.
            </Text>
            <Text fontSize="lg" color="gray.700" px={4} mt={4}>
              Feel free to view my technical portfolio to learn more about my work with software, hardware, and machine learning.
            </Text>
            <Text fontSize="lg" color="gray.700" px={4} mt={4}>
            </Text>
          </Box>
        </Container>

        {/* Footer */}
        <HStack spacing={6} justify="center" mt={4}>
          <Link href="https://www.linkedin.com/in/nicolaslepki/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} color="grey.200" />
          </Link>
          <Link href="https://github.com/lepkinh" isExternal>
            <Icon as={FaGithub} boxSize={6} color="grey.200" />
          </Link>
        </HStack>
        <Text fontSize="2xs" color="gray.400" px={4} mt={4} textAlign="center">
          © 2024 Nicolas Lepki
        </Text>
    </ChakraProvider>
  );
}

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Building />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default Main;
