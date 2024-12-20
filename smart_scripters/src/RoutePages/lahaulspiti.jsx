import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React from "react";
import "./routepages.css"

export const LahaulSpiti = () => {
  return (
    <div className="jammupage">
        <Navbar/>
      <div style={{background: url("https://www.thethumpingnomad.com/wp-content/uploads/2022/12/5_Chandratal.jpg"), 
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
        <h1 className="title_2">LAHAUL & SPITI</h1>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="image">
         
          <div className="content_2">
            <h2>LAHAUL & SPITI</h2>
            <div>
                <p>
                    The two units of the district i.e. Lahaul & Spiti, have separate historical backgrounds. In the distant past, Lahaul had been changing hands between the rulers of Ladakh and Kullu. In the second half of the seventeenth century with the disintegration of the Ladakh kingdom, Lahaul passed into the hands of the Kullu chief. In 1840, Maharaja Ranjit Singh took over Lahaul along with Kullu and ruled over it till 1846 when the area came under the sway of the British. From 1846 to 1940, Lahaul formed part of the Kullu sub-division of Kangra district and was administered through the local Jagirdars/Thakurs. One of the Thakurs was designated as Wazir of Lahaul & was invested with judicial and executive powers. Another Thakur was given the powers of a Revenue Officer. These functionaries exercised traditional as well as other power conferred by the Government. The Assistant Commissioner, Kullu used to visit the area once a year for a month or so. In the late thirties, the unprecedented prosperity of the people through growing kuth and their consequent awakening created a formidable challenge to the power and influence of the Wazir of Lahaul, which gradually started declining. The inadequacy was soon noticed by the Government which considered the extension of the regular system of administration. Accordingly, in 1941, a separate sub-tehsil comprising Lahaul & Spiti was formed and a naib-tehsildar was posted at Keylong thereby divesting the Thakurs of their powers. The system remained in vogue till June 1960 when Lahaul & Spiti district came into being. Simultaneously, Lahaul was constituted into a separate tehsil, and, later on, it was formed into a sub-division. The East India Company took over the possession of the Spiti portion in the year 1846 after the cessation of cis-Satluj States as a result of the Anglo-Sikh War. Before that, it formed a part of Ladakh, a subsidiary of Jammu & Kashmir. Because of its remoteness and poverty of natural resources, the British following the example of the Ladakhi rulers did not introduce any substantial changes in the administrative set-up of the territory. The Nono of Kyuling was recognized as the hereditary Wazir of Spiti (re-affirmed by the Spiti Frontier Regulations of 1883) and was supposed to represent the British India Government. He collected the land revenue for the Government, his judicial jurisdiction included trial of all criminal cases, except cases of murder; and he performed all functions and enjoyed all necessary powers for the fulfilment of his tasks and duties, as laid down in the regulations of 1883. In 1941, Spiti, with Lahaul, was constituted into a separate sub-tehsil of the Kullu sub-division which had its headquarters at Keylong. Later on, after the formation of Lahaul & Spiti into a district, in 1960, Spiti was formed into a sub-division with its headquarters at Kaza.
                </p>

                <h3>ORIGIN OF NAME</h3>
                <p>
                Lahaul & Spiti, which now form, a district of Himachal Pradesh, bordering Tibet, were at one time separate Himalayan wazirie s or cantons of the Kullu sub-divisions, and Kullu itself formed a part of Kangra district of Punjab.
                </p>
                <p>
                As is clear from the name Lahaul & Spiti, the district comprises two different mountain tracts, one known as Lahaul and the other as Spiti. Hence the name of the district came into being with the formation of these two parts into a revenue district. The names, Lahaul & Spiti, have different origins.
                </p>
                <p>
                Hiuen Tsiang stated Lahaul to be 1800 or 1900 li (575 or 610 Km) distant by road from the middle of Kiu-lu-to (Kulu). It is a gross overestimate as the first village in Lahaul is only about 70 km from Sultanpur. Despite this error, whatever its source may be, Lahaul is clearly the country referred to here. But the Tibetan Li-Yul has also been identified by Rockhill with Khotan. If this is correct Hiuen Tsiang placing Lo-u-lo at 1800 or 1900 li north of Kullu might be intelligible though an under-estimate. Probably Hiuen Tsiang confused the two countries as Li-Yul (Khotan) and Lo-u-lo (Lahaul) in his estimate of distances, admittedly derived from hearsay.
                </p>
                <p>
                In ancient Buddhist scriptures, Padma thangyiang and Mam-kambum there is mention of a country named Khasa or Hasha to the south of Ladakh and Zangskar. It is possible also that Garzha may be corruption of Khasa or Hasha. Between the 6th century B.C. and the 5th century A.D., the Saka and Khasa tribes, after having been driven out from Central Asia by the Huns, crossed over into India. many of these settled down in the valleys of Mid-Himalayas between Garhwal and Ladakh. This is borne out by the numerous remains of their graves found in these valleys. There is a nullah near Keylong known as Shaks, which seems to have taken its name after the Saka tribe settled in the Bhaga valley.
                </p>
            </div>

{/* image and link is remaning */}

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
