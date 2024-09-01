import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';
import About from './pages/About';
import Building from './pages/Building';
import CV from './pages/CV';

function App() {
  return (
    <Box>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl">Welcome to My Personal Website</Heading>
          <Text fontSize="xl">
            Here you can explore my projects, learn about me, and view my CV.
          </Text>
          <Box>
            <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
            <Link to="/building" style={{ marginRight: '1rem' }}>Building & Code</Link>
            <Link to="/cv">CV</Link>
          </Box>
        </VStack>
      </Container>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/building" element={<Building />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Box>
  );
}

export default App;