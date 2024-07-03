// eslint-disable-next-line react/prop-types
import { IoLogInSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Image = ({ image }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('../../Login/Login.jsx');
    };

    return (
        <div className="image-cont">
            <img src={image} alt="" />
            <div className="login">
                <button type="button" onClick={handleLogin}>< IoLogInSharp size={50} /></button>
            </div>
        </div>
    )
}
export default Image