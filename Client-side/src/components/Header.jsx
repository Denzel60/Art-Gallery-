import './components.css'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { GiPaintRoller } from "react-icons/gi";
// import { apiBASE } from '../../utils/config';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [menu, setMenu] = useState("Trending");
    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate("/")
    }

    return (
        <header>
            <div className="logo">
                <GiPaintRoller className="logo-icon" size={50} color="black" />
                <h3 className="logo-text">Art Gallery</h3>
            </div>

            <div className="navbar">
                <Link to="/"><li onClick={() => { setMenu("Trending") }}>Trending{menu === "Trending" ? <hr /> : <></>}</li></Link>
                <Link to="/Artists"><li onClick={() => { setMenu("Artists") }}>Artists{menu === "Artists" ? <hr /> : <></>}</li></Link>
                <Link to="/Services"><li onClick={() => { setMenu("Services") }}>Services{menu === "Services" ? <hr /> : <></>}</li></Link>
                <Link to="/"><button onClick={handleLogout}>Log out</button></Link>
            </div>
        </header>
    )
}

export default Header