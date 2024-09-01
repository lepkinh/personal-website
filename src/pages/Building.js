import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';

const ProjectSection = ({ title, projects }) => (
  <Box mb={8}>
    <Heading as="h3" size="lg" mb={4}>{title}</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {projects.map((project, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h4" size="md" mb={2}>{project.title}</Heading>
          <Text>{project.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

const Building = () => {
  const softwareProjects = [
    { title: "Project 1", description: "Description of software project 1" },
    { title: "Project 2", description: "Description of software project 2" },
  ];

  const aiProjects = [
    { title: "AI Project 1", description: "Description of AI project 1" },
    { title: "AI Project 2", description: "Description of AI project 2" },
  ];

  const hardwareProjects = [
    { title: "Hardware Project 1", description: "Description of hardware project 1" },
    { title: "Hardware Project 2", description: "Description of hardware project 2" },
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">Building & Code</Heading>
        <ProjectSection title="Software" projects={softwareProjects} />
        <ProjectSection title="AI" projects={aiProjects} />
        <ProjectSection title="Hardware and Engineering" projects={hardwareProjects} />
      </VStack>
    </Container>
  );
};

export default Building;