import React, { useContext } from "react";
import "./Trekking.css";
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
        <h1 className="main-title"> T<span className="highlight-r">R</span>EZENE</h1>
        <p className="subtitle">
          Stay and Travel to the only place that is heaven in this world
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section" style={{backgroundColor:theme==="dark"?"black":"white",color:theme==="dark"?"white":"black"}}>
          <div className="content-text">
            <p>
              <a href="#" className="link-title">
                <br />
              <b>Trezene</b>: A Journey to Remember
              </a>{" "}
              Keeping in view the altitude and various factors related with it, trekking has been categorised in two broad categories, i.e., Low Altitude Trekking and High Altitude Trekking. In the first category, trekking activity is limited below the snow line, whereas in the latter type a trekker finds himself crossing high passes, snow fields, difficult terrain and camping at rarefied sounds. This necessitates mastering some techniques and proper acclimatisation and equipment to avoid mishaps and mountain sickness. This does not mean that trekking should be construed to be climbing or mountaineering. Climbing is a specialised field requiring intensive training and sophisticated equipment. Trekking is only a first step towards that direction. It requires a pair of strong legs, willpower and some easily available equipment.” However, there is no denying the fact that some experience of rock climbing proves good in high-altitude trekking. Knowledge of mountains, glaciers, valleys and terms connected with these can make trekking an immensely enjoyable and educative exercise. Therefore, some terms pertaining to mountains and glaciers have been included in Appendix A. This will help a beginner to appreciate mountains, glaciers and such like phenomena in a better perspective.

Although schools and colleges, various government and private .agencies and organisations have started conducting trekking and hiking tours in the Indian Himalayas, trekking continues to be a low-key activity. When compared to Nepal, trekking in India is unorganised and uncontrolled activity. The north-eastern states, Kumaon and Garhwal hills of U.P., Jammu camp; Kashmir and Himachal Pradesh attract a sizeable number of Indian as well as foreign trekkers, but the potential has not been fully exploited. As far as Himachal Pradesh is concerned trekking is confined to Shimla, Dharamasala, Chamba and Kulu districts. D.M.I. Manali has given a much-required impetus to this activity. Kinnaur has also started attracting trekkers after vigorous advertisement campaigns launched by Himachal Tourism Department. Lahaul continues to be one of the most neglected trekking regions despite a plethora of trekking routes. The flow of Indian trekkers is almost negligible. Most of the trekking in Lahaul is done by the local clubs. About two thousand foreigners visit this valley every year during the open season. The trekking programmes of the foreigners are mainly confined to the classic trekking routes to Padum in the Zangskar region of J&K. Some of them trek to Chandra-Taal via Darcha and by the Baralacha la. From Chandra Taal they usually go to Manikaran in the Kullu district. Some choose Myar valley for going to the Zangskar region or the Pangi valley in Chamba district. Rarely do they take trekking routes from Lahaul to Chamba, Mani Mahesh and Dharamasala.

Earlier lack of roads and very limited knowledge, about Lahaul deterred people from undertaking trekking and climbing expeditions in this beautiful area. In the past, these expeditions could not materialize for want of road communication up to the base camps. Now equipment and rations can be carded in the automobiles right up to the base camps. Rations like dehydrated and tinned foods, mineral water, etc. are easily available in Keylong at competitive rates. With the creation of infrastructural facilities, the Lahaul valley offers all s. orts of opportunities to explore the region. Much Will depend on the taste, interest and aptitude of the individual. One thing is certain that Lahaul’s magnificent peaks, snow serpents, i.e., glaciers, awe-inspiring precipices, spectacular gorges, blue water lakes, refreshingly verdant valleys, potato fields, alpine-himalayan flora and fauna, mystique monks, monasteries, its myth, legend, folklore and a totally different tribal culture will leave an indelible impression on the minds of the visitors.

The best trekking season in the Lahaul valley is between July and October. Because of climatical and geographical factors trekking in the Lahaul valley requires detailed and careful planning.  </p>
            <p>
              We cater to all types of travel needs and book cheap rail and air
              tickets. We also have customized travel packages according to your
              needs...
            </p>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

