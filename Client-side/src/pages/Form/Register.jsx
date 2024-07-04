import './Forms.css'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true)

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(4, "First name must be at least 4 character")
            .max(15, "First name can not exceed 15 characters")
            .required("First name is required"),

        lastName: Yup.string()
            .min(4, "Last name must be at least 4 character")
            .max(15, "Last name can not exceed 15 characters")
            .required("Last name is required"),

        email: Yup.string().email('Invalid email').required('Email is required'),

        password: Yup.string()
            .min(4, "Password must be at least 4 character")
            .max(15, "Password can not exceed 15 characters")
            .required('Password is required'),

        cpassword: Yup.string()
            .min(4, "Password must be at least 4 character")
            .max(15, "Password can not exceed 15 characters")
            .required('Confirm Password is required')
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cpassword: ""
        },

        onSubmit: (values) => {
            console.log(values)
            navigate('/Dashboard');
        },
        validationSchema: validationSchema,

        validate: (formValues) => {
            if (!formValues.firstName || !formValues.lastName || !formValues.email || !formValues.password || !formValues.cpassword) {
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
                <input type="text" placeholder='Enter Your First Name' name='firstName' id="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.firstName && formik.errors.firstName && <div style={{ color: "red" }}>{formik.errors.firstName}</div>}

                <input type="text" placeholder='Enter Your Last Name' name='lastName' id="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.lastName && formik.errors.lastName && <div style={{ color: "red" }}>{formik.errors.lastName}</div>}


                <input type='email' placeholder="Enter Your Email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}

                <input type='password' placeholder="Enter Your Password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password && <div style={{ color: "red" }}>{formik.errors.password}</div>}

                <input type="password" placeholder="Confirm Your Password" name="cpassword" id="cpassword" value={formik.values.cpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.cpassword && formik.errors.cpassword && <div style={{ color: "red" }}>{formik.errors.cpassword}</div>}

                <button type="submit" disabled={disabled} >Sign Up</button>
                <h3>Already have an account, <a href="/Login">Login</a> to your account</h3>

            </form>

        </div>
    )
}

export default Register