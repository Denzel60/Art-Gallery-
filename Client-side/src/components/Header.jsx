import './components.css'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { GiPaintRoller } from "react-icons/gi";

function Header() {

    const [menu, setMenu] = useState("Trending");

    return (
        <header>
            <div className="logo">
                <GiPaintRoller className="logo-icon" size={50} color="black" />
                <h3 className="logo-text">Art Gallery</h3>
            </div>

            <div className="navbar">
                <Link to="/"><li onClick={() => { setMenu("Trending") }}>Trending{menu === "Trending" ? <hr /> : <></>}</li></Link>
                <Link to="/Artists"><li onClick={() => { setMenu("Artists") }}>Artists{menu === "Artists" ? <hr /> : <></>}</li></Link>
                <Link to="/Login"><li onClick={() => { setMenu("Sign In") }}>Sign In{menu === "Sign In" ? <hr /> : <></>}</li></Link>
                <Link to="/Register"><li onClick={() => { setMenu("Sign Up") }}>Sign Up{menu === "Sign Up" ? <hr /> : <></>}</li></Link>
            </div>
        </header>
    )
}

export default Header