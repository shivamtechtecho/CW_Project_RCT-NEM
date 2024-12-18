import {  
    Box,  
    Flex,  
    Image,  
    Text,  
    Button,    
    useDisclosure,  
  } from '@chakra-ui/react'; 
  
  import { HamburgerIcon } from '@chakra-ui/icons';  
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
  
  export const Navbar = () => {  
    const { isOpen, onOpen, onClose } = useDisclosure();  
   
    let {toggleTheme} =useContext(ThemeContext)

    return (  
      <Box  borderBottomWidth="1px" borderColor="gray.200" dark={{ bg: 'gray.900' }}>  
        <Flex  
          maxW="screen.xl"  
          mx="auto"  
          p={4}  
          align="center"  
          justify="space-between"  
          wrap="wrap"  
        >  
          <Flex align="center">  
            <Image src="https://cdn.leonardo.ai/users/9e27d29d-e642-4640-a4d3-36075e7a5af5/generations/2065b290-d9b4-4dd2-b5e2-5dc4140453fe/variations/Default_Design_a_modern_elegant_logo_for_Trezen_featuring_bold_2_2065b290-d9b4-4dd2-b5e2-5dc4140453fe_0.png" alt="Trezen" h="24" w={28} />   
          </Flex>  
          <Button  
            aria-label="Open main menu"  
            onClick={isOpen ? onClose : onOpen}  
            display={{ md: 'none' }}  
          >  
            <HamburgerIcon boxSize={5} />  
          </Button>  
          <Flex  
            display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}  
            flexDirection={{ base: 'column', md: 'row' }}  
            alignItems="center"  
            mt={{ base: 4, md: 0 }}  
            borderColor="pink"  
            borderWidth="1px"  
            borderRadius="lg"  
            bg={{ base: 'gray.50', md: 'transparent' }}  
            p={4}  
            gap={4}
            md={{ display: 'flex', bg: 'white' }}  
          >  
            <Button variant="link" colorScheme="blue" isActive>  
              Home  
            </Button>  
            <Button variant="link" colorScheme="gray">  
              About  
            </Button>  
            <Button variant="link" colorScheme="gray">  
              Services  
            </Button>  
            <Button variant="link" colorScheme="gray">  
              Pricing  
            </Button>  
            <Button variant="link" colorScheme="gray">  
              Contact  
            </Button> 
          </Flex>
          <button onClick={toggleTheme}>💡⚫</button>  
        </Flex>  
      </Box>  
    );  
  };  
