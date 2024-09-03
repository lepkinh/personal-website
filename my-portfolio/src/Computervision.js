import React, { useRef, useState } from 'react';
import { ChakraProvider, Container, Flex, Heading, Text, VStack, HStack, Box, extendTheme, Link, Stack, Icon, Image } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import charlie2 from './assets/charlie2.jpg';
import Guh from './assets/Guh.png';

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
  
function About() {
    const canvasRef = useRef(null);  // Reference to the canvas
    const [isDrawing, setIsDrawing] = useState(false);  // State to track drawing
    const [prediction, setPrediction] = useState(null);  // State to store prediction

    // Function to start drawing
    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 10;  // Set line width for drawing
        ctx.lineCap = 'round';  // Set line cap for smoother drawing
        ctx.strokeStyle = 'black';  // Set drawing color
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };

    // Function to continue drawing as the mouse moves
    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };

    // Function to stop drawing
    const stopDrawing = () => {
        setIsDrawing(false);
    };

    // Function to preprocess the image data (grayscale and normalize)
    const preprocessImageData = () => {
        // Create a temporary canvas to resize the image
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        // Resize the canvas to 28x28 pixels (as expected by the model)
        tempCanvas.width = 28;
        tempCanvas.height = 28;

        // Draw the current canvas image onto the resized canvas
        tempCtx.drawImage(canvasRef.current, 0, 0, 28, 28);

        // Get the image data from the resized canvas (28x28)
        const resizedImageData = tempCtx.getImageData(0, 0, 28, 28).data;

        // Convert the image to grayscale and normalize pixel values to [0, 1]
        const grayscaleImage = [];
        for (let i = 0; i < resizedImageData.length; i += 4) {
            // Compute grayscale value by averaging the RGB values
            const grayscaleValue = resizedImageData[i] * 0.3 + resizedImageData[i + 1] * 0.59 + resizedImageData[i + 2] * 0.11;
            // Normalize grayscale value to [0, 1] range
            grayscaleImage.push(grayscaleValue / 255.0);
        }

        // Reshape the flattened grayscale image array to [1, 28, 28, 1]
        const reshapedImage = [];
        for (let i = 0; i < 28; i++) {
            const row = [];
            for (let j = 0; j < 28; j++) {
                row.push([grayscaleImage[i * 28 + j]]);
            }
            reshapedImage.push(row);
        }

        // Return the reshaped image as a 4D array
        return [reshapedImage];  // Shape: [1, 28, 28, 1]
    };

    // Function to handle the Predict button click
    const handlePredictClick = async () => {
        try {
            const preprocessedData = preprocessImageData();

            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: preprocessedData }),
            });

            if (!response.ok) {
                throw new Error('Prediction request failed.');
            }

            const result = await response.json();
            setPrediction(result.prediction);  // Set the prediction received from the backend
        } catch (error) {
            console.error("Error during prediction:", error);
            setPrediction('Error predicting digit');
        }
    };

    // Function to handle the Clear button click
    const handleClearClick = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
        setPrediction(null);  // Clear the prediction as well
    };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" py={10}>
        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <HStack spacing={4}>
            
            <a href="/"><Box borderRadius="full" overflow="hidden"><Image src={Guh} alt="Guh" boxSize={10} objectFit="cover"/></Box></a>

            <Link href="/" color="teal.200" fontSize="xl">
              Home
            </Link>
          </HStack>
          <HStack spacing={6}>
            <Link color="gray.900"></Link> {/* Spacer for mobile view */}
            <Link href="/about" color="teal.200">
              About
            </Link>
            <Link href="/building" color="teal.200">
              Projects
            </Link>
            <Link href="/cv" color="teal.200">
              CV
            </Link>
            <Link href="/computervision" color="teal.200">
              Computer Vision
            </Link>
          </HStack>
        </Flex>


        {/* Text */}
        <VStack spacing={1} align="start">
          <Heading as="h1" size="md" color="teal.200" mt={6}>
            Digit Recognition Neural Network
          </Heading>
          <Text fontSize="md" color="gray.400" mt={2}>
            By drawing on this canvas and clicking the "Predict" button, you can see my neural network's prediction of the digit (0-9) you drew. If you draw the digit somewhat clearly, the prediction will hopefully be accurate!
          </Text>
          <Text fontSize="md" color="gray.400" mt={2}>
            See more regarding this project <Link href="/building" color="teal.200">here</Link>.
          </Text>
        </VStack>

        {/* Canvas */}
        

        {/* Buttons */}

        
        {/* Links to Other Routes */}
        <Stack direction="row" spacing={4} justify="center" mt={10}>
          <Link href="/" color="teal.200">Home</Link>
          <Link href="/about" color="teal.200">About</Link>
          <Link href="/building" color="teal.200">Projects</Link>
          <Link href="/cv" color="teal.200">CV</Link>
          <Link href="/computervision" color="teal.200">
            Computer Vision
          </Link>
        </Stack>

        {/* Links to Socials */}
        <HStack spacing={6} justify="center" mt={4}>
          <Link href="https://www.linkedin.com/in/nicolaslepki/" isExternal>
            <Icon as={FaLinkedin} boxSize={8} color="teal.200" />
          </Link>
          <Link href="https://github.com/lepkinh" isExternal>
            <Icon as={FaGithub} boxSize={8} color="teal.200" />
          </Link>
          {/*
          <Link href="" isExternal>
            <Icon as={FaTwitter} boxSize={8} color="teal.200" />
          </Link>
          */}
        </HStack>
      </Container>
    </ChakraProvider>
  );
}

export default About;