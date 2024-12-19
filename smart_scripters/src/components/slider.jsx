import React, { useState } from 'react';  
import {  
  Box,  
  Button,  
  Image,  
  Flex,  
  IconButton,  
  useBreakpointValue,  
} from '@chakra-ui/react';  
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';  

const images = [  
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',  
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',  
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',  
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',  
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',  
];  

const Carousel = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const totalImages = images.length;  

  const handlePrev = () => {  
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));  
  };  

  const handleNext = () => {  
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));  
  };  

  return (  
    <Box className="relative w-full" id="gallery">  
      <Box className="relative h-56 overflow-hidden rounded-lg md:h-96">  
        {images.map((src, index) => (  
          <Box  
            key={index}  
            className={`transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}  
          >  
            <Image  
              src={src}  
              alt={`Image ${index + 1}`}  
              className="max-w-full h-auto"  
            />  
          </Box>  
        ))}  
      </Box>  
      <IconButton  
        aria-label="Previous"  
        icon={<ChevronLeftIcon />}  
        onClick={handlePrev}  
        position="absolute"  
        top="50%"  
        left="0"  
        transform="translateY(-50%)"  
        zIndex="30"  
        bg="whiteAlpha.300"  
        _hover={{ bg: 'whiteAlpha.500' }}  
        _focus={{ boxShadow: 'outline' }}  
      />  
      <IconButton  
        aria-label="Next"  
        icon={<ChevronRightIcon />}  
        onClick={handleNext}  
        position="absolute"  
        top="50%"  
        right="0"  
        transform="translateY(-50%)"  
        zIndex="30"  
        bg="whiteAlpha.300"  
        _hover={{ bg: 'whiteAlpha.500' }}  
        _focus={{ boxShadow: 'outline' }}  
      />  
    </Box>  
  );  
};  

export default Carousel;