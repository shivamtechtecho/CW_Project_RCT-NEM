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
import { HimachalPradesh } from "../RoutePages/HimachalPradesh";
import { JammuKashmir } from "../RoutePages/JammuKashmir";
import { Rafting } from "../RoutePages/Rafting";
import { Trekking } from "../RoutePages/trekking";
import { Videos } from "../RoutePages/Videos";
import { WinterExpedition } from "../RoutePages/WinterExp";
import RegistrationForm from "./Form";
import { Shimla } from "../RoutePages/shimla";
import { Kullu } from "../RoutePages/kullu";
import { Spiti } from "../RoutePages/spiti";
import { Lahaul } from "../RoutePages/lahaul";
import { LahaulSpiti } from "../RoutePages/lahaulspiti";
import { Mandi } from "../RoutePages/mandi";
import { ContactPage } from "./ContactPage";

export const ThemedContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use the context to get theme and toggle function

  return (
    <div>
      <div className={theme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/aboutUs" element={<AbooutUs />} />
          <Route path="/adventure" element={<Advature />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/HimachalPradesh" element={<HimachalPradesh />} />
          <Route path="/JammuKashmir" element={<JammuKashmir />} />
          <Route path="/Rafting" element={<Rafting />} />
          <Route path="/Trekking" element={<Trekking />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/WinterExpedition" element={<WinterExpedition />} />
          <Route path="/adventure" element={<Advature />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/Shimla" element={<Shimla />} />
          <Route path="/Kullu" element={<Kullu />} />
          <Route path="/Spiti" element={<Spiti />} />
          <Route path="/Lahaul" element={<Lahaul />} />
          <Route path="/LahaulSpiti" element={<LahaulSpiti />} />
          <Route path="/Mandi" element={<Mandi />} />
          <Route path="/Videos" element={<Videos />} />
        </Routes>
        {/* <Hotels/>  
        <LandingPage/>  */}
      </div>
    </div>
  );
};
