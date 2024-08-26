// Cv.js
import React from 'react';
import { ChakraProvider, Box, Button, VStack, Link, Text, extendTheme } from '@chakra-ui/react';

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
  const resumeUrl = "/path/to/your/resume.pdf"; // ADD RESUME HERE, I need to redo mine still

  return (
    <VStack spacing={8} py={10}>
      <Text fontSize="2xl" color="gray.200">My CV will be here later</Text>
      
      {/* Embed PDF */}
      <Box as="iframe" src={resumeUrl} width="100%" height="600px" borderRadius="md" shadow="md" />

      {/* Download Button */}
      <Link href={resumeUrl} download>
        <Button colorScheme="teal" variant="solid">Download as PDF</Button>
      </Link>
    </VStack>
  );
}

export default Cv;
