import './components.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { SiPexels } from "react-icons/si";

function Footer() {
    return (
        <footer>
            <div className="footer-cont">
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="#">Pricing</Link></h3>
                <h3><Link to="#">About</Link></h3>
            </div>
            <div className="footer-cont">
                <h3><Link to="#">Communities</Link></h3>
                <h3><Link to="#">Privacy Policy</Link></h3>
                <h3><Link to="#">Sponsors</Link></h3>
            </div>
            <div className="footer-cont">
                <div className="footer-input">
                    <input type="email" placeholder="Get Updates In Your Email" name="" id="" />
                    <button type="button">Go</button>
                </div>
                <div className="footer-social">
                    <h2>< FaFacebook /></h2>
                    <h2>< FaTwitter /></h2>
                    <h2>< FaYoutube /></h2>
                    <h2>< FaSquareInstagram /></h2>
                    <h2>< FaPinterest /></h2>
                    <h2>< SiPexels /></h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer