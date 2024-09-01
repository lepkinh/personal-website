import React from 'react';
import { Box, Container, Button, VStack } from '@chakra-ui/react';

const CV = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="center">
        <Box width="100%" height="800px" bg="gray.100" borderRadius="md">
          {/* Embed your CV PDF here */}
          <iframe
            src="/assets/cv.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="CV"
          />
        </Box>
        <Button colorScheme="blue" size="lg" as="a" href="/assets/cv.pdf" download>
          Download CV
        </Button>
      </VStack>
    </Container>
  );
};

export default CV;