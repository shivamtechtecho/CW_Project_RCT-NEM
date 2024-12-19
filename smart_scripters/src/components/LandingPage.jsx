import React, { useContext } from "react";
import "./LandingPage.css";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { ThemeContext } from "../context/themeContext";

export const LandingPage = () => {

  let {theme,toggleTheme} = useContext(ThemeContext)
  // console.log("i am working" ,theme);
  

  return (
    <>
    <Navbar/>
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section" style={{color:theme==="dark"?"darkgreen":"darkblue"}}>
        <h1 className="main-title">THE HIMALAYAN RAMBLE</h1>
        <p className="subtitle">
          Stay and Travel to the only place that is heaven in this world
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section" style={{backgroundColor:theme==="dark"?"black":"white",color:theme==="dark"?"white":"black"}}>
        <div className="image-text-container">
          <img
            src="https://media.istockphoto.com/id/1682183202/photo/parvati-valley-and-himalaya-mountains-india.jpg?s=1024x1024&w=is&k=20&c=LhwnySmO_ltZ8WBL8NgV7XX71bmXbXHnB8INQlJUSnk="
            alt="Himalayan Travel"
            className="content-image"
          />
          <div className="content-text">
            <p>
              <a href="#" className="link-title">
                The Himalayan Ramble
              </a>{" "}
              is a travel company based in Himachal Pradesh, India. We believe
              that travelling should be an enjoyable and hassle-free experience,
              and our goal is to make your trip as smooth and comfortable as
              possible. With our years of experience in the travel industry, we
              are confident that we can provide you with the best possible
              service. So whether you’re planning a weekend getaway or a longer
              vacation, don’t hesitate to contact us – we would be more than
              happy to help you plan your perfect trip!
            </p>
            <p>
              We cater to all types of travel needs and book cheap rail and air
              tickets. We also have customized travel packages according to your
              needs...
            </p>
          </div>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="destination-section" style={{backgroundColor:theme==="dark"?"black":"white",color:theme==="dark"?"darkred":"black"}}>
        <div className="destination-card" >
          <img
            src="https://media.istockphoto.com/id/1318300669/photo/latest-views-of-snowfall-in-shimla.jpg?s=612x612&w=0&k=20&c=wZmPelTzmwwhIPuC0qtVn4BW1lVUQXAeY2Cqx4cdcwc="
            alt="Shimla"
            className="card-image"
          />
          <h3 style={{color:theme==="dark"?"darkred":"black"}}>SHIMLA</h3>
        </div>
        <div className="destination-card">
          <img
            src="https://t4.ftcdn.net/jpg/03/72/75/73/360_F_372757378_aOASkKDmkQiakQnePuxOZSyLaRaghSW8.jpg"
            alt="Lahaul"
            className="card-image"
          />
          <h3 style={{color:theme==="dark"?"darkred":"black"}}>LAHOUL</h3>
        </div>
        <div className="destination-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1661878309257-f4343940ce4d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Spiti"
            className="card-image"
          />
          <h3 style={{color:theme==="dark"?"darkred":"black"}}>SPITI</h3>
        </div>
        <div className="destination-card">
          <img
            src="https://media.istockphoto.com/id/1682328008/photo/mall-main-street-in-manali-india.jpg?s=1024x1024&w=is&k=20&c=FRJfejvHfdU6Q_sJuYFAVnH-K0xXYIy1pEu96F5XM9c="
            alt="Kullu Manali"
            className="card-image"
          />
          <h3 style={{color:theme==="dark"?"darkred":"black"}}>KULLU MANALI</h3>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

