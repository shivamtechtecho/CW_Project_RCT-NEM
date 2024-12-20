import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React from "react";
import "./routepages.css"

export const Spiti = () => {
  return (
    <div className="jammupage">
        <Navbar/>
      <div style = {{
        background: "url(https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2024/04/spiti-valley.jpg)", 
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
        <h1 className="title_2">SPITI</h1>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="image">
         
          <div className="content_2">
            <h2>TOURIST PLACES IN SPITI</h2>
            <div>
              <h3>KAZA</h3>
              <p>
              Spiti (locally pronounced Piti) or the middle country, has its sub-divisional headquarters at Kaza. The river Spiti originates at the base of the Kunzam range and flows eastward to join the Sutlej at Khab in Kinnaur. In practical isolation for centuries, Spiti has an intensely introvertive culture centred around its several monasteries- Dhankar, Ki, Tabo, Mud, Gungri, Lidang, Hikim, Sagnam, Mane Gogma and Giu to name a few. Spiti was loosely ruled for many centuries by a hereditary wazir, styled Nono. The majority of the people are Buddhists, followers of the Geluk-pa sect. The repetition of the mantra “Om Mani Padme Hum” (literally, ’Behold, the jewel is in the lotus’), is constant; it is believed to bring good fortune and wash away all sins. For all the seeming bleakness, Spiti possesses a haunting beauty.
              </p>

              <h3>DHANKAR</h3>
              <p>
              On the left bank of the Spiti river at a distance of 32 km downstream from Kaza, near Shichling at an altitude of 3870 m, nestles the citadel of Dhankar, the official capital of Spiti. The citadel is built on a spur which projects into the main valley and ends in a precipice. The location of this fort is strategic as Spiti always had to suffer innumerable aggressions by its neighbours. The location allowed the Spitian to keep a vigil on the approaches and to submit messages to surrounding inhabitants in case of danger. Whenever the Spitians were attacked, they built huge fires to signal meeting in the safe sanctuary of rocks, i.e., Dhankars. In the meeting, all men and women decided the course of action to be taken against the aggressors.
              </p>

              <h3>LHALUNG</h3>
              <p>
              From the small hamlet of Attargu the track leads through deserted and rugged terrain over heights of around 3800 metres into the Lingti valley. Lingti is the third biggest river, after the Pin which pours its great waters out into the spiti. The road into the Lingti valley leads along the slopes of the Lingti’s right bank in serpentine curves from which one has a giddy view of the few medieval settlements along the river. After an hour-long drive the valley opens up a little for the rich pastures of Lhalung town, consisting of barley and the yellow rape that adds another beautiful colour to the reduced palette of Spiti.
              </p>

              <h3>KUNZUM PASS</h3>
              <p>
              This pass is situated 60 km from Gamphu on the Gramphu-Kaza- Sumdo road. It provides chief access to the Spiti valley from Lahaul which is separated from the Spiti valley by the great Kunzom range, and from where the Spiti, pronounced Piti, the chief river of the area takes its source. Though higher than the Rohtang Pass, Kunzom is safer and provides easier ascent and descent. The altitude of this pass is about 4590 m. The panorama as viewed from the top is breathtaking. The lofty Shigri Parbat can be seen right in front in all its grandeur. The crest of the pass has been marked by a chhorten of stones erected ages ago. Recently a temple has been built on the top. A hut has also been built for the people to take shelter.
              </p>

              <h3>LOSSAR</h3>
              <p>
              Lossar is the first inhabited village on the Spiti side if you advance to the valley from Manali over Kunzom pass. Situated at a height of 4,085 m., the village is singularly secluded. The Sight of Lossar to a trekker coming down from Kunzom brings instant relief. The neatly white-washed mud houses with red bands look extremely picturesque. The contrast is rendered all the more appealing by verdant fields and willow plantations around the village. According to Gerard, “Lofty as the level of Lossar is, there is little in the landscape to betray its position when viewed in summer, embosomed in flourishing crops and herds of Pashmina wool goats. Yaks and horses meet the eye upon the high activities of the mountains, and a ray of ardent sunshine keeps the air looming from the effect of mirage.
              </p>

              <h3>KYE MONASTERY </h3>
              <p>
              Overlooking Kaza from a height of about 13,500 ft, the Kye monastery is the largest in the valley and holds powerful sway over the most populous part of the valley around Kaza. The Gompa is an irregular heap of low rooms and narrow corridors on a monolithic conical hill. From a distance is resembles the Thiksey monastery near Leh in Ladakh. The irregular prayer chambers are interconnected by dark passages, tortuous staircases and small doors.
              </p>

              <h3>KIBBER</h3>
              <p>
              Kibber is located at a height of about 14,200 ft in a narrow valley on the summit of limestone rock. It is only 16 km from Kaza and a bus service plies between these two places in summer. Kibber is a rather pleasant village with plenty of cultivation. The moment you get down from the bus you are greeted by lush green fields which look strikingly refreshing against the arid backdrop of lofty hills.
              </p>
              <p>
              There are only 80 houses in the village. The remarkable feature of the architecture is the use of stone instead of mud or adobe brick used extensively in the valley. There is a civil dispensary, a high school, a post office, a telegraph office and a community TV set in the village.
              </p>

              <h3>PIN VALLEY</h3>
              <p>
              One of the four local units of Spiti is the Pin valley which lies on either side of the Pin river. Geographically, the Pin valley is shut off from the rest of Spiti by high mountains. The only opening has been provided by the Pin river that forces its way through a deep narrow gorge to join the main river Spiti, at Attargu. The Pin valley is famous for its internationally recognised Chaumurti horses that are bred and sold for considerable sums in Rampur-Bushahar during the Lavi fair and in Ladakh. The climate and the rich grass of the valley produce extremely sure-footed horses able to negotiate great heights without much difficulty. A tourist in the Pin valley may see scores of horses, colts and fillies grazing on the river banks and some youths galloping away on these horses singing wildly in joyous abandon.
              </p>


            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
