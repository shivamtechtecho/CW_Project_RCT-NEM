import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useContext } from "react";
import "./routepages.css"
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

export const Kullu = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className="jammupage" style={{backgroundColor: theme==="dark"? "black": "white"}}>
        <Navbar/>
      <div style = {{
        background: "url(https://images.pexels.com/photos/17167730/pexels-photo-17167730/free-photo-of-snowed-mountain-peak-covered-with-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
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
        <h1 className="title_2" style={{color: theme==="dark"? "purple" : "black"}}>KULLU</h1>
      </div>

      {/* Content Section */}
      <div className="content" style={{backgroundColor: theme=== "dark"? "white" : "purple"}}>
        <div className="image">
         
          <div className="content_2" style={{backgroundColor: theme==="dark"? "black": "white"}}>
            <h2>HISTORY</h2>

            
            <h3>MYTHOLOGICAL REFERENCES</h3>
            <p>
            References about the Kullu valley in several mythological works like Ramayana, Mahabharata etc. lend credence to the ancientness of the land. According to Hindu mythology, the valley is regarded as the cradle of all humankind. After the great deluge, Manu, the progenitor of humanity, is said to have rested his ark on a hillside and established his abode at the present Manali, which is regarded as the changed name of ‘Manu-alaya’ (i.e. the home of Manu). Parshuram, regarded as one of the reincarnations of Vishnu, is believed to have inhabited the valley and the Parshuram temple in Nirmand is regarded as a living testimony of this mythological association.
            </p>
            <p>
            According to some legends connected with the Ramayana period, Shringi Rishi, who had his abode near Banjar, attended the ‘Putreshti Yajna’ organized by Raja Dashratha after which Lord Ram was born. The name of the river Beas is assigned by common tradition to the celebrated saint Vashishtha, whose references are found in the Ramayana. Having become weary of life after the death of his sons, Vashishtha is said to have thrown himself into the river with his hands and feet tied. But the pious river burst his bonds and wafted him ashore unhurt. The river came to be known as ‘Vipasha’ or ‘the liberator of bonds’. Sage Vashishta then threw himself into the Satluj but the pious waters of the river divided themselves into hundred shallow channels and left the sage on dry land. The river became known as ‘Satadree’ or ‘the hundred channelled’.
            </p>
            <p>
            The land is also replete with many legends associated with the Pandavas, who are believed to have spent a part of their exile in the valley. The Hidimba temple in Manali, the Shangchool Mahadev temple in Sainj and the Dev Dhank in Nirmand are believed to be associated with the Pandavas. According to one legend, one of the Pandavas, Bhimsen killed a strong and cruel demon Hidimba and married his sister Hadimba, a powerful deity of Manali. Ghatotkachh, the son of Bhim and Hadimba, showed unparalleled heroism and velour in the Mahabharata. According to another legend, Arjuna, under the advice of Sage Vyas, practised austerities in a cave called ‘Arjun Gupha’ in the mountain of Inderkila (now called Deo Tiba) in order to get the powerful Pasupati Astra from Indra. The great sage Vyas is said to have performed his tapa in this valley during the Mahabharata period, at a place called ‘Vyas Kund’ on Rohtang Pass. It was because of this that the river Vipasha got the present name of Beas.
            </p>
            <p>
            The Dev Sanskriti of the valley is born out of an interesting mythological legend. It is believed that the powerful deity of Malana village, Jamlu was once crossing the Chandrakhani pass with a basketful of Gods, which he opened on top of the pass. A strong breeze dispersed all the Kullu Gods to their present locations, leading to Kullu being known as the valley of Gods
            </p>
            <br/><br/>
            <h3>DOCUMENTED HISTORY</h3>
            <p> 
            The district of Kullu came into being on November 1, 1966. Various historical pieces of evidence including inscriptions on coins etc., accounts of travellers and other printed references point out the antiquity of the tract and the people who constitute the district Kullu of the present. The history of Kullu has been traced some 2000 years back in time. The word ‘Kullu’ is speculated to have been derived from the word ‘Kuluta’ which was found inscribed on a coin from the first century A.D. The first king (Raja) mentioned in the historical record is Virayasa whose name figures on that coin as ‘Virayasa, King of Kuluta’. The Chinese pilgrim, Hiuen Tsang, is believed to have described the modern Kullu as Kiu-lu-to situated 117 miles to the northeast of Jalandhar. The track has also been referred to as ‘Kulantapitha’, which translates to ‘the territory which marks the end of Kula i.e. the socio-religious system of the mainland’ or ‘the end of the habitable world’.
            </p>
            <p>
            The track is said to have been first ruled by the Pal kings, who were succeeded by the Singh kings, believed to be descendants of the Pal kings. According to known history, the kingdom of Kullu was founded in the first century A.D. by Behangamani Pal, who is speculated to have come from Prayag near Allahabad. It appears that the people of the higher valley of Kullu were suffering under the repressive regime of the Thakurs of Spiti then and a keen desire to overthrow the Thakurs was smouldering in their hearts.  Behangamani Pal overthrew the Thakurs and established the first ruling dynasty of Kullu. The rule of the Pal kings continued till about A.D. 1450 and Raja Kelas Pal was the last in that line. After him, there was a long break of about 50 years and it appears that the Thakurs and the Ranas might have captured power during this period.
            </p>
            <p>
            After this interregnum, Sidh Singh, who became the Raja of Kullu in A.D. 1500, is recognized as the first of the line of the Singh kings. The local folklore narrates the story of Goddess Hidimba granting the kingdom of Kullu to Sidh Singh. Hidimba is respected as the grandmother and the patron deity by the royal family of Kullu to date. The next important king of Kullu was Raja Jagat Singh (A.D.1637-1672) who incorporated Lag into the kingdom of Kullu. The original capital of the state of Kullu was Jagatsukh where the early kings ruled for twelve generations. Raja Visudh Pal transferred the capital to Nagar and later Raja Jagat Singh transferred it to Sultanpur. The famous idol of Raghunath was brought from Ayodhya to Kullu during the reign of Raja Jagat Singh to remove a curse that a Brahmin had cast upon Jagat Singh. Jagat Singh put the idol on the throne, proclaimed himself to be merely the first servant of the temple, and the curse was removed. Since then, the Rajas of Kullu ruled the state in the name of Raghunath, who became the principal deity of the Kullu valley. With this incident, Vaishnavism established itself in a land where Shaivism and Shaktism were the dominant denominations. During the period of the Mughal rule, Kullu was subject to the suzerainty of the Mughal emperors and used to pay tribute to them.
            </p>
            <p>
            In A.D. 1672, river Sutlej became the state boundary in the south and Outer Saraj (consisting of Ani and Nirmand of the present times) became a part of Kullu. In territorial terms, Kullu reached its zenith under Raja Man Singh extending from Upper Lahaul in the north to Shimla in the south. Around A.D. 1800, the authority of the Mughal empire declined and Kullu started paying tribute to the Gorkhas and to Sansar Chand, the Katoch Raja of Kangra. In A.D. 1839, the Sikhs captured Kullu state from Raja Ajit Singh and in A.D. 1846 they ceded it to the British Government. Consequently, Kullu, along with Lahaul & Spiti, became a part of the district of Kangra, as a sub-division under the control of an Assistant Commissioner. The British gave sovereign powers to Thakar Singh within the jagir of Rupi and in A.D. 1852 his son Gyan Singh was given the title of Rai instead of Raja.
            </p>
            <p>
            Until 1960, the tract of Lahaul & Spiti was part of the Kullu tehsil. Kullu was declared to be a district of Punjab in 1963 and on November 01, 1966, it became a district of Himachal Pradesh. In British times, all the modern government buildings, hospitals and government bungalows were built around the Dhalpur grounds (proximate to Sultanpur, the old capital). Dhalpur continues to be the nerve centre of the district administration till date.
            </p>
            <br/><br/>

            <h2>PLACES OF INTREST</h2>
            <h3>KULLU - THE DISTRICT HEADQUARTER</h3>
            <p>
            Kullu, the headquarters of the district, is situated at an altitude of 1200 mt on the confluence of Savory rivulet and Beas river. Though it is somewhat warm during June and early July, the rest of the year provides a delightful and healthy climate. the annual rainfall is about 40″, of which a little less than a half occurs during the winter months from October to March. There is not much snowfall during the winters but the snow-clad peaks look very beautiful. Kullu town has made its name on the international tourist map for its famous Dussehra festival. The town is the seat of the chief deity of the valley i.e. Raghunathjee. During Dussehra, the visiting deities from all over the district first pay their obeisance by visiting the abode of Raghunathjee at Sultanpur. The town of Kullu can accommodate a large number of visitors with all facilities of boarding and lodging required by them.Kullu district offers many attractions to tourists. It has rich art and cultural heritage, lush green deep meadows, dazzling rivers, white-capped snowy peaks and high mountains. The district has incomparable Beas and its sub-valleys which are full of natural charm and grandeur. Though, Kullu does not have rich historical archaeological or epigraphically antiquities like Chamba but still has some ancient remains of antiquities like Nirmand in outer-Seraj and Hat at Barjaura. Not only the district is famous for its scenic beauty but also as a paradise for trekkers and mountaineers.
            </p>

            <h3>MANALI</h3>
            <p>
            Situated near the end of the valley, Manali is one of the most attractive tourist spots not only in Himachal Pradesh but of International fame also. Manali is synonymous with streams and birdsong, forests and orchards and grandees of snow-capped mountains.Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes and runs via Lahul and Ladakh to Kashmir while a divergent road connects it with Spiti. Now the motor link has been provided up to Leh in Jammu & Kashmir, Pangi valley in Chamba and Kaza of Lahul & Spiti. There are regular bus services to these places from Manali during the summer season. It is situated at a distance of 45 km from Kullu.
            </p>
            <p>
            There is an interesting legend about Manali which goes to say that Manu, the author of ’Manu Samhita’, after the great deluge first stepped on the earth from the celestial boat at a place in this land. The particular spot where he established his abode was the present Manali which is regarded as the changed name of ’Manu-Alaya’, the abode of Manu. The temple dedicated to Manu is still existing in the Manali village.
            </p>

            <h3>HADIMBA TAMPLE</h3>
            <p>
            Hidimba Devi Temple, locally known as Dhungari Temple, also known variously as the Hadimba Temple, is located in Manali, a hill station in the State of Himachal Pradesh in north India. It is an ancient cave temple dedicated to Hidimbi Devi, wife of Bhima, a figure in the Indian epic Mahabharata. The temple is surrounded by a cedar forest called Dhungiri Van Vihar at the foot of the Himalayas. The sanctuary is built over a huge rock jutting out of the ground which was worshipped as an image of the deity. The structure was built in 1553 by Maharaja Bahadur Singh. The Hidimba Devi temple is 24 meters tall.
            </p>

            <h3>NAGGER</h3>
            <p>
            Naggar, on the left bank of the Beas and about 300 mts above the river, is delightfully situated on a wooded slope and commands extensive views, especially of the north and west of the valley. It is 27 km from Kullu and 5 km from Patli Kulh. There is a bridge across the river Beas connecting Naggar and Patli Kulh.Naggar succeeded Nast (Jagatsukh) as the capital of Kullu. It was founded by Visudh Pal and continued as the headquarter of the state until the capital was transferred to Kullu (Sultanpur) by Raja Jagat Singh. A massive castle belonging to the Rajas of Kullu still exists here. The castle now is converted into a tourist lodge and is built on a steep eminence overlooking the valley and dominates the village and surrounding countryside. It is supposed to have been built during the reign of Raha Sidh Singh with stones brought from Baragarh fort on the opposite of the valley.At the foot of the small bazaar, below the castle is the Gauri-Shankar Temple of Lord Shiva, a charming example of the architecture and carving. It is presumed that the temple which is a protected monument is eight hundred years old. A little higher is the Vishnu temple of Chatturbhuj (with Four Arms). Higher still in the upper part of the village, is Pagoda shaped temple of Tripura Sundari Devi. The highest of all on a small ridge above Naggar is the Krishna temple of Murli Dhar. This temple is perhaps the oldest of its type in this part of Kullu.
            </p>
            <p>
            Above the castle, a road leads to Hall. The beautiful house which gives its name to the estate was built by Late Colonel Rennick but is now in the possession of the Roerich family. The late Professor Nicholas Roerich (who died in Dec 1947) was an illustrious artist of international repute who had selected Naggar as his residence when he came to India in 1929 along with the other members of his family. One of his sons Svetoslav Roerich was also a renowned painter.
            </p>

            <h3>ROHTANG PASS</h3>
            <p>
            Numerous mountain passes lead in and out of Kullu, but one the most popular trekking parties is the Rohtang, about 3,978 mt. above sea level. It is easily the most convenient route from Manali and throughout the whole distance provides a charming variety of scenery. The length of the pass is about 1 km. and has served as the route for many centuries for trade with Lahaul, Ladakh and too faraway countries in Central Asia. The road from Manali to Keylong passes over this pass which is 51 km and the vest of the Rohtang pass affords a wide-spread panorama of mountain scenery.The Beas river rises near the crest of Rohtang springing into existence from a block of mica-schist. To the left of the pass five or six hundred feet higher is the little lake of ’Sar Kund’ (also called Dashair). On 20th Bhadon (about the 4th of September) each year, this small glacier lake is visited by a number of people from Kullu and other adjoining districts with a belief that a bath in the cold water at daybreak on this particular day will cure all bodily ailments.In early summer and late autumn after about 11:00 AM or mid-day, the crest of the pass is occasionally subject to severe blizzards and snow storms, accompanied by a deadly cold breeze. Daily bus service is available at Manali for a trip to Rohtang-pass. The reservations for this trip may be done with the assistance of the Tourism Development Officer, at Manali.
            </p>

            <h3>ATAL TUNNEL</h3>
            <p>
            Atal Tunnel (also known as Rohtang Tunnel), named after former Prime Minister of India, Atal Bihari Vajpayee is a highway tunnel built under the Rohtang Pass in the eastern Pir Panjal range of the Himalayas on the Leh-Manali Highway in Himachal Pradesh, India. At a length of 9.02 km, it is the highest highway single-tube tunnel above 10,000 feet (3,048 m) in the world. With the existing Atal Tunnel and after the completion of the under-construction Shinku La Tunnel, which is targeted to be completed by 2025, the new Leh-Manali Highway via Nimmu–Padum–Darcha road will become all-weather roads.
            </p>
            <p>
            The tunnel reduces the travel time and overall distance between Manali and Keylong on the way to Leh. The route, which previously went through Gramphu, was 116 km (72.1 mi) long and took 5 to 6 hours in good conditions. A traveller now reaches the South Portal of the tunnel from Manali, a distance of 24.4 km (15.2 mi) in about 45 minutes, goes through the 9.02 km (5.6 mi) long tunnel in about 15 minutes and reaches Keylong which is 37 km (23.0 mi) away in about 60 minutes. The new route via the tunnel brings down the total distance travelled to 71 km (44.1 mi) which can be covered in about 2 hours, a reduction of around 3 to 4 hours when compared to the earlier route. Moreover, the tunnel bypasses most of the sites that were prone to road blockades, avalanches, and traffic snarls.
            </p>
            <p>
            Atal Tunnel, Rohtang North Portal The tunnel is at an elevation of 3,100 metres (10,171 ft) whereas the Rohtang Pass is at an elevation of 3,978 metres (13,051 ft). It was inaugurated by Prime Minister Narendra Modi on 3 October 2020. The cost of the entire project is ₹3,200 crore (US$438 million). The tunnel was completed by the Border Roads Organisation (BRO) under the Ministry of Defence. The tunnel can be visited by citizens and students of the nation. It will also boost tourism in Himachal.
            </p>

            <h3>JAGATSUKH</h3>
            <p>
            The original name of which was ’Nast’ was the ancient capital of Kullu state. Here the earliest Rajas ruled for twelve generations till, in the reign of Visudh Pal, the capital was transferred to Naggar. It lies on the left bank of the Beas and the road from Naggar to Manali runs through the village. It is about twelve km from Naggar and six km from Manali. Before reaching Jagatsukh a place Shooru, near the entrance to Hamta Nullah, is passed which is located in the ancient and historical temple of Devi Sarvali. In Jagatshukh some ancient temples are still in existence. The most important is the Shiva Temple in the Shikhara style. It has a very chaste sculptured decoration. The temple of Gayatri Devi is also located near this temple.
            </p>

            <h3>VASHISHT</h3>
            <p>
            A little village located on the left bank of the Beas, but well above the river and about 3 km beyond Manali and is renowned for its hot sulphur springs named Bashisht or Vashist. There is a regular walled bathing pool with stone floors. Turkish styled shower fitted bathrooms, separate for ladies and gents have been built closely where the hot/ cold water is separately piped, maintaining the regular temperature for bathing, charges are nominal. There is the cafeteria. Flanking the pool there is a stone and a wooden temple dedicated to Vashishta Muni, from whom the village gets its name. The hot sulphur springs at Vashist are famous for their great gelling powers.
            </p>

            <h3>ARJUN GUFA</h3>
            <p>
            A cave, which is about five km from Manali and known as Arjun Gufa, is situated a little up from the left bank road near the village of Prini. According to a legend, Arjuna under the advice of a Vyasa rishi practised austerities in a cave in order to get the powerful ’Pashupata Astra’ from Indra.
            </p>

            <h3>NEHRU KUND</h3>
            <p>
            A spring of clear cold water named after the late Prime Minister, Pt. Jawahar Lal Nehru, is about 6 kms from Manali on Manali-Keylong road.
            </p>
            
            <h3>SOLANG VALLEY</h3>
            <p>
            It is a splendid valley between Manali and Kothi and offers views of glaciers and snow-capped mountains and peaks. The nearest glacier from Manali is in this valley. It is about thirteen km. from Manali and one can go there either by jeep or by bus up to Palchan a village from where a jeepable road branches off to the left. Good skiing slopes are also available here which are famous for summer skiing.
            </p>

            <h3>MANIKARAN</h3>
            <p>
            Nestling among, sylvan surrounding in Parbati valley, Manikaran is famous for its hot springs. Manikaran at an altitude of 1,829 mt. and 40 km from Kullu has the finest hot water springs. Probably the most important and most useful is the one on the river bank at the entrance to the village which is always in great activity and is said to rise and fall with the increase and decline of river water. Rocks surrounding the spring are uncomfortably hot, while the temperature of the water is above boiling point. Rice can be cooked if placed in a muslin bag or tied up in cloth and thrown into the hot water pool. The water of the springs is said to be radioactive. It is supposed to be beneficial to sufferers of rheumatism and similar ailments. Due to Raghunathjee and Gurudawara, Manikaran is a favourite resort of pilgrims for Hindus and Sikhs. According to an ancient legend, Manikaran is also connected with Lord Shiva and his divine consort Parvati.
            </p>

            <h3>MALANA</h3>
            <p>
            Nestled between Jari and Khiksa thatch lies the village Malana. Here one can still see the oldest democracy in the world where all inhabitants of the village participate in the village administration. They have their own pattern of parliament which is the Upper House (Jaistang) and Lower House (Kanishtang or Core). Jaistang has its own Executive and it works like Judiciary. If no solution comes out in both houses, then the case is put forward to Jamalu Rishi (Devta) and then Devta decides the case through its ’Gur’ and its decision is final and binding to all inhabitants of the village.The inhabitants of Malana speak a peculiar language of their own, called Kanashi, which is entirely different from the Pahari of Kullu and is a mixture of aboriginal Mundari and Tibetan.
            </p>
            
          </div>
          
        </div>
        <div 
            style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "white"}}>
              <Link to="/jammukashmir">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/29842101/pexels-photo-29842101/free-photo-of-snow-covered-mountains-in-kashmir-with-pine-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>JAMMU KASHMIR</h3>
              </div>
              </Link>
              <Link to="/mandi">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/26110235/pexels-photo-26110235/free-photo-of-man-on-boat-on-dal-lake-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>MANDI</h3>
              </div>
              </Link>
              <Link to="/rafting">
              <div
              style={{padding: "30px"}}>
                <img src="https://images.pexels.com/photos/1305095/pexels-photo-1305095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <h3>RAFTING</h3>
              </div>
              </Link>
              
            </div>
      </div>
      <Footer/>
    </div>
  );
};
