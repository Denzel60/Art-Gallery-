import './Forms.css'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true)

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
            navigate('/Dashboard');
        },
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