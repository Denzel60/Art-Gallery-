import './Forms.css'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { apiBASE } from '../../utils/config';
// import useUserInformationStore from '../../store/userInformationStore.js';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(false)
    // const captureUserInformation = useUserInformationStore((state) => state.captureUserInformation)
    // const userInformation = useUserInformationStore((state) => state.userInformation)

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    const handleSubmit = async (values) => {
        try {
            const response = await fetch(`${apiBASE}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
                credentials: "include"
            })
            const data = await response.json()

            if (data.success === true) {
                // console.log(data)
                navigate("/Dashboard")
                // captureUserInformation(data)
                // console.log(userInformation)
            } else {
                setError(data.message)
            }
        } catch (error) {
            console.log(error.message)
            setError(true)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: handleSubmit,
        validationSchema: validationSchema,

        validate: (formValues) => {
            if (!formValues.email || !formValues.password) {
                setDisabled(true)
            } else {
                setDisabled(false)
            }
        }
    })
    return (
        <div className='form'>
            <h2>Log In</h2>

            <form className='form-group' onSubmit={formik.handleSubmit}>
                {error && <p style={{ color: "red", fontSize: "20px", margin: "0" }}>There was an server error</p>}

                <input type='email' placeholder="Enter Your Email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
                <input type="password" placeholder="Enter Your Password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password && <div style={{ color: "red" }}>{formik.errors.password}</div>}
                <button type="submit" disabled={disabled} >Login</button>
                <h3>Do not have an account, <a href="/Register">Sign Up</a> for an account</h3>
            </form>
        </div>
    )
}

export default Login