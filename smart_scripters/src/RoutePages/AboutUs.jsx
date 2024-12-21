import { useContext } from "react";
import Footer from "../components/Footer"  
import { Navbar } from "../components/Navbar"  
import { ThemeContext } from "../context/themeContext";

export const AbooutUs = () => {  

    let {theme} = useContext(ThemeContext)

    const containerStyle = {  
        display: 'flex',  
        justifyContent: 'center',  
        alignItems: 'center',  
        height: '140vh',  
        backgroundImage: theme === "dark"  
            ? "url()"  
            : "url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",  // Different image for light theme  
        backgroundSize: 'cover',  
        backgroundAttachment: 'fixed',
        animation: 'fadeIn 1s',  
    };  

    return ( 
        <div>
        <div style={containerStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '00px', textAlign: 'center',marginTop:"20vh"}}>  
            <Navbar />  
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>  
                <h1>About Trezen</h1>  
                <p style={{ fontSize: '18px', lineHeight: '1.6' }}>  
                    Welcome to Trezen, your ultimate travel companion! At Trezen, we believe that every journey starts with a dream and ends with unforgettable experiences. Our mission is to make travel accessible and enjoyable for everyone, providing you with the best resources, tips, and packages tailored to your unique preferences. Founded in [insert founding year], Trezen began with a passion for exploring the world and a desire to share that passion with others. What started as a small group of travel enthusiasts has grown into a dedicated company with a team of experts committed to helping you create lasting memories with every trip you take.   
                    At Trezen, we understand that travel is not just about the destinations you visit; it’s about the experiences you create along the way. Our approach focuses on the transformative power of travel—connecting you with local cultures, people, and environments. Our diverse team of travel specialists brings a wealth of knowledge and experience, ensuring you have access to personalized itineraries and expert guidance to make your journey as smooth as possible.   
                    Whether it’s rafting down the Amazon River, hiking the trails of the Rockies, or savoring traditional cuisine in hidden gems, our team is dedicated to curating the perfect adventure for you. Are you ready to redefine your travel experiences? Join the Trezen community today and let’s explore the world together!  
                </p>  
                <h2>Why Choose Us?</h2>  
                <ul style={{ textAlign: 'left', margin: '20px auto', paddingLeft: '20px' }}>  
                    <li><strong>Expert Guidance:</strong> Our team has traveled the world and is dedicated to sharing their insights with you.</li>  
                    <li><strong>Personalized Experiences:</strong> We cater to different travel styles, ensuring you find the perfect adventure that fits your dreams and budget.</li>  
                    <li><strong>24/7 Support:</strong> Our customer service team is available around the clock to assist you with any questions or concerns.</li>  
                    <li><strong>Sustainable Travel:</strong> We are committed to promoting responsible tourism practices that protect the environment and support local communities.</li>  
                </ul>  
                <h2>Join the Trezen Community</h2>  
                <p>  
                    Are you ready to explore with us? Follow Trezen on [insert social media links] for the latest travel tips, destination highlights, and exclusive offers!  
                </p>  
            </div>  
             
        </div>  
        
        </div> 
        <Footer /> 
        </div>
    )  
}