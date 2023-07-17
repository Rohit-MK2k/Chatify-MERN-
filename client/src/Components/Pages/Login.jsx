import React,{useEffect, useState} from 'react'
// import { validEmail, validPassword } from '../Shared/Regex'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'




function Login() {
    const form_des = 'flex flex-col justify-center items-center h-96 reg-width m-auto '
    const text_des = 'border p-1 w-3/4 '
    const submit_des = 'border-2 p-1 w-3/4 my-2 hover:cursor-pointer hover:bg-gray-400 hover:text-white disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black'
    const link_des = 'text-sm my-2 text-blue-600'
    const form_div = 'h-screen flex flex-col justify-center items-center'
    const error = 'text-sm text-red-600 flex flex-col justify-start p-1 w-3/4 h-5 mb-3'

    const [disabled, setDisable] = useState(true)
    
    const validate = values => {
    const errors = {}
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
    if (!values.email) {
        errors.email = '*Required'
    }
    else if (!emailPattern.test(values.email)) {
        errors.email = '*Invalid Email ID'
    }
    else {
        setDisable(false)
    }
    if (!values.password) {
        errors.password = '*Required'
    }
    else if (!passwordPattern.test(values.password)) {
        errors.password = '*Invalid Password'
    }
    else {
        setDisable(false)
    }
    return errors
}

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        },
    })
    console.log(formik.errors)

    return (
        <>
            <div className={form_div}>
                <form action="" className={form_des} onSubmit={formik.handleSubmit}>
                    <h2 className='text-4xl mb-6'>Log In</h2>
                    <input type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" name='email' placeholder='Email' value={formik.values.email} className={text_des} />
                    {formik.touched.email && formik.errors.email ? <div className={error}>{formik.errors.email}</div>:<div className={error}></div>}
                    <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Password' id='password' name='password' value={formik.values.password} className={text_des} />
                    {formik.touched.password && formik.errors.password ? <div className={error}>{formik.errors.password}</div>:<div className={error}></div>}
                    <input type="submit" value="Log In" disabled = {disabled} className={submit_des} />
                    <Link to='/signup' className={link_des}>I don't have an account</Link>
                </form>
            </div>
        </>
    )
}

export default Login