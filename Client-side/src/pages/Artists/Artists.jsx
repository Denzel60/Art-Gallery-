import './Artists.css'
import DemoCarousel from './Carousel.jsx';
import artist1 from "../../assets/artists1.jpg";
import artist2 from "../../assets/artists2.jpg";

function Artists() {
    return (
        <div>
            <h1>Artists</h1>

            <div className="artists-main-cont">
                <div className="artists-cont">
                    <img src={artist1} alt="" />
                    < DemoCarousel />
                </div>

                <div className="artists-cont">
                    <img src={artist2} alt="" />
                    < DemoCarousel />
                </div>
            </div>
        </div>
    )
}

export default Artists