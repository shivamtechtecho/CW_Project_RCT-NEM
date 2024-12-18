import { useContext } from "react";
import { Hotels } from "./Hotels";
import { ThemeContext } from "../context/themeContext";    
import "../themeCss/dark.css";  
import "../themeCss/light.css";  
import { LandingPage } from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AbooutUs } from "../RoutePages/Aboutus";
import { Advature } from "../RoutePages/Advanture";
import { ContactUs } from "../RoutePages/ContactUs";
import { HimachalPradesh } from "../RoutePages/HimachalPradesh";
import { JammuKashmir } from "../RoutePages/JammuKashmir";
import { Rafting } from "../RoutePages/Rafting";
import { Trekking } from "../RoutePages/trekking";
import { Videos } from "../RoutePages/Videos";
import { WinterExpedition } from "../RoutePages/WinterExp";
import RegistrationForm from "./Form";

export const ThemedContent = () => {  
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the context to get theme and toggle function  
  
    return (  
      <div>
      <div className={theme}>  
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/aboutUs"  element={<AbooutUs/>}/>
          <Route path="/adventure" element={<Advature/>}/>
          <Route path="/Contact" element={<ContactUs/>}/>
          <Route path="/HimachalPradesh" element={<HimachalPradesh/>}/>
          <Route path="/JammuKashmir"  element={<JammuKashmir/>}/>
          <Route path="/Rafting" element={<Rafting/>}/>
          <Route path="/Trekking" element={<Trekking/>}/>
          <Route path="/Videos" element={<Videos/>}/>
          <Route path="/WinterExpedition"  element={<WinterExpedition/>}/>
          <Route path="/adventure" element={<Advature/>}/>
          <Route path="/registration" element={<RegistrationForm/>}/>
        </Routes>
        {/* <Hotels/>  
        <LandingPage/>  */}
      </div> 
      <Link to="/hotels">NAvigate</Link>
      </div>
    );  
  };  