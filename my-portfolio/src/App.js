import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ChakraProvider, Box, Heading, Button } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* Chakra UI Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={6}>
            Hi, I'm [Your Name]
          </Heading>
          <VStack spacing={4}>
            <Button colorScheme="blue" size="lg">
              View Projects
            </Button>
            <Button colorScheme="teal" size="lg">
              Contact Me
            </Button>
          </VStack>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
