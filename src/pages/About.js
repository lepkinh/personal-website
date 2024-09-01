import React from 'react';
import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="xl" mb={4}>About This Website</Heading>
          <Text>
            {/* Add your content about the website here */}
            This website serves as a digital portfolio to showcase my technical efforts in software, hardware, and AI. It's built using React and Chakra UI, demonstrating my front-end development skills while providing a platform to share my projects and experiences.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>About Me</Heading>
          <Box display="flex" alignItems="start" gap={8}>
            <Box flex="1">
              <Text>
                {/* Add your content about yourself here */}
                I'm a passionate technologist with a keen interest in software development, artificial intelligence, and hardware engineering. My journey in tech has led me to work on various exciting projects, pushing the boundaries of what's possible with code and circuits.
              </Text>
            </Box>
            <Box width="200px" height="200px" bg="gray.200" borderRadius="md">
              {/* Placeholder for your image */}
              <Image
                src="/path-to-your-image.jpg"
                alt="Your Name"
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="md"
                fallbackSrc="https://via.placeholder.com/200"
              />
            </Box>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;