import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useContext } from "react";
import "./trekking.css";
import { ThemeContext } from "../context/themeContext";

export const Trekking = () => {

    let { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <Navbar />

            <div
                className="top-section2"
                style={{ color: theme === "dark" ? "darkgreen" : "darkblue" }}
            >
                <h1 className="HEADING">TREKKING</h1>
                <p className="SUBHEADING2">
                To walk in nature is to witness a thousand miracles. Leave the roads, take the trails. Remember to turn everything off once a week including your brain and walk somewhere quiet. hike more, worry less.
                </p>
            </div>


            <section>
                <h2 style={{ marginTop: "40px" }}>About Rafting</h2>
                <p>
                    Experience the thrill of rafting down some of the most exciting rivers
                    in the country! Our guided rafting trips cater to all skill levels,
                    ensuring a memorable adventure for everyone.
                </p>
            </section>

            <section>
                <h2>Safety Tips</h2>
                <ul>
                    <li>Always wear a personal flotation device (PFD).</li>
                    <li>Follow your guide's instructions at all times.</li>
                    <li>Be aware of the water conditions and weather updates.</li>
                    <li>Keep your body inside the raft during rapids.</li>
                </ul>
            </section>

            <section>
                <h2>Photo Gallery</h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        margin: "20px 0",
                    }}
                >
                    {/* Added the new image URL */}
                    <img
                        src="https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Rafting Adventure"
                        style={{
                            width: "200px",
                            height: "auto",
                            margin: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    />

                    <img
                        src="https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Rafting Adventure 1"
                        style={{
                            width: "200px",
                            height: "auto",
                            margin: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                    <img
                        src="https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Rafting Adventure 2"
                        style={{
                            width: "200px",
                            height: "auto",
                            margin: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                    <img
                        src="https://images.pexels.com/photos/1392099/pexels-photo-1392099.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Rafting Adventure 3"
                        style={{
                            width: "200px",
                            height: "auto",
                            margin: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                    <img
                        src="https://images.pexels.com/photos/1194233/pexels-photo-1194233.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Rafting Adventure 4"
                        style={{
                            width: "200px",
                            height: "auto",
                            margin: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>
            </section>

            <section>
                <h2>Booking Information</h2>
                <p>
                    Ready for an adventure? Click the button below to book your rafting
                    trip or contact us for more information.
                </p>
                <button
                    onClick={() => alert("Booking Feature Coming Soon!")}
                    style={{
                        backgroundColor: "#007BFF", // Primary button color
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Book Now
                </button>
            </section>

            <Footer />
        </div>
    );
};
