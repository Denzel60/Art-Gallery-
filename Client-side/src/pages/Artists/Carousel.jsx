import './Artists.css'
import { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import art1 from "../../assets/heroImg1.jpg";
import art2 from "../../assets/art2.jpg";
import art3 from "../../assets/art3.jpg";
// import bike from "../assets/bike.jpeg";
// import houses from "../assets/Houses.jpeg";
// import tower from "../assets/tower.jpeg";

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className='carousel-img'>
                    <img src={art1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className='carousel-img'>
                    <img src={art2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='carousel-img'>
                    <img src={art3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
