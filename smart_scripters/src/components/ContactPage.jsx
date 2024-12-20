import React, { useContext } from 'react';  
import { Navbar } from './Navbar';
import Footer from './Footer';
import { ThemeContext } from '../context/themeContext';

export const ContactPage = () => {  
    const { theme, toggleTheme } = useContext(ThemeContext);  
    console.log(theme);
    
    const handleSubmit = (event) => {  
        event.preventDefault();  
        // Handle form submission logic  
        alert('Form submitted!');  

    };  

    const containerStyle = {  
        display: 'flex',  
        justifyContent: 'center',  
        alignItems: 'center',  
        height: '100vh',  
        backgroundImage: theme === "dark"  
            ? "url(https://images.pexels.com/photos/9486838/pexels-photo-9486838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"  
            : "url(https://images.pexels.com/photos/3869370/pexels-photo-3869370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",  // Different image for light theme  
        backgroundSize: 'cover',  
        backgroundAttachment: 'fixed',  
        animation: 'fadeIn 1s',  
    };  

    const formStyle = {  
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  
        padding: '20px',  
        borderRadius: '10px',  
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  
        width: '300px',  
        textAlign: 'center',  
    };  

    const inputStyle = {  
        marginBottom: '15px',  
        padding: '10px',  
        border: '1px solid #ccc',  
        borderRadius: '5px',  
        transition: 'border-color 0.3s',  
    };  

    const buttonStyle = {  
        padding: '10px',  
        backgroundColor: '#83c5be',  
        color: 'white',  
        border: 'none',  
        borderRadius: '5px',  
        cursor: 'pointer',  
        transition: 'background-color 0.3s',  
    };  

    const buttonHoverStyle = {  
        backgroundColor: '#6d9f90',  
    };  

    const keyframes = `  
        @keyframes fadeIn {  
            from { opacity: 0; }  
            to { opacity: 1; }  
        }  
    `;  

    return (  
        <div>
        <Navbar/>
        <div style={containerStyle}>  
            <style>{keyframes}</style>  
            <div style={formStyle}>  
                <h2 style={{ marginBottom: '20px' }}>Contact Us</h2>  
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>  
                    <input   
                        type="text"   
                        placeholder="Your Name"   
                        required   
                        style={inputStyle}   
                        onFocus={(e) => e.target.style.borderColor = '#83c5be'}  
                        onBlur={(e) => e.target.style.borderColor = '#ccc'}  
                    />  
                    <input   
                        type="email"   
                        placeholder="Your Email"   
                        required   
                        style={inputStyle}   
                        onFocus={(e) => e.target.style.borderColor = '#83c5be'}  
                        onBlur={(e) => e.target.style.borderColor = '#ccc'}  
                    />  
                    <textarea   
                        placeholder="Your Message"   
                        required   
                        style={{ ...inputStyle, height: '100px' }}   
                        onFocus={(e) => e.target.style.borderColor = '#83c5be'}  
                        onBlur={(e) => e.target.style.borderColor = '#ccc'}  
                    />  
                    <button   
                        type="submit"   
                        style={buttonStyle}   
                        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}  
                        onMouseOut={(e) => e.target.style.backgroundColor = '#83c5be'}  
                    >  
                        Submit  
                    </button>  
                </form>  
            </div>  
        </div>  
        <Footer/>
        </div>
    );  
};  

// export default ContactPage;