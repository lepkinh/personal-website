import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container maxW="container.xl" flex="1">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;