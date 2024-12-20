import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import "./winterExp.css"

export const WinterExpedition = () => {

    let { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <Navbar />

            <div
                className="top-section3"
                style={{ color: theme === "dark" ? "darkgreen" : "darkblue" }}
            >
                <h1 className="HEADING">WINTER EXPEDITION</h1>
                <p className="SUBHEADING">
                There’s nothing better than curling up with a good book and sitting in front of the fire on winter evenings.
                </p>
            </div>

            <section>
                <h2 style={{ marginTop: '40px' }}>About Rafting</h2>
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
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: '20px 0',
                }}>
                    {/* Added the new image URL */}
                    <img src="https://images.pexels.com/photos/11038300/pexels-photo-11038300.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Rafting Adventure" style={{
                        width: '200px',
                        height: 'auto',
                        margin: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }} />

                    <img src="https://images.pexels.com/photos/6831102/pexels-photo-6831102.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Rafting Adventure 1" style={{
                        width: '200px',
                        height: 'auto',
                        margin: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }} />
                    <img src="https://images.pexels.com/photos/751812/pexels-photo-751812.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Rafting Adventure 2" style={{
                        width: '200px',
                        height: 'auto',
                        margin: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }} />
                    <img src="https://images.pexels.com/photos/7406796/pexels-photo-7406796.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Rafting Adventure 3" style={{
                        width: '200px',
                        height: 'auto',
                        margin: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }} />
                    <img src="https://images.pexels.com/photos/8219397/pexels-photo-8219397.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Rafting Adventure 4" style={{
                        width: '200px',
                        height: 'auto',
                        margin: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }} />
                </div>
            </section>

            <section>
                <h2>Booking Information</h2>
                <p>
                    Ready for an adventure? Click the button below to book your rafting trip
                    or contact us for more information.
                </p>
                <button onClick={() => alert("Booking Feature Coming Soon!")} style={{
                    backgroundColor: '#007BFF', // Primary button color  
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}>
                    Book Now
                </button>
            </section>

            <Footer />
        </div>
    );
}