import './components.css'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { GiPaintRoller } from "react-icons/gi";
import { apiBASE } from '../utils/config';
// import { useNavigate } from 'react-router-dom';
import useUsernameStore from '../store/userInformationStore';
// import Protected from './Protected/Protected';

function Header() {

    const user = useUsernameStore(state => state.user)
    const [menu, setMenu] = useState("Trending");
    // const [userName, setUserName] = useState(null);
    // const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch(`${apiBASE}/api/users/logout`, {
                method: 'GET',
                credentials: "include"
            })
        } catch (error) {
            console.log(error.message)
        }
    }


    // if (!user) {
    //     setUserName("")
    // } else {
    //     setUserName(user.firstName)
    // }


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
                <Link to="/AccessBookings"><li onClick={() => { setMenu("AccessingBookings") }}>AccessBookings{menu === "AccessBookings" ? <hr /> : <></>}</li></Link>
                <h4>{user.firstName}</h4>
                {/* <h4><Protected>{user.firstName}</Protected></h4> */}
                <img src="" alt="" />
                <Link to="/"><button onClick={handleLogout}>Log out</button></Link>
            </div>
        </header>
    )
}

export default Header