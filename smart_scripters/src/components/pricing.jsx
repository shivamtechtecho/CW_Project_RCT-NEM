import { useContext } from "react";  
import Footer from "../components/Footer";  
import { Navbar } from "../components/Navbar";  
import { ThemeContext } from "../context/themeContext";  


const fadeInAnimation = {  
    animation: 'fadeIn 1s'  
};  

export const Pricing = () => {  
    let { theme } = useContext(ThemeContext);  

    const containerStyle = {  
        display: 'flex',  
        justifyContent: 'center',  
        alignItems: 'center',  
        height: '150vh',  
        backgroundImage: theme === "dark"  
            ? "url()"  
            : "url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",  
        backgroundSize: 'cover',  
        backgroundAttachment: 'fixed',  
        ...fadeInAnimation  
    };  

    const pricingCardStyle = {  
        background: theme === "dark" ? "#333" : "#fff",  
        color: theme === "dark" ? "#fff" : "#000",  
        borderRadius: '10px',  
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  
        padding: '20px',  
        margin: '20px',  
        textAlign: 'center',  
        transition: 'transform 0.2s, background 0.2s', // Added background transition  
    };  

    const cardHoverStyle = {  
        ...pricingCardStyle,  
        transform: 'scale(1.05)',  
        background: theme === "dark" ? "#444" : "#f0f0f0", // Change background on hover  
    };  

    return (   
        <div>  
            <div style={containerStyle}>  
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0', textAlign: 'center', marginTop: "20vh" }}>  
                    <Navbar />  
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>  
                        <h1>Pricing Plans</h1>  
                        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>  
                            At Trezen, we offer a variety of pricing plans to suit your travel needs. Whether you are a solo traveler, a family, or part of a group, we have the right package for you. Our goal is to provide you with the best value for your adventures, ensuring that you can explore the world without breaking the bank.  
                        </p>  

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>  
                            {[  
                                { title: "Basic Plan", description: "Perfect for solo travelers.", price: "$299", features: ["3 Destinations", "Expert Guidance", "24/7 Support"] },  
                                { title: "Family Plan", description: "Ideal for families and groups.", price: "$499", features: ["5 Destinations", "Personalized Itinerary", "24/7 Support"] },  
                                { title: "Adventure Plan", description: "For the thrill-seekers.", price: "$699", features: ["Unlimited Destinations", "Customizable Adventures", "24/7 Support"] },  
                            ].map(plan => (  
                                <div style={pricingCardStyle}   
                                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}   
                                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>  
                                    <h2>{plan.title}</h2>  
                                    <p>{plan.description}</p>  
                                    <p><strong>{plan.price}</strong> per person</p>  
                                    <ul style={{ listStyleType: 'none', padding: 0 }}>  
                                        {plan.features.map(feature => <li key={feature}>{feature}</li>)}  
                                    </ul>  
                                </div>  
                            ))}  
                        </div>  

                        <h2>Why Choose Our Pricing Plans?</h2>  
                        <p>Our plans are designed to provide flexibility and value, allowing you to choose the best option that fits your travel style and budget. With Trezen, you can travel confidently, knowing you have support every step of the way.</p>  
                    </div>  
                </div>  
            </div>   
            <Footer />   
        </div>  
    );  
}  

