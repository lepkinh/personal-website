import React from 'react';
import { ChakraProvider, Box, Container, Flex, Image, Heading, Text, Button, VStack, Link, extendTheme, Stack, Icon, HStack } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import resume from './assets/nicolaslepki_resume_2024.pdf';
import Guh from './assets/Guh.png';

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

function Cv() {
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

        {/* Text Section */}
        <VStack spacing={6} align="center">
          <Heading as="h1" size="lg">
            
          </Heading>
          {/* Download Button */}
          <Button
            leftIcon={<FaDownload />}
            colorScheme="gray"
            variant="solid"
            as={Link}
            href="/path-to-your-cv.pdf"
            download="Your_Name_CV.pdf"
          >
            Download CV
          </Button>

          {/* PDF Embed Section */}
          <Box p={5} shadow="md" borderWidth="1px" width="xl" height="xl" overflow="hidden">
            <iframe 
              src={resume}
              title="CV PDF" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
            />
          </Box>

          
        </VStack>

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

export default Cv;
