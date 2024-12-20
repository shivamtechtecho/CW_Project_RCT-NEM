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
      <Box px={12} position={'fixed'} width={"100%"} left={"0px"} top={"0px"} bg={theme=="dark"?"black":"gray"} zIndex={"1000"}  borderBottomWidth="1px" borderColor="gray.200" dark={{ bg: 'gray.900' }}>  
          <Flex  
              maxW="screen.xl"  
              mx="auto"  
              p={0}  
              align="center"  
              justify="space-between"  
              wrap="wrap"  
          >  
              <Flex align="center">  
                  <Image src="https://cdn.leonardo.ai/users/9e27d29d-e642-4640-a4d3-36075e7a5af5/generations/2065b290-d9b4-4dd2-b5e2-5dc4140453fe/variations/Default_Design_a_modern_elegant_logo_for_Trezen_featuring_bold_2_2065b290-d9b4-4dd2-b5e2-5dc4140453fe_0.png" alt="Trezen" h={16} w={28} />   
              </Flex>  
              <Button  
                  aria-label="Open main menu"  
                  onClick={isOpen ? onClose : onOpen}  
                  display={{ md: 'none' }}  
              >  
                  <HamburgerIcon boxSize={4} />  
              </Button>  
              <Flex  
                  display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}  
                  flexDirection={{ base: 'column', md: 'row' }}  
                  alignItems="center"  
                  mt={{ base: 0, md: 0 }}  
                  borderColor="gray"  
                  borderWidth="1px"  
                  borderRadius="lg"  
                  bg={{ base: 'transparent',  }}  
                  p={2}
                  color={theme=="dark"?"white":"black"}
                  gap={16}  
              >  
                  <Link to="/"><Button variant="link" colorScheme="black" isActive>  
                      Home  
                  </Button></Link>
                  <Link to="/aboutUs"><Button variant="link" colorScheme="black">  
                      About  
                  </Button></Link>  
                  <Link to="/hotels"><Button variant="link" colorScheme="black">  
                      Hotel
                  </Button></Link>
                  <Menu>  
                      <MenuButton   
                          as={Button}   
                          variant="link"   
                          colorScheme="black"  
                      >  
                          Advanture  
                      </MenuButton>  
                      <MenuList bg={theme=="dark"?"black":"white"} >  
                          <Link to="/Trekking"><MenuItem bg={theme=="dark"?"black":"white"} >Trekking</MenuItem></Link>
                          <Link to="/Rafting"><MenuItem bg={theme=="dark"?"black":"white"} >Rafting</MenuItem></Link>  
                          <Link to="/WinterExpedition"><MenuItem bg={theme=="dark"?"black":"white"} >Winter Expedition</MenuItem></Link>
                          <MenuDivider />  
                          <Link to="/hotels"><MenuItem bg={theme=="dark"?"black":"white"} >Other</MenuItem></Link>
                      </MenuList>  
                  </Menu>  
                  <Button variant="link" colorScheme="black">  
                      Pricing  
                  </Button>  

                  {/* Dropdown for Travelling */}  
                  <Menu>  
                      <MenuButton   
                          as={Button}   
                          variant="link"   
                          colorScheme="black"  
                      >  
                          Travelling  
                      </MenuButton>  
                      <MenuList bg={theme=="dark"?"black":"white"} >  
                          <Link to="/Kullu"><MenuItem bg={theme=="dark"?"black":"white"}>Kullu</MenuItem>  </Link>
                          <Link to="/Manali"><MenuItem bg={theme=="dark"?"black":"white"}>Manali</MenuItem></Link>  
                          <Link to="/Shimla"><MenuItem bg={theme=="dark"?"black":"white"}>Shimla</MenuItem></Link>
                          <Link to="/Spiti"><MenuItem bg={theme=="dark"?"black":"white"}>Spiti</MenuItem>  </Link>
                          <Link to="/Lahaul"><MenuItem bg={theme=="dark"?"black":"white"}>Lahaul</MenuItem></Link>  
                          <Link to="/LahaulSpiti"><MenuItem bg={theme=="dark"?"black":"white"}>LahaulSpiti</MenuItem></Link>  
                          <Link to="/JammuKashmir"><MenuItem bg={theme=="dark"?"black":"white"}>Jammu Kashmir</MenuItem>  </Link>
                          <Link to="/HimachalPradesh"><MenuItem bg={theme=="dark"?"black":"white"}>Himachal Pradesh</MenuItem></Link>  
                          <Link to="/Mandi"><MenuItem bg={theme=="dark"?"black":"white"}>Mandi</MenuItem></Link>
                          <MenuDivider />  
                          <Link to="/"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Other!')}>Other</MenuItem></Link>
                      </MenuList>  
                  </Menu>  

                  <Button variant="link" colorScheme="black">  
                      Contact  
                  </Button>   
                  <Link to="/registration" style={{color:"white"}}>SIGN-UP</Link>
              </Flex>  
              <button onClick={toggleTheme}>💡⚫</button>  
          </Flex>  
      </Box>  
  );  
};