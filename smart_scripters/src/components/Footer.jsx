import {  
    Box,  
    Container,  
    Grid,  
    GridItem,  
    Heading,  
    UnorderedList,  
    ListItem,  
    Link,  
    Icon,  
  } from '@chakra-ui/react';  
  import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
  
  const Footer = () => {  
    return (  
      <Box bg="blackAlpha.100" style={{width:"100%"}} dark={{ bg: 'gray.900' }} py={6}>  
        <Container maxW="container.xl">  
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={8}>  
            <GridItem>  
              <Heading size="sm" mb={6} textTransform="uppercase" color="gray.900" dark={{ color: 'white' }}>  
                Company  
              </Heading>  
              <UnorderedList spacing={4} color="gray.500" dark={{ color: 'gray.400' }} fontWeight="medium">  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>About</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Careers</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Brand Center</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Blog</Link>  
                </ListItem>  
              </UnorderedList>  
            </GridItem>  
            <GridItem>  
              <Heading size="sm" mb={6} textTransform="uppercase" color="gray.900" dark={{ color: 'white' }}>  
                Help Center  
              </Heading>  
              <UnorderedList spacing={4} color="gray.500" dark={{ color: 'gray.400' }} fontWeight="medium">  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Discord Server</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Twitter</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Facebook</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Contact Us</Link>  
                </ListItem>  
              </UnorderedList>  
            </GridItem>  
            <GridItem>  
              <Heading size="sm" mb={6} textTransform="uppercase" color="gray.900" dark={{ color: 'white' }}>  
                Legal  
              </Heading>  
              <UnorderedList spacing={4} color="gray.500" dark={{ color: 'gray.400' }} fontWeight="medium">  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Privacy Policy</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Licensing</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Terms & Conditions</Link>  
                </ListItem>  
              </UnorderedList>  
            </GridItem>  
            <GridItem>  
              <Heading size="sm" mb={6} textTransform="uppercase" color="gray.900" dark={{ color: 'white' }}>  
                Download  
              </Heading>  
              <UnorderedList spacing={4} color="gray.500" dark={{ color: 'gray.400' }} fontWeight="medium">  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>App Store</Link>  
                </ListItem>  
                <ListItem>  
                  <Link href="#" _hover={{ textDecoration: 'underline' }}>Google Play</Link>  
                </ListItem>  
              </UnorderedList>  
            </GridItem>  
          </Grid>  
          <Box mt={6}>  
            <Link href="#" color="gray.400" _hover={{ color: 'gray.900' }} mr={4}>  
              <Icon as={FaTwitter} boxSize={4} aria-label="Twitter page" />  
            </Link>  
            <Link href="#" color="gray.400" _hover={{ color: 'gray.900' }} mr={4}>  
              <Icon as={FaGithub} boxSize={4} aria-label="GitHub account" />  
            </Link>  
            <Link href="#" color="gray.400" _hover={{ color: 'gray.900' }}>  
              <Icon as={FaDribbble} boxSize={4} aria-label="Dribbble account" />  
            </Link>  
          </Box>  
        </Container>  
      </Box>  
    );  
  };  
  
  export default Footer;