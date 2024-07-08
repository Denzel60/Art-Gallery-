/* eslint-disable react/no-unknown-property */
import './Services.css'
import "https://unpkg.com/@appnest/masonry-layout?module";
import { useNavigate } from 'react-router-dom';
import art1 from "../../assets/heroImg1.jpg";
import art2 from "../../assets/art2.jpg";
import art3 from "../../assets/art3.jpg";
import art4 from "../../assets/heroImg.jpg";
import art5 from "../../assets/art5.jpeg";
import Service from "../../assets/Service.jpg";
import Service1 from "../../assets/Service1.jpg";
import Service2 from "../../assets/Service2.jpg";

function Services() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Bookings")
    }

    return (
        <div>
            <h1>We Offer The Following Services</h1>

            <marquee behavior="scroll" direction="right" loop="-5" scrollamount="5">
                <img src={art1} alt="" style={{ height: "25vh", width: "20%", margin: "0.5em", borderRadius: "1em" }} />
                <img src={art2} alt="" style={{ height: "25vh", width: "20%", margin: "0.5em", borderRadius: "1em" }} />
                <img src={art3} alt="" style={{ height: "25vh", width: "20%", margin: "0.5em", borderRadius: "1em" }} />
                <img src={art4} alt="" style={{ height: "25vh", width: "20%", margin: "0.5em", borderRadius: "1em" }} />
                <img src={art5} alt="" style={{ height: "25vh", width: "20%", margin: "0.5em", borderRadius: "1em" }} />
            </marquee>

            <div className="services-cont">
                <h2>Painting On Walls</h2>

                <div className="services-group">
                    <img src={Service} alt="" />
                    <button onClick={handleClick}>Book Now</button>
                </div>

                <h2>House Interior Decoration</h2>

                <div className="services-group">
                    <img src={Service1} alt="" />
                    <button onClick={handleClick}>Book Now</button>
                </div>

                <h2>House Exterior Decoration</h2>

                <div className="services-group">
                    <img src={Service2} alt="" />
                    <button onClick={handleClick}>Book Now</button>
                </div>

            </div>
        </div>
    )
}

export default Services