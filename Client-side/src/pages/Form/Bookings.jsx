import './Forms.css'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { apiBASE } from '../../utils/config';
import { useNavigate } from 'react-router-dom';

function Bookings() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const validationSchema = Yup.object({
        dateTime: Yup.date().required('Date and Time required is required'),
        location: Yup.string().required('Location is required'),
        number: Yup.number().required('Phone number is required')
    })

    const handleSubmit = async (values) => {
        try {
            setError(false)
            setLoading(true)
            const response = await fetch(`${apiBASE}/api/users/bookings`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values),
                credentials: 'include'
            })
            // const response = await axios.post(`${apiBASE}/api/users/register`, values)
            const data = await response.json();
            console.log(data)
            setLoading(false)
            if (data.success === true) {
                navigate("/Services")
            } else {
                setError("Unauthorized")
            }
        } catch (error) {
            console.log(error.message)
            setError(true)
            setLoading(false)
        }
    }

    const formik = useFormik({
        initialValues: {
            dateTime: "",
            location: "",
            number: "",
        },
        onSubmit: handleSubmit,
        validationSchema: validationSchema,

        validate: (formValues) => {
            if (!formValues.dateTime || !formValues.location) {
                setDisabled(true)
            } else {
                setDisabled(false)
            }
        }
    })

    return (
        <div className='form'>
            <h2>Bookings</h2>

            <form className='form-group' onSubmit={formik.handleSubmit}>
                {error && <p style={{ color: "red", fontSize: "20px", margin: "0" }}>There was an server error</p>}

                <input type="datetime-local" id="dateTime" name="dateTime" value={formik.values.dateTime} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.dateTime && formik.errors.dateTime && <div style={{ color: "red" }}>{formik.errors.dateTime}</div>}
                <input type='text' placeholder="Enter Your Location" name="location" id="location" value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.location && formik.errors.location && <div style={{ color: "red" }}>{formik.errors.location}</div>}
                <input type='number' placeholder="Enter Your Phone Number" name="number" id="number" value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.number && formik.errors.number && <div style={{ color: "red" }}>{formik.errors.number}</div>}
                <button type="submit" disabled={disabled} >Book</button>
                {loading && <p style={{ color: "white", fontSize: "20px", margin: "0" }}>Loading...</p>}

            </form>
        </div>
    )
}

export default Bookings