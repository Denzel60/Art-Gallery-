import './components.css'
import { GiPaintRoller } from "react-icons/gi";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <GiPaintRoller className="logo-icon" size={50} color="black" />
                <h3 className="logo-text">Art Gallery</h3>
            </div>

            <div className="navbar">
                <h3><a href="http://">Trending</a></h3>
                <h3><a href="http://">Sign In</a></h3>
                <h3><a href="http://">Sign Up</a></h3>
            </div>
        </div>
    )
}

export default Header