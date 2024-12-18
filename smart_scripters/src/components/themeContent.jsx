import { useContext } from "react";
import { Hotels } from "./Hotels";
import { ThemeContext } from "../context/themeContext";    
import "../themeCss/dark.css";  
import "../themeCss/light.css";  

export const ThemedContent = () => {  
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the context to get theme and toggle function  
  
    return (  
      <div className={theme}>  
        
        <Hotels/>  
      </div>  
    );  
  };  