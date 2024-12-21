import React, { useContext, useState } from 'react';  
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
import axios from 'axios';
import { Navbar } from './Navbar';
import Footer from './Footer';

const RegistrationForm = () => {  
  
  let {theme} = useContext(ThemeContext)

  let [data,setData] = useState({email:"",password:"",repeatedPassword:""})

  function handleChange(e){
    let {name,value} = e.target
    setData({...data,[name]:value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    await axios.post("https://cw-project-5291f-default-rtdb.firebaseio.com/register.json",data)
    setData({email:"",password:"",repeatedPassword:""})
  }

  const containerStyle = {  
    display: 'flex',  
    justifyContent: 'center',  
    alignItems: 'center',  
    height: '140vh',  
    backgroundImage: theme === "dark"  
        ? "url()"  
        : "url(https://cdn.leonardo.ai/users/9e27d29d-e642-4640-a4d3-36075e7a5af5/generations/2b7dd0cf-cbc7-4557-a770-c0a4b68c22dd/Leonardo_Phoenix_09_Create_a_highly_realistic_and_detailed_ful_3.jpg)",  // Different image for light theme  
    backgroundSize: 'cover',  
    backgroundAttachment: 'fixed',
    animation: 'fadeIn 1s',  
};  

  // const { theme, toggleTheme } = useContext(ThemeContext);  
  return (  
    <div>
      <Navbar/>
    <div style={containerStyle}>  
      <Box maxW="sm" mx="auto" p={10}>  
        <form onSubmit={handleSubmit} style={{backgroundColor:"white",padding:"20px",borderRadius:"20px"}}>  
          <Stack spacing={5}>  
            <FormControl id="email" isRequired>  
              <FormLabel style={{color:"black"}}>Your email</FormLabel>  
              <Input  
                type="email"
                name='email'
                value={data.email}  
                placeholder="name@flowbite.com"
                onChange={handleChange}  
                required  
              />  
            </FormControl>  

            <FormControl id="password" isRequired>  
              <FormLabel style={{color:"black"}}>Your password</FormLabel>  
              <Input style={{color:"gray"}}
                placeholder="^%/<$*****" 
                value={data.password}
                name="password"
                type="password" 
                onChange={handleChange}   
                required  
              />  
            </FormControl>  

            <FormControl id="repeat-password" isRequired>  
              <FormLabel style={{color:"black"}}>Repeat password</FormLabel>  
              <Input style={{color:"gray"}}
                placeholder="^%/<$*****" 
                type="password"  
                name='repeatedPassword'
                onChange={handleChange}  
                value={data.repeatedPassword}
                required  
              />  
            </FormControl>  

            <FormControl id="terms" isRequired>  
              <Checkbox value="terms" style={{color:"black"}}>  
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
    <Footer/>
    </div> 
  );  
};  

export default RegistrationForm;