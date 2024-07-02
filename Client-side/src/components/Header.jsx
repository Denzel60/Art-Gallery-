import './components.css'
import { GiPaintRoller } from "react-icons/gi";

function Header() {
    return (
        <header>
            <div className="logo">
                <GiPaintRoller className="logo-icon" size={50} color="black" />
                <h3 className="logo-text">Art Gallery</h3>
            </div>

            <div className="navbar">
                <h3><a href="#">Trending</a></h3>
                <h3><a href="#">Sign In</a></h3>
                <h3><a href="#">Sign Up</a></h3>
            </div>
        </header>
    )
}

export default Header