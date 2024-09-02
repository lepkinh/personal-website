import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text, Button, VStack, Link, extendTheme, Stack, Icon, HStack } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
/* import resume from './assets/resume_nicolaslepki_1sep24.pdf'; */

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

function Cv() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={10}>
        {/* Text Section */}
        <VStack spacing={6} align="center">
          <Heading as="h1" size="lg">
            
          </Heading>
          <Text fontSize="md" color="gray.400" textAlign="center">
            Below is a copy of my CV. Button to download is below the PDF.
          </Text>

          {/* PDF Embed Section */}
          <Box p={5} shadow="md" borderWidth="1px" bg="gray.800" width="100%" height="2xl" overflow="hidden">
            <iframe 
              src="" /* replace with src={resume} , when import my actual resume */
              title="CV PDF" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
            />
          </Box>

          {/* Download Button */}
          <Button
            leftIcon={<FaDownload />}
            colorScheme="teal"
            variant="solid"
            as={Link}
            href="/path-to-your-cv.pdf"
            download="Your_Name_CV.pdf"
          >
            Download CV
          </Button>
        </VStack>

        {/* Links to Other Routes */}
        <Stack direction="row" spacing={4} justify="center" mt={10}>
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

export default Cv;
