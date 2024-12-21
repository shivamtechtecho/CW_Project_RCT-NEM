import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useContext } from "react";
import "./routepages.css"
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

export const Lahaul = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    
    <div className="jammupage" style={{backgroundColor: theme==="dark"? "black": "white"}}>
        <Navbar/>
      <div style={{background: "url(https://www.ahospitalityclub.com/wp-content/uploads/2020/02/Key-Monastery-in-lahaul-spiti.jpg)", 
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
        <h1 className="title_2" style={{color: theme==="dark"? "purple" : "black"}}>LAHAUL</h1>
      </div>

      {/* Content Section */}
      <div className="content" style={{backgroundColor: theme=== "dark"? "white" : "purple"}}>
        <div className="image">
         
          <div className="content_2" style={{backgroundColor: theme==="dark"? "black": "white"}}>
            <h2>TOURIST PLACES IN LAHAUL</h2>
            <div>
              <h3>ROHTANG</h3>
              <p>
              Rohtang pass  (altitude 13,050 feet) separates Kullu, from the exotic charm of the  Lahaul valley. In Tibetan Rohtang means “a heap of dead bodies” and the pass stands true to its notorious name. Every year it must take toll of life and property. This is so because after 11 A.M. sudden blizzards and snow storms called Biannas are only to be expected. The pass becomes all the more hazardous to negotiate due to frequent avalanches.
              </p>
              <p>
              The summit of the pass turns into lush green meadow in summer studded with violets and varieties of wild Himalayan and Alpine flowers. Butterflies of numerous and rare kinds and variegated hues also draw the attention of the visitor of the Solang nullah. The place gained religious significance because of sojourn of Beas Rishi  (the famous Vyasa Rishi, author of the epic Mahabharata.) To the left of this pass is the little lake Sarkund. On the 20th Bhadon (early  September) every year a large number of people visit this lake with the belief and hope that an early morning bath in it will cure all their ailments. Almost directly opposite and obviously only a few km away is the well-defined Sonapani glacier. Slightly to the left are the twin peaks of Gyephang La, seats of Pre-Aryan Himalayan gods Jamulu and his younger brother Gyephang. These peaks are snow-streaked and snow-covered. The higher peak is 5856 m. high. Gyephang La can be seen from Kunzom, Pangi Lahaul and from Serchu plains across the Baralacha La. The higher of the two peaks can be seen on a clear day from as far as the Ridge in Shimla. Himachal tourism buses and taxi operators of Manali provide frequent and efficient service to tourists in the open season. Tea and snacks are available on the top. However, for food one has to halt at Marhi.
              </p>

              <h3>KOKSAR</h3>
              <p>
              Koksar is the first village and gateway to Lahaul. This village is situated at an altitude of 3140 m. on the right bank of the river Chandra. There is habitation on the left bank also. H.P.P.W.D. rest house and Serai are on the left bank. Khoksar remains covered under snow during winters. This village is surrounded by high mountains and is avalanche-prone.  Avalanches can be seen piled up even near the river bed. During winters Koksar is the coldest inhabited place in Lahaul. The river freezes during winters and is covered with snow to afford regular passage for human beings as also for mule traffic. Just five km ahead of Koksar towards Manali is Gramphu from where a diversion to the left leads to Kaza. During summers rich growth of alpine flowers, beautiful potato fields and numerous water channels spellbound the visitor. Herds of goats and sheep can be seen grazing around. This may be of interest to the reader that Koksar was on the old trade route from the Indian plains to West Asia.
              </p>

              <h3>SISSU</h3>
              <p>
              This village is situated on the right bank of the river Chandra at an altitude of 3,130m. The village is located on a broad flat ground above the Chandra river. Good plantations of willows and poplars on both sides of the road are so dense during summers that at places even the sun rays ail to penetrate. The terraces are green with potato, peas, barley and buckwheat. Wild roses of white, yellow and red hues with expanses of alpine flowers deck the slopes in an unforgettable feast of colours.
              </p>
              <p>
              There is a swampy patch on the riverside where the Siberian wild duck and geese halt when on their way back from the Indian plains. Snow trout is also available in the village near the riverside.
              </p>
              <p>
              Behind the ridge on which the village is situated is the famous and most propitiated Gyephang peak. Lord Gyephang or Ghepan is the presiding deity of Lahaul–the protector of people. In the olden days, the people of Lahaul fought their wars under the banner of Lord Gyephang. The temple of Lord Ghepan is in this village. The temple is not open to outsiders. Once in two/three years the deity is taken out of the temple in a procession.
              </p>
              <p>
              A  little short of the village is the Sissu nullah which flows down a  narrow gorge from tho Gyephang peak glaciers.
              </p>
              <p>
              Across the river, one can see the beautiful Sissu fall cascading over the cliff from the high valley between the two mountains. A suspension bridge over the river provides easy access to this picturesque fall. A very good photograph of the fall can be had from the road just short of the P.W.D. rest house.
              </p>
              <p>
              Two fountain slabs dating back to 1lth or 12th C. AD can also be seen in this village.
              </p>

              <h3>GONDHLA</h3>
              <p>
              The village is situated at a distance of 18 km from Keylong, the district headquarters along the right bank of the river Chandra. Situated at an altitude of 3,160 m. on a fairly level expanse of land this hamlet is large as compared to other villages in the valley. The village is surrounded by the thick foliage of poplars and willows. From Sissu to Gondhla land is cultivable and fertile. Between these two places the whole mountain-side from the peaks over 6,090 m. to the river bed below 3,050 m. is awe-inspiring. Glaciers and snowfields overhanging the precipices make them one of the finest in the world.
              </p>
              <p>
              The House of the Thakur of Gondhla called the Gondhla castle or fort attracts a  large number of tourists. The Present Thakur Fateh Chand would like the tourists to believe the Fort is about 20 generations old, but according to the District Gazateer of Lahaul and Spiti, the fort was built in 1700 A.D. by Raja Man Singh of Kullu whose influence stretched up to the Lingti plains beyond the Baralacha-la. This Raja also married a daughter of the Gondhla family to cement his ties with the Thakur.
              </p>
              <p>
              The castle is an example of the indigenous timber bonded stone style of the Western Himalayas consisting of alternate courses of stone, wooden beams and cemented together with wet clay. This seven-storey high edifice is topped by a wooden verandah which runs around the upper storey. This is something like the Swiss Chalet. The staircases in the building are partially notched wooden logs. The building has many apartments which can comfortably accommodate more than 100 people.
              </p>
              <p>
              The fifth storey was exclusively meant for the Thakur. It consisted of a personal prayer chamber and a verandah from where the Thakur used to listen to the public and later pronounce his judgements. Once the walls of the prayer chamber were painted all over in stone colours. Forty volumes of Kangyur can still be seen littered around and carelessly stacked on a wooden rack. Ganesha is the main deity carved on the facade of the prayer chamber. In one of the prayer chambers, the window connecting the outer room is an exquisite work of wood carving. The ʻjali’ (net) carved on a single piece of wood looks exactly like the cane work.
              </p>
              <p>
              Raja Man Singh of Kullu is believed to have stayed in the sixth storey of the fort in 1720 A.D. when he was on his way to Trilokinath Temple in Udaipur. Remains of the kitchen and utensils can still be seen in the room.
              </p>
              <p>
              Several weapons including bows, arrows, quivers, catapults, guns and canons beside other articles of antique value can be seen rusting in the apartments.  Age-old costumes, furniture and idols are also strewn around in a state of neglect. The Thakur is negotiating with the Department of Language and Culture of Himachal Pradesh to sell it as he finds it difficult to maintain this structure.
              </p>
              <p>
              Another interesting article to be seen in possession of the Thakur is Sharab Raldi i.e., “the sword of wisdom” as Sharab means wisdom and Raldi means a sword. The Sword of Wisdom (Sanskrit Pragya Kharga) has great importance among Tibetans. Manjushri is the Tibetan god of wisdom and he is always portrayed carrying this sword of wisdom in his right hand.  According to the Thakur this Lama when that ancestor had fled to Tibet sick of the designs of the local people. This sword seems to have been built in the Toledo technique of Spain. This technique is stated to be superior to the Sheffield technique. In Toledo, thin steel wires are beaten with a  hammer to obtain the desired shape of a sword or other weapon. One can really observe thin lines in the length of the sword. Earlier this sword was never shown to the outsiders but now an insistent visitor can see this prize sword of the Thakur. 
              </p>
              
              <h3>TANDI</h3>
              <p>
              The village is situated above the confluence of the rivers Chandra and Bhaga in the Pattan valley some 7 km away from Keylong. Revenue and settlement records reveal that Tandi was founded by Raja Rana Chand Ram under the name of Chandi which over the years got corrupted into Tandi.
              </p>
              <p>
              There are at least three mythological stories connected with Tandi. First, Tandi is believed to mean Tan Dehi i.e., giving up of the body. This is associated with Draupadi,  the wife of Pandav as who left her body at this place. Second, this is believed that Rishi Vashishtha who meditated near the hot water springs of Manali was cremated at this confluence; hence named Tandi i.e., body consumed. According to the third, Chandra and Bhaga were son and daughter of the Moon and the Sun gods respectively. They were in love with each other. To perform their celestial marriage they decided to climb the Baralacha-la and from there run in opposite directions encircling a vast tract of Lahaul. Thus flowing southeast and southwest both met at Tandi to enter wedlock.
              </p>

              <h3>GHUSHAL</h3>
              <p>
              Another village above the confluence is Gushal which looks extremely beautiful when seen from Tupchiling or Kargha. The confluence itself is best seen from Tupchiling, Kargha and Ghushal.
              </p>
              
              <h3>KEYLONG</h3>
              <p>
              Keylong is the district headquarters of Lahaul and Spiti. At an altitude of  3,156 m. Keylong is situated on the main trade route between the Rohtang and Baralacha passes above the Bhaga river. Most of the government offices are located at Keylong. This is also the hub-centre of all commercial activity with a regular bazaar. Naturally, Keylong is the most populated and busy village in the Lahaul valley. As far as communication facilities are concerned, there are police and telegraph radio nets, telephone exchange at Keylong and postal service throughout the valley. There are three light TV transmitter has been installed one in Sumnam village, the second in Baring & third in Udaipur. In the past, Keylong was home to the Moravian missionaries.
              </p>

              <h3>LADY OF KEYLONG</h3>
              <p>
              During summers Keylong is very green looking refreshingly striking against a backdrop of brown hills and snow-clad peaks. Because of this panoramic setting Lieut. Col., the Honble C.G. Bruce, M.V.O. likened Keylong to a barbaric jewel–a roughly cut emerald in a bronze and silver setting. There can not be a better simile to describe the lush green charm of Keylong during summers. “It is an oasis of green fields and willow-planted water courses surrounded by brown hills and snowy heights”.
              </p>
              <p>
              There is a Circuit House, a P.W.D. rest house, a Sainik Rest House, a Tourist Bungalow and many hotels which provide accommodation to the tourists. Several eating joints and restaurants are also there for every taste.

Three of the best-known monasteries Tayul, Kardang and Sha-Shur are within a few km. of this village. Tourists may also like to visit the temple of the local deity Kelang Wazir in the house of one Sh. Nawang Dorje.
              </p>

              <h3>JISPA</h3>
              <p>
              This beautiful spot is 22 km away from  Keylong and 4 km ahead of Ghemur. The village is situated at the junction of two nullahs with the main river Bhaga. Jispa has a very large dry riverbed a rarity in  Lahaul.

Just on the edge of the river Bhaga is a  small PWD rest house. Near this the river is shallow and plenty of trout fish can be caught during summers. The place is virtually an angler’s delight. A good juniper plantation is around this village.
              </p>
              
              <h3>DARCHA</h3>
              <p>
              Darcha is situated at the junction of Yotche nullah and the Zanskar chu which takes off from the Shinkun la. Both these nullahs meet with the main river Bhaga at this place. The valley broadens out from Darcha. The altitude of Darcha is about 3,500 m. which makes it an ideal base camp for acclimatisation. Two days of acclimatisation at this place will prove useful for expeditions to Baralacha la and beyond. Darcha is the jumping-off point for treks to Padum over the Shinkun la or Baralacha la and Phirtse la and for treks or mountaineering expeditions to Leh and peaks of The Chandra Bhaga series. However, no tourist bungalow or rest house facilities are available on either side of the nullahs. A police check post is also there. Darcha is the last village where one can see the sparse growth of trees. Beyond Darcha not even a single tree can be seen on either side of the highway. The landscape starts looking desolate and absolutely barren.
              </p>

              <h3>SURAJ TAAL</h3>
              <p>
              Suraj Taal or the lake of the Sun god is situated well on the summit of the Baralacha la, a little below an altitude of 16000 feet. The Bhaga river rises in this lake which is situated in a beautiful natural amphitheatre just below the highway. “During winters it remains in the grip of a pall of ice untidy with lumps of frozen snow and jutting stones”. But in the summer season, this tarn comes back to its glorious charm, the deep blue of its icy waters reflecting craggy mountains and snowy heights. This is an ideal halting place for having a bite that one might be carrying. No shops or dhabas are available around this place.
              </p>

              <h3>CHANDRATAAL</h3>
              <p>
              The natural lake of Chandrataal is situated at about 14,000 ft above MSL between a low ridge and about nine km from the Kunzom pass. The lake lies in a broad grassy plain which in ancient times was a glacier. The lake is about a kilometre in length and half of it in breadth. Its circumambulation is five km long. There is a brownish patch “Samundari  Tapu” in the middle of the lake which a number of people have tried to reach but in vain. There is a story of a mermaid living in the glacial lake. This is also said that a shepherd from Hansa village in the Spiti valley fell in love with the fairy and spent some time with her under the water. Cranes and ducks abound in the lake.
              </p>
              <p>
              Chandra Taal is a favourite halting place for shepherds because of the rich growth of grass. The water in the lake is so clear that the stones at its bottom are easily visible.
              </p>
              <p>
              Alpine vegetation grows on the surrounding moraines in summer. This lake freezes during the winter season. Its waters are crystal clear and free from pollution. A number of temples exist along the periphery of the lake.
              </p>

              <h3>UDAIPUR</h3>
              <p>
              This sub-divisional headquarters is situated at the junction of the mighty Mayar nullah with the main river Chandrabhaga. Situated 53 km away from Keylong, earlier this village was known as Margul or Markul. Around 1695 it was renamed Udaipur when Raja Udai Singh of Chamba (1690-172’8) raised it to the status of a district centre in the Chamba-Lahaul which his father Chatter Singh had annexed to his Chamba state.
              </p>
              <p>
              Good kail-blue pine forests can be seen all around the village. Since the altitude is low, apples, walnuts, apricots, etc. are grown in the area. This village is warm but avalanches-prone; the latter making it unsuitable for district headquarters. However, Udaipur offers the most thickly forested and green scenery in Lahaul. Hermann Goetz who visited this area in 1939 complimented the natural charm of this place by comparing its scenery to the Swiss scenery.
              </p>
              <p>
              This place attracts a lot of tourists and pilgrims to its two unique temples,  namely, Trilokinath and Markula Devi temples.
              </p>
              <p>
              Trilokinath temple is representative of the Kashmiri-Kannauj style of, Lalitaditya of Kashmir  (725-756). Most of the Trilokinath temple is of a much later period, but the column bases of the original porch of the sanctuary are of a very special type characteristic of the reign of Lalitaditya. This Shiva temple was transformed into a Buddhist shrine by Padma Sambhava. However, according to Goetz the present Lamaistic image of  Avalokiteshvara-Trilokinath cannot be earlier than the 12th C. This temple continues to attract both Hindu and Buddhist pilgrims. In the centre of the compound, one can still see the Nandi Bull of Lord Shiva. There is also a drain in a wall of the temple at the level of the platform in the Sanctorum which was probably built at the time of construction to drain out the water or milk which was poured over the  Shiva.
              </p>
              <p>
              The temple is built in the classical style introduced in the hills in the 7th and 8th C. As is typical of the style this temple consists of a curvilinear stone tower (shikhara) crowned with the characteristic ʻamalka’ (imitating a segmented gourd). Like plains, there is no pillared hall (mandapa) in the hills perhaps owing to the non-availability of clear ground.
              </p>
              <p>
              Every year in the month of August a festival named Pauri is held there for three days when followers of both religions gather to offer prayers.
              </p>
              <p>
              The Markula Devi temple goes back to Ajayvarman’s reign in Kashmir, though no original work of so early a date survives. But part of the Markula temple has been copied during repairs in the 11/12th and 16th C. The phase of Kashmiri art in the 11th and 12th C in its transition to the Lamaistic art of Western Tibet is represented by the inner facade of the temple; the main characteristic of this transitional phase is three-headed Vishnu images.
              </p>
              <p>
              Markula’s wood carvings belong to two different periods, the earlier one consisting of the facade of the sanctum sanctorum and the ceiling and four main pillars of the mandapa; arid the later one consisting of two additional pillars, the dwarpala statues on both sides of the facade, window panels and the architraves supporting the ceiling. The exterior of the temple is most ordinary as it had to be renewed time and again because of vagaries of nature. The temple is the usual structure of timber-bonded stone. The temple is covered with a steep gable roof of wooden shingles in a steep pyramid looking like the Shikhara temples in the plains. The interior, however,  is rich in artistic quality.
              </p>
              <p>
              The wall panels depict scenes from the Mahabharata,  Ramayana, Sunderkand,  Yuddhakand, grant of the ground by Raja Bali to Vaaman, the three-headed incarnation of Lord Vishnu, Churning of the ocean (Samudra Manthan) Amritpaan,  etc.
              </p>
              <p>
              The ceiling consists of nine panels of different sizes and shapes. Eight of these borders the big centrepiece.  The centrepiece is in the Lantern style. The ʻKirtimukha’ masks on this centrepiece are characteristic of the 7th and 8th C. Four figural panels on the four basic directions depict Gandharvas busy with their mates and holding objects like crowns, bracelets, jewels and charnaras, etc.  Their dance poses are those of the Bharta  Natya and the costumes resemble the late Gupta period. Also shown are  Nataraj and Gauri with dancing Ganas. Shiva on both sides is flanked by his alter egos, the Bhairavas. The next panel deviates from the Hindu pantheon or myth for it represents the “Assault of Mara”. In the centre, Buddha is shown sitting on the Vajrasana in Bhumisparshasana calling the Earth goddess to witness his victory over Mara or the god of Lust and death.
              </p>
              <p>
              The facade of the temple is most richly, elaborately and intricately carved. The niches of the door jambs have been carved into complicated gables of late Kashmiri style. The facade displays, the Ganga, the Yamuna, several Yakshas and. Kinnars, ten incarnations of Lord Vishnu the Navgrahas and Lord Surya (the sun god).  The Sun god is repeatedly shown on his chariot drawn by seven horses making it explicit that the temple was dedicated to Lord Surya.
              </p>
              <p>
              The silver idol of Kali in her aspect as Mahishasurmardini was installed by Thakur Himpala in 1569-70. The statue was cast by one  Panjamanaka Jinaka from Bhadravah. The workmanship of the statue cannot be called exquisite because the bodies of the goddess and the buffalo look bloated. The statue's head is too big and her Crown resembles the ceremonial headgear of a Tibetan lama. The enclosing frame suggests brass idols of the 15th and 16th C. from Rajasthan, the top of it-the backs of early Moghul thrones. The impact of the Moghul and Rajput styles is understandable which perhaps penetrated via Balor which then had some control over Bhadravah. The Tibetan element is also not surprising in a frontier area like Lahaul where Tibetan Lahaulis treat Markula Devi as Do-rje Phag-mo (Sanskrit Vajravarahi). Previous to this installation Lahaul had been under for several centuries under Ladakhi supremacy, and it was then that the Lamaistic sculpture was introduced. At the time of its reconversion into a Hindu shrine, it was natural to select an image of Kali because of its superficial similarity to Vajravarahi. The poor and uneducated local population could hardly make any distinction between the Lamaistic and the Hindu interpretations of the great goddess. This Hindu revivalist style was patronised by Raja  Pratap Singh (1558-82) of Chamba. The selection of episodes from the  Ramayana and Mahabharata is typical of this style.
              </p>
              <p>
              The local population believes this temple to be the work of the master craftsman who built the famous Hidimba Temple at Manali for Bahadur Singh of Kullu. Historically this theory sounds plausible because Pratap Singh was the son-in-law and close friend and ally of Bahadur Singh. There is a striking similarity between many figures and other details of the later wood carvings to the reliefs of the  Hidimba Devi Temple.
              </p>
              <p>
              This unique shrine is the last wooden temple built fundamentally in the tradition of the early 8th C. This is a must-visit place.
              </p>

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
