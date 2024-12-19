import React, { useContext } from "react";
import "./LandingPage.css";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { ThemeContext } from "../context/themeContext";

export const LandingPage = () => {

  let {theme, toggleTheme} = useContext(ThemeContext)
  // console.log("i am working" ,theme);
  

  return (
    <>
    <Navbar/>
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section" style={{color:theme==="dark"?"darkgreen":"darkblue"}}>
        <h1 className="main-title">TREZENE</h1>
        <p className="subtitle">
          Stay and Travel to the only place that is heaven in this world
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section" style={{backgroundColor:theme==="dark"?"black":"white",color:theme==="dark"?"white":"black"}}>
        <div className="image-text-container">
          <img
            src="https://images.pexels.com/photos/19727173/pexels-photo-19727173/free-photo-of-a-snowy-mountain-landscape-with-trees-and-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Himalayan Travel"
            className="content-image"
          />
          <div className="content-text">
            <p>
              <a href="#" className="link-title">
                <br />
              Trezene: A Journey to Remember
              </a>{" "}
              Nestled in the heart of Himachal Pradesh, Trezene was born out of a passion for travel and a deep love for the majestic landscapes of the Himalayas. Since its inception, the company has been dedicated to providing travelers with unforgettable experiences that combine adventure, comfort, and cultural immersion.

With years of expertise in the travel industry, Trezene has grown to become a trusted name for those seeking seamless and personalized journeys. The company takes pride in offering tailor-made travel packages that cater to diverse needs, whether it’s a peaceful retreat in the hills, an adrenaline-filled adventure, or a journey to explore the vibrant culture of the region.

Trezene has its roots firmly planted in the Himalayan soil, making it the perfect guide for exploring iconic destinations such as Shimla, Manali, Spiti, Lahaul, and Kullu. Every trip is thoughtfully crafted to ensure travelers experience the raw beauty and charm of these places. From booking affordable rail and air tickets to arranging comfortable accommodations and transport, Trezene ensures that every detail is taken care of, leaving travelers free to soak in the joy of the journey.

Over the years, Trezene has also become synonymous with adventure, offering thrilling activities such as trekking, river rafting, and paragliding amidst the breathtaking Himalayan landscapes. For those seeking tranquility, the company organizes visits to spiritual and cultural landmarks, allowing travelers to connect with the soul of the region.

At Trezene, travel isn’t just about reaching a destination; it’s about creating memories that last a lifetime. With a commitment to exceptional service and a passion for showcasing the beauty of Himachal Pradesh, Trezene invites you to embark on a journey that you’ll treasure forever.
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
            src="https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2023/06/feature-2644888-min.jpg"
            alt="Kailash"
            className="card-image"
          />
          <h3 style={{color:theme==="dark"?"darkred":"black"}}>KAILASH</h3>
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

