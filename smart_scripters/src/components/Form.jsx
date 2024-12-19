import React, { useContext } from 'react';  
import './Form.css'
import {   
  Box,   
  FormControl,   
  FormLabel,   
  Input,   
  Checkbox,   
  Button,   
  Stack,   
  Text,   
  Link,   
  useCheckboxGroup   
} from '@chakra-ui/react';  
import { ThemeContext } from '../context/themeContext';  

const RegistrationForm = () => {  
  const { value, setValue } = useCheckboxGroup({  
    defaultValue: [],  
  });  
  // const { theme, toggleTheme } = useContext(ThemeContext);  
  return (  
    <div style={{backgroundColor:"blue",margin:"0px",color:"black",height:"100%",padding:"100px"}}>  
      <Box maxW="sm" mx="auto" p={10}>  
        <form style={{backgroundColor:"white",padding:"20px",borderRadius:"20px"}}>  
          <Stack spacing={5}>  
            <FormControl id="email" isRequired>  
              <FormLabel>Your email</FormLabel>  
              <Input  
                type="email"  
                placeholder="name@flowbite.com"  
                required  
              />  
            </FormControl>  

            <FormControl id="password" isRequired>  
              <FormLabel>Your password</FormLabel>  
              <Input style={{color:"gray"}}
                placeholder="^%/<$*****" 
                type="password"  
                required  
              />  
            </FormControl>  

            <FormControl id="repeat-password" isRequired>  
              <FormLabel>Repeat password</FormLabel>  
              <Input style={{color:"gray"}}
                placeholder="^%/<$*****" 
                type="password"  
                required  
              />  
            </FormControl>  

            <FormControl id="terms" isRequired>  
              <Checkbox value="terms">  
                I agree with the <Link color="blue.500" href="#" isExternal>terms and conditions</Link>  
              </Checkbox>  
            </FormControl>  

            <Button   
              type="submit"   
              colorScheme="blue"   
              width="full"  // Updated here  
            >  
              Register new account  
            </Button>  
          </Stack>  
        </form>   
      </Box>  
    </div>  
  );  
};  

export default RegistrationForm;