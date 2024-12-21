import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useContext } from "react";
import "./routepages.css"
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

export const Shimla = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className="jammupage" style={{backgroundColor: theme==="dark"? "black": "white"}}>
        <Navbar/>
      <div style = {{
        background: "url(https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1726730693575)", 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: "750px",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundAttachment: "fixed" 
      }}>
        <h1 className="title_2" style={{color: theme==="dark"? "purple" : "black"}}>SHIMLA</h1>
      </div>

      {/* Content Section */}
      <div className="content" style={{backgroundColor: theme=== "dark"? "white" : "purple"}}>
        <div className="image">
         
          <div className="content_2" style={{backgroundColor: theme==="dark"? "black": "white"}}>
            <h2>SHIMLA</h2>
            <div>
                <p>
                Shimla was built on top of seven hills: Inverarm Hill, Observatory Hill, Prospect Hill, Summer Hill, Bantony Hill, Elysium Hill and Jakhu Hill. The highest point in Shimla is Jakhu hill, which is at a height of 2,454 metres (8,051 ft). In recent times the city has spread past the initial seven hills.
                </p>
                <p>
                Shimla derives its name from Shyamala Devi, an incarnation of the goddess Kali, whose temple existed in the dense forest covering Jakhu Hill in the early 19th century. Shimla is the capital of Himachal Pradesh and was also the summer capital in pre-Independence India. Covering an area of 25 sq km at a height of 7,238 ft, Shimla is surrounded by pine, deodar and oak forests. Its well-developed amenities, easy reach and various tourist attractions make it one of India’s most popular hill stations.
                </p>
                <p>
                Shimla is an excellent base for treks in the surrounding hills or beyond, rafting and trout fishing at Tattapani (51 km from Shimla) and golf at the 9-hole golf course at Naldehra. In winter, there is skiing at Kufri and Narkanda from January to mid-March. You can also go shopping at some of Shimla’s most lively and colourful markets. You can entertain yourself in a cultural or dramatic performance or take pleasure in a sporting activity. A wide range of activities and attractions will surely keep you occupied all the time. Charleville Mansion in Shimla Viceregal Lodge, formerly the residence of the British Viceroy of India that houses the Indian Institute of Advance Study, is also worth a visit.
                </p>

                <ul style={{color: "grey"}}>
                    <li>The Mall is the main shopping street of Shimla. It has many restaurants, clubs, banks, bars, post offices, and tourist offices. The lower part of Gaiety Theatre lies here.</li>
                    <li>
                    The Ridge is a large open space, which is situated alongside The Mall Road and hosts all the cultural activities in the city. Christ Church situated on the Ridge is the second oldest church in Northern India. Inside there are stained glass windows that represent faith, hope, charity, fortitude, patience, and humility. There are State Library and Gaiety Heritage Cultural Complex too which are some of the notable buildings located here.
                    </li>
                    <li>
                    Jakhoo temple is 2 km from The Ridge, at a height of 8,000 ft, Jakhoo Hill is the highest peak in the city and has views of the city and the snow-covered Himalayas. At the top of the hill is an old temple of Hanuman, a Hindu deity which is popular among tourists and locals alike. A 108 feet (33-metre) statue of Hanuman, at 8,500 feet (2,591 metres) above sea level, is the statue standing at the highest altitude among several other masterpieces in the world, overtaking the Christ Redeemer in Rio de Janeiro, Brazil. Jakhoo has a ropeway also which connects Jakhoo temple to the ridge ground and is the first ropeway in Shimla.
                    </li>
                    <li>
                    Kali Bari is a temple dedicated to Goddess Kali's fearless incarnation Shyamala on which Shimla city is named. The extensive views from the temple include such sights as Annadale, Shima Railway Station, Railway Board Building, Old Bus Stand, ARTRAC, TV Tower, etc.
                    </li>
                    <li>
                    Annadale was developed as the racecourse of Shimla, Annadale is 2–4 km from the Ridge at a height of 6,117 ft. It is now used by the Indian Army. It has the Army Heritage Museum which is a notable tourist destination on its own, and also a golf course and a helipad are situated here. Every VVIP, VIP, or celebrity who visits Shimla comes by Annadale helipad. Annadale is one of the prime tourist sites of Shimla. The first Durand Cup Football Tournament was organised here in 1888 by Mortimer Durand.
                    </li>
                    <li>
                    Indian Institute of Advanced Studies is an educational institute now. This institute is housed at the former Viceregal Lodge, built-in 1884–88.
                    </li>
                    <li>
                    Himachal Pradesh State Museum - Himachal Pradesh State Museum was opened in 1974, and has tried to protect the hill-out and the cultural wealth of the state. There is a collection of miniature Pahari paintings, sculptures, bronzes, wood carvings and also costumes, textiles, and jewellery of the region.
                    </li>
                    <li>
                    Summer Hill is at a height of 6,500  ft on the Shimla-Kalka railway line. Mahatma Gandhi lived in these quiet surroundings during his visits to Shimla. Himachal Pradesh University is situated here.
                    </li>
                    <li>
                    Sankat Mochan Temple is a Hindu temple dedicated to Hanuman. It is situated on the Shimla-Chandigarh highway.
                    </li>
                    <li>
                    Tara Devi Temple is 11 km from the Shimla bus stand. Tara Devi hill has a temple dedicated to the goddess of stars on top of the hill. There is a military Dairy Town here as well as the headquarters of Bharat Scouts and Guides.
                    </li>
                    <li>
                    Sanjauli is the main suburb of Shimla.
                    </li>
                    <li>
                    Dhingu Mata Temple is situated atop a hill in Sanjauli. It is the second-highest hilltop temple in Shimla after Jakhoo temple.
                    </li>
                    <li>
                    Kamna Devi Temple is situated on top of Prospect Hill in Boileauganj.
                    </li>
                    <li>
                    Also known as one of the most popular sightseeing places in Shimla, Chadwick Falls has always been a delightful experience for tourists. It is an amazing place to hang out with your friends and offers a great hiking trail that lets you explore its quietness, away from the hustle and bustle of city life.
                    </li>
                    <li>
                    Kufri is situated near Shimla. Kufri sees the annual sports winter festival in February. Adventure activities like skiing and tobogganing.
                    </li>
                    <li>
                    Himalayan Nature Park is situated just outside the city.
                    </li>
                    <li>
                    Chharabra is near Kufri. It is famous for its natural beauty and Kalyani helipad.
                    </li>
                    <li>
                    Mashobra is near Shimla. Craignano Park here is a popular spot.
                    </li>
                    <li>
                    Jutogh has located 8 km from Shimla city centre,  this is an army cantonment, it is near Totu, an important suburb of Shimla city.
                    </li>
                </ul>

            </div>
          </div>
        </div>
        <div 
            style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "white"}}>
              <Link to="/spiti">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/1555504/pexels-photo-1555504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>SPITI</h3>
              </div>
              </Link>
              <Link to="/rafting">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/9065578/pexels-photo-9065578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>RAFTING</h3>
              </div>
              </Link>
              <Link to="/trekking">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/3604912/pexels-photo-3604912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>TREKKING</h3>
              </div>
              </Link>
              </div>
      </div>
      <Footer/>
    </div>
  );
};
