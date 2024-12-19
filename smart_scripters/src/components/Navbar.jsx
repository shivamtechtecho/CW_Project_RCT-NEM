import {  
  Box,  
  Flex,  
  Image,  
  Button,    
  useDisclosure,  
  Menu,  
  MenuButton,  
  MenuList,  
  MenuItem,  
  MenuDivider  
} from '@chakra-ui/react';   
import { Link } from 'react-router-dom';

import { HamburgerIcon } from '@chakra-ui/icons';  
import { useContext } from 'react';  
import { ThemeContext } from '../context/themeContext';  

export const Navbar = () => {  
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const { theme,toggleTheme } = useContext(ThemeContext);  

  return (  
      <Box marginLeft={"20px"} marginRight={"20px"} marginbottom={"20px"} borderRadius={"50px"}  borderBottomWidth="1px" borderColor="gray.200" dark={{ bg: 'gray.900' }}>  
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
              >  
                  <Link to="/"><Button variant="link" colorScheme="blue" isActive>  
                      Home  
                  </Button></Link>
                  <Link to="/aboutUs"><Button variant="link" colorScheme="gray">  
                      About  
                  </Button></Link>  
                  <Menu>  
                      <MenuButton   
                          as={Button}   
                          variant="link"   
                          colorScheme="gray"  
                      >  
                          Advanture  
                      </MenuButton>  
                      <MenuList bg={theme=="dark"?"black":"white"} >  
                          <Link to="/Trekking"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Trekking!')}>Trekking</MenuItem></Link>
                          <Link to="/Rafting"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Rafting!')}>Rafting</MenuItem></Link>  
                          <Link to="/WinterExpedition"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Winter Exp!')}>Winter Expedition</MenuItem></Link>
                          <MenuDivider />  
                          <Link to="/hotels"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Other!')}>Other</MenuItem></Link>
                      </MenuList>  
                  </Menu>  
                  <Button variant="link" colorScheme="gray">  
                      Pricing  
                  </Button>  

                  {/* Dropdown for Travelling */}  
                  <Menu>  
                      <MenuButton   
                          as={Button}   
                          variant="link"   
                          colorScheme="gray"  
                      >  
                          Travelling  
                      </MenuButton>  
                      <MenuList bg={theme=="dark"?"black":"white"} >  
                          <Link to="/"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Kullu!')}>Kullu</MenuItem>  </Link>
                          <Link to="/"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Manali!')}>Manali</MenuItem></Link>  
                          <Link to="/"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Shimla!')}>Shimla</MenuItem></Link>  
                          <MenuDivider />  
                          <Link to="/"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Other!')}>Other</MenuItem></Link>
                      </MenuList>  
                  </Menu>  

                  <Button variant="link" colorScheme="gray">  
                      Contact  
                  </Button>   
                  <Link to="/registration">SIGN-UP</Link>
              </Flex>  
              <button onClick={toggleTheme}>💡⚫</button>  
          </Flex>  
      </Box>  
  );  
};