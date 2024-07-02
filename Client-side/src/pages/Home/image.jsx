import './Home.css'
import bike from '../../assets/bike.jpeg'

function image() {
    return (
        <div>
            <img src={bike} alt="" />
            <img src={bike} alt="" />
            <img src={bike} alt="" />
            <img src={bike} alt="" />
        </div>
    )
}

export default image