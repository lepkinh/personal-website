// Resume.js
import React from 'react';
import { Box, Button, VStack, Link, Text } from '@chakra-ui/react';

function Resume() {
  const resumeUrl = "/path/to/your/resume.pdf"; // ADD RESUME HERE, I need to redo mine still

  return (
    <VStack spacing={8} py={10}>
      <Text fontSize="2xl" color="gray.200">My Resume</Text>
      
      {/* Embed PDF */}
      <Box as="iframe" src={resumeUrl} width="100%" height="600px" borderRadius="md" shadow="md" />

      {/* Download Button */}
      <Link href={resumeUrl} download>
        <Button colorScheme="teal" variant="solid">Download Resume</Button>
      </Link>
    </VStack>
  );
}

export default Resume;
