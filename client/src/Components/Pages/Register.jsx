import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useFormik } from 'formik'



function Register() {
  const form_div = 'h-screen flex flex-col justify-center items-center'
  const form_des = 'flex flex-col justify-center items-center h-96 reg-width m-auto '
  const text_des = 'border p-1 w-3/4 '
  const submit_des = 'border-2 p-1 w-3/4 my-2 hover:cursor-pointer hover:bg-gray-400 hover:text-white disabled:cursor-not-allowed disabled:bg-transparent disabled:text-black'
  const link_des = 'text-sm my-2 text-blue-600'
  const error = 'text-sm text-red-600 flex flex-col justify-start p-1 w-3/4 h-5 mb-3'
  const [isDisable, setDisable] = useState(true)
  const [preview, setPreview] = useState()
  
  
  const validate = values => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
    const errors = {}
    if (!values.firstName) {
      errors.firstName = '*Required'
      setDisable(true)
    }
    else {
      setDisable(false)
    }
    if (!values.lastName) {
      errors.lastName = '*Required'
      setDisable(true)
    }
    else {
      setDisable(false)
    }
    if (!values.email) {
      errors.email = '*Required'
      setDisable(true)
    }
    else if (!emailPattern.test(values.email)) {
      errors.email = '*Invalid Email ID'
      setDisable(true)
    }
    else {
      setDisable(false)
    }
    if (!values.password) {
      errors.password = '*Required'
      setDisable(true)
    }
    else if (!passwordPattern.test(values.password)) {
      errors.password = '*Invalid Password'
      setDisable(true)
    }
    else {
      setDisable(false)
    }
    if (!values.conPassword) {
      errors.conPassword = '*Required'
      setDisable(true)
    }
    else if (!passwordPattern.test(values.conPassword)) {
      errors.conPassword = '*Invalid Password'
      setDisable(true)
    }
    else if (values.password !== values.conPassword) {
      errors.conPassword = '*Password not matching'
      setDisable(true)
    }
    else {
      setDisable(false)
    }
  return errors
}
  
  
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      conPassword: '',
      profilePic: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
      console.log(values.profilePic)
    },
  })
  

  return (
    <>
      <div className={form_div}>
        <form action='' className={form_des} onSubmit={formik.handleSubmit}>
          <h2 className="text-4xl mb-6">Register</h2>
          <div className="flex flex-row justify-between w-3/4">
            <div className='w-2/4 flex flex-col width-name'>
              <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full border p-1  " name='firstName' value={formik.values.firstName} placeholder='first name' />
              {formik.touched.firstName && formik.errors.firstName ? <div className={error}>{formik.errors.firstName}</div>:<div className={error}></div>}
            </div>
            <div className='w-2/4 flex flex-col width-name'>
              <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full border p-1" name='lastName' value={formik.values.lastName} placeholder='last name' />
              {formik.touched.lastName && formik.errors.lastName ? <div className={error}>{formik.errors.lastName}</div>:<div className={error}></div>}
            </div>
          </div>
          <input type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Email' name='email' value={formik.values.email} className={text_des} />
          {formik.touched.email && formik.errors.email ? <div className={error}>{formik.errors.email}</div>:<div className={error}></div>}
          <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Password' name='password' value={formik.values.password} className={text_des} />
          {formik.touched.password && formik.errors.password ? <div className={error}>{formik.errors.password}</div>:<div className={error}></div>}
          <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Confirm Password' name='conPassword' value={formik.values.conPassword} className={text_des} />
          {formik.touched.conPassword && formik.errors.conPassword ? <div className={error}>{formik.errors.conPassword}</div>:<div className={error}></div>}
          <div className='flex flex-col justify-center items-center'>
            <div className="h-40 w-40 rounded-full my-2 flex justify-center item-center">
              <img src={preview} alt="" className='rounded-full object-cover' />
            </div>
            <label htmlFor="profile" className='border-2 p-1.5 my-2 hover:cursor-pointer hover:bg-gray-400 hover:text-white'>
              <input type="file" name="profilePic" id="profile" accept='image/*' className='hidden' onChange={(e) => {
                const files = e.target.files[0]
                if (files) {
                  const reader = new FileReader()
                  reader.readAsDataURL(files)
                  reader.onloadend = () => {
                    setPreview(reader.result)
                    formik.setFieldValue('profilePic', reader)
                  }
                }
              }} />
              Upload you Profile Picture
            </label>
          </div>
          <input type="submit" value="Submit" disabled = {isDisable} className={submit_des} />
          <Link to='/login' className={link_des}>Already have a Account</Link>
        </form>

      </div>
    </>
  )
}

export default Register