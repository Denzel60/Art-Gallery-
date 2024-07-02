import './Home.css'
import heroImg from '../../assets/heroImg1.jpg'

function Home() {

    return (
        <div>
            <div className="hero">
                <div className="hero-top">
                    <h2>Discovery and explore a wide variety of pictures you might like</h2>
                    <img src={heroImg} alt="" />
                </div>
                <div className="hero-bottom">
                    <div className="types">
                        <h3>Nature</h3>
                    </div>
                    <div className="types">
                        <h3>Potrait</h3>
                    </div>
                    <div className="types">
                        <h3>Still Life</h3>
                    </div>
                    <div className="types">
                        <h3>Abstract</h3>
                    </div>
                </div>
            </div>

            <div className="masonry"></div>
        </div>
    );
}

export default Home;
