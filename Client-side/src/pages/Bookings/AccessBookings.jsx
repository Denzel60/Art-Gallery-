import './Bookings.css'
import { useEffect, useState } from "react"
import { apiBASE } from '../../utils/config.js';
import { MoonLoader } from 'react-spinners'

function AccessBookings() {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${apiBASE}/api/users/getSpecificBooking`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();

                if (data.success === true) {
                    setBookings(data.data);
                    setLoading(false)
                } else {
                    setError(true)
                    setLoading(false)
                }
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        };

        fetchData();
    }, []);


    return (
        <div className="booking">
            {error && <h3>There was an error fetching data</h3>}
            {loading && <MoonLoader color={'black'} loading={loading} size={50} />}

            <h2>You have {bookings.length} bookings</h2>
            <div className="booking-cont">
                {bookings.map((booking, i) => (
                    <div key={i} className="card-body">
                        <h3 className="card-text">Booking Date: {booking.dateTime}</h3>
                        <h4 className="card-text">Your Phone Number: {booking.number}</h4>
                        <p className="card-title">Booking ID: {booking.userId}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AccessBookings