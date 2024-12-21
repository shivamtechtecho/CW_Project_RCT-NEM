import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useContext } from "react";
import "./routepages.css"
import { ThemeContext } from "../context/themeContext";
import  {Link} from "react-router-dom"

export const JammuKashmir = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className="jammupage" style={{backgroundColor: theme==="dark"? "black": "white"}}>
        <Navbar/>
      <div className="title">
        <h1 className="title_2" style={{color: theme==="dark"? "purple" : "black"}}>JAMMU & KASHMIR</h1>
      </div>

      {/* Content Section */}
      <div className="content" style={{backgroundColor: theme=== "dark"? "white" : "purple"}}>
        <div className="image">
         
          <div className="content_2" style={{backgroundColor: theme==="dark"? "black": "white"}}>
            <h2>Jammu & Kashmir: A Detailed Guide to Famous Attractions </h2>
            <div>
              <h3>1. The Majestic Himalayas</h3>
              <p>
                The Himalayas dominate the landscape of Jammu & Kashmir,
                offering awe-inspiring views and an abundance of activities.{" "}
              </p>
            </div>
            <div>
              <h3> - Zanskar Range:</h3>
              <p>
                Known for its rugged beauty, it is a haven for trekkers and
                adventure enthusiasts. The Chadar Trek on the frozen Zanskar
                River is a bucket-list experience.
              </p>
            </div>
            <div>
              <h3> - Pir Panjal Range:</h3>
              <p>
                Home to lush green valleys and snow-covered peaks, the range
                features scenic passes like Banihal and Patnitop, offering
                panoramic views.{" "}
              </p>
            </div>
            <div>
              <h3> - Karakoram Range:</h3>
              <p>
                Ladakh's crown jewel, this range is home to some of the highest
                peaks, including K2. It’s popular among mountaineers and
                explorers.
              </p>
            </div>
            <div>
              <h3>2. Dal Lake (Srinagar) </h3>
              <p>
                Often called the "Jewel in the Crown of Kashmir," Dal Lake is a
                must-visit for its serene ambiance.{" "}
              </p>
            </div>
            <div>
              <h3> - Pir Panjal Range:</h3>
              <p>
                Home to lush green valleys and snow-covered peaks, the range
                features scenic passes like Banihal and Patnitop, offering
                panoramic views.{" "}
              </p>
            </div>
            <div>
              <h3> - Shikara Rides: </h3>
              <p>
                A traditional boat ride across the lake offers stunning views of
                the surrounding Mughal Gardens and snow-capped mountains.{" "}
              </p>
            </div>
            <div>
              <h3> - Houseboats:</h3>
              <p>
                Stay in luxurious houseboats equipped with modern amenities for
                a unique experience.{" "}
              </p>
            </div>
            <div>
              <h3> - Floating Markets:</h3>
              <p>
                Witness the vibrant morning markets where vendors sell fresh
                produce and flowers directly from their boats.{" "}
              </p>
            </div>
            <div>
              <h3> - Nearby Attractions:</h3>
              <p>
                The Mughal Gardens, like Nishat Bagh and Shalimar Bagh, enhance
                the beauty of the lake with their Persian-inspired designs.{" "}
              </p>
            </div>
            <div>
              <h3>3. Pahalgam Valley </h3>
              <p>
                Known as the "Valley of Shepherds," Pahalgam is a tranquil
                retreat for nature lovers and adventure seekers.{" "}
              </p>
            </div>
            <div>
              <h3> - Aru and Betaab Valleys::</h3>
              <p>
                Famous for their pristine beauty, these valleys are ideal for
                picnics, horse riding, and photography.{" "}
              </p>
            </div>
            <div>
              <h3> - Trekking:</h3>
              <p>
                Start treks to Kolahoi Glacier and Tulian Lake, both offering
                breathtaking views.{" "}
              </p>
            </div>
            <div>
              <h3> - White-Water Rafting:</h3>
              <p>
                The Lidder River is perfect for thrilling rafting experiences.{" "}
              </p>
            </div>
            <div>
              <h3> - Bollywood Connection:</h3>
              <p>
                Many Indian films have been shot here, making it a favorite spot
                for filmmakers.{" "}
              </p>
            </div>
            <div>
              <h3>4. Amarnath Cave </h3>
              <p>
                A revered pilgrimage site dedicated to Lord Shiva, located at an
                altitude of 3,888 meters.{" "}
              </p>
            </div>
            <div>
              <h3> - Holy Ice Lingam:</h3>
              <p>
                The natural ice stalagmite formed inside the cave symbolizes
                Shiva and attracts millions of devotees during the annual yatra.{" "}
              </p>
            </div>
            <div>
              <h3> - Journey:</h3>
              <p>
                Pilgrims undertake a challenging trek from Baltal or Pahalgam to
                reach the cave, which is open only for a limited period in
                summer.{" "}
              </p>
            </div>
            <div>
              <h3>5. Vaishno Devi Shrine </h3>
              <p>
                Located in the Trikuta Mountains, this shrine is one of the
                holiest Hindu pilgrimage sites in India.{" "}
              </p>
            </div>
            <div>
              <h3> - Trek to the Shrine: </h3>
              <p>
                A 12-kilometer trek from Katra leads to the holy cave housing
                the deity. Ponies and helicopter services are also available.{" "}
              </p>
            </div>
            <div>
              <h3> - Spiritual Experience:</h3>
              <p>
                The shrine attracts millions of devotees who come to seek
                blessings and immerse themselves in the serene spiritual
                environment.{" "}
              </p>
            </div>
            <div>
              <h3>Cultural Delights Kashmiri Cuisine </h3>
              <p>
                Kashmiri food is a blend of Mughal and Persian influences, known
                for its rich flavors and unique spices.{" "}
              </p>
            </div>
            <div>
              <h3> - Wazwan:</h3>
              <p>
                A traditional multi-course feast served at weddings, featuring
                dishes like Rogan Josh, Gushtaba, and Tabak Maaz.{" "}
              </p>
            </div>
            <div>
              <h3> - Kahwa Tea:</h3>
              <p>
                A traditional green tea infused with saffron, almonds, and
                cardamom, perfect for chilly evenings.
              </p>
            </div>
            <div>
                <h2>Handicrafts</h2>
              <h3>Kashmir’s craftsmanship is world-famous.  </h3>
            </div>
            <div>
              <h3> - Pashmina Shawls:</h3>
              <p>
              Handwoven shawls made from fine Pashmina wool are highly valued for their softness and intricate patterns. 
              </p>
            </div>
            <div>
              <h3> - Carpets:</h3>
              <p>
              Hand-knotted silk and wool carpets with elaborate Persian-inspired designs.  
              </p>
            </div>
            <div>
              <h3> - Walnut Wood Carving:</h3>
              <p>
              Exquisite wooden furniture and artifacts carved by skilled artisans.
              </p>
            </div>
            <div>
                <h2>Music and Dance  </h2>
            </div>
            <div>
              <h3> - Rouf:</h3>
              <p>
              A traditional dance performed by women during festivals. 
              </p>
            </div>
            <div>
              <h3> - Sufiana Music:</h3>
              <p>
              A classical genre that blends Persian and Kashmiri styles, often performed with traditional instruments like the Santoor and Rabab.
              </p>
            </div>
            <div>
                <h2>Festivals </h2>
            </div>
            <div>
              <h3> - Shikara Festival:</h3>
              <p>
              Held on Dal Lake, showcasing traditional Kashmiri culture with boat races, music, and crafts.  
              </p>
            </div>
            <div>
              <h3> - Tulip Festival:</h3>
              <p>
              Celebrated in Srinagar’s Indira Gandhi Memorial Tulip Garden, Asia's largest tulip garden.  
              </p>
            </div>
            <div>
              <h3> - Hemis Festival:</h3>
              <p>
              A Buddhist festival in Ladakh, featuring masked dances and cultural performances.
              </p>
            </div>
            <div>
                <h2>Adventure Activities   </h2>
            </div>
            <div>
                <h2>Trekking</h2>
            </div>
            <div>
              <h3> - Kashmir Great Lakes Trek:</h3>
              <p>
              Explore alpine meadows and glacial lakes on this moderate trek. 
              </p>
            </div>
            <div>
              <h3> - Chadar Trek:</h3>
              <p>
              Walk on the frozen Zanskar River during winter for a unique experience.  
              </p>
            </div>
            <div>
                <h2>Skiing </h2>
            </div>
            <div>
              <h3> - Gulmarg:</h3>
              <p>
              One of Asia’s top skiing destinations, offering runs for both beginners and advanced skiers. The Gulmarg Gondola provides access to high-altitude slopes.
              </p>
            </div>
            <div>
                <h2>White-Water Rafting   </h2>
            </div>
            <div>
              <h3> - Lidder River (Pahalgam):</h3>
              <p>
              A mix of rapids for all skill levels.  
              </p>
            </div>
            <div>
              <h3> - Zanskar River (Ladakh):</h3>
              <p>
              Known for its challenging rapids and stunning canyon views. 
              </p>
            </div>
            <div>
                <h3>Plan Your Visit</h3>
                <h3>Jammu & Kashmir is not just a destination; it's an experience of unparalleled beauty, spirituality, and adventure. From serene lakes to thrilling treks and vibrant cultural festivals, every moment in this region is unforgettable.  </h3>
                <h3>Book your trip today to explore the paradise on Earth!</h3>
            </div>
            
          </div>
        </div>
        <div 
            style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "white"}}>
              <Link to="/winterexp">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/6831094/pexels-photo-6831094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>WINTER Expedition</h3>
              </div>
              </Link>
              <Link to="/trekking">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/1002272/pexels-photo-1002272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>TREKKING</h3>
              </div>
              </Link>
              <Link to="/rafting">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/2025306/pexels-photo-2025306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>RAFTING</h3>
              </div>
              </Link>
              
            </div>
      </div>
      <Footer/>
    </div>
  );
};
