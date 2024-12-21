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
  const { theme,toggleTheme,sign,handleSign } = useContext(ThemeContext);  



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
                  <Link to="/"><Image src="https://cdn.leonardo.ai/users/9e27d29d-e642-4640-a4d3-36075e7a5af5/generations/2065b290-d9b4-4dd2-b5e2-5dc4140453fe/variations/Default_Design_a_modern_elegant_logo_for_Trezen_featuring_bold_2_2065b290-d9b4-4dd2-b5e2-5dc4140453fe_0.png" alt="Trezen" h={16} w={28} /></Link>  
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
                  <Link to={!sign?"/registration":"/aboutUs"}><Button onClick={()=>!sign?alert("Please Sign-IN!!!"):""} variant="link" colorScheme="black">  
                      About  
                  </Button></Link>  
                  <Link to={!sign?"/registration":"/hotels"}><Button onClick={()=>!sign?alert("Please Sign-IN!!!"):""} variant="link" colorScheme="black">  
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
                          <Link to={!sign?"/registration":"/Trekking"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"} >Trekking</MenuItem></Link>
                          <Link to={!sign?"/registration":"/Rafting"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"} >Rafting</MenuItem></Link>  
                          <Link to={!sign?"/registration":"/WinterExpedition"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"} >Winter Expedition</MenuItem></Link>
                          <MenuDivider />  
                          <Link to="/hotels"><MenuItem onClick={()=>sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"} >Other</MenuItem></Link>
                      </MenuList>  
                  </Menu>  
                  <Link to={!sign?"/registration":"/Pricing"}><Button onClick={()=>!sign?alert("Please Sign-IN!!!"):""} variant="link" colorScheme="black">  
                      Pricing  
                  </Button></Link>

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
                          <Link to={!sign?"/registration":"/Kullu"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Kullu</MenuItem>  </Link>
                          <Link to={!sign?"/registration":"/Manali"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Manali</MenuItem></Link>  
                          <Link to={!sign?"/registration":"/Shimla"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Shimla</MenuItem></Link>
                          <Link to={!sign?"/registration":"/Spiti"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Spiti</MenuItem>  </Link>
                          <Link to={!sign?"/registration":"/Lahaul"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Lahaul</MenuItem></Link>  
                          <Link to={!sign?"/registration":"/LahaulSpiti"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>LahaulSpiti</MenuItem></Link>  
                          <Link to={!sign?"/registration":"/JammuKashmir"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Jammu Kashmir</MenuItem>  </Link>
                          <Link to={!sign?"/registration":"/HimachalPradesh"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Himachal Pradesh</MenuItem></Link>  
                          <Link to={!sign?"/registration":"/Mandi"}><MenuItem onClick={()=>!sign?alert("Please Sign-IN!!!"):""} bg={theme=="dark"?"black":"white"}>Mandi</MenuItem></Link>
                          <MenuDivider />  
                          <Link to="/"><MenuItem bg={theme=="dark"?"black":"white"} onClick={() => alert('Clicked Other!')}>Other</MenuItem></Link>
                      </MenuList>  
                  </Menu>  

                  <Link to={!sign?"/registration":"/Contact"}><Button onClick={()=>!sign?alert("Please Sign-IN!!!"):""} variant="link" colorScheme="black">  
                      Contact
                  </Button></Link>  
                  <Link to={!sign?"/registration":"/"} style={{color:"white",backgroundColor:"darkgray",padding:"5px 10px",borderRadius:"20px",border:"0"}}><button onClick={handleSign}>{!sign?"LOGIN":"Log-OUT"}</button></Link>
              </Flex>  
              <button onClick={toggleTheme}>💡⚫</button>  
          </Flex>  
      </Box>  
  );  
};