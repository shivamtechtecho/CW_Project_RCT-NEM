import { createContext, useState } from "react";  

export const ThemeContext = createContext();  

export const ThemeProvider = ({ children }) => {  
    const [theme, setTheme] = useState("light");  

    const toggleTheme = () => {  
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));  
    };  

    const [sign,setSign] = useState(false)

    
    function handleSign(){
        setSign(!sign)
    }

    return (  
        <ThemeContext.Provider value={{ theme, toggleTheme,sign,handleSign }}>  
            {children}  
        </ThemeContext.Provider>  
    );  
};