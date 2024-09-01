import React from 'react';
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="brand.600" py={4}>
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Heading as="h1" size="lg" color="white">
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              Your Name
            </Link>
          </Heading>
          <Spacer />
          <Box>
            <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
            <Link as={RouterLink} to="/building" color="white" mx={2}>Building</Link>
            <Link as={RouterLink} to="/cv" color="white" mx={2}>CV</Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;