import React from 'react';
import { Box, Container, Flex, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Container maxW="container.xl">
        <Flex direction="column" alignItems="center">
          <Flex mb={4}>
            <Link href="/" mx={2}>Home</Link>
            <Link href="/about" mx={2}>About</Link>
            <Link href="/building" mx={2}>Building</Link>
            <Link href="/cv" mx={2}>CV</Link>
          </Flex>
          <Flex>
            <Link href="https://github.com/lepkinh" isExternal mx={2}>
              <Icon as={FaGithub} boxSize={6} />
            </Link>
            <Link href="https://twitter.com/fixedawakening" isExternal mx={2}>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="https://www.linkedin.com/in/nicolaslepki/" isExternal mx={2}>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;