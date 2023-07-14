import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Register() {
  const form_div = 'h-screen flex flex-col justify-center items-center'
  const form_des = 'flex flex-col justify-center items-center h-96 reg-width m-auto '
  const text_des = 'border p-1 w-3/4 my-2'
  const submit_des = 'border-2 p-1 w-3/4 my-2 hover:cursor-pointer hover:bg-gray-400 hover:text-white'
  const link_des = 'text-sm my-2 text-blue-600'
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [fname,setFname] = useState()
  const [lname,setLname] = useState()
  const [conPassword,setConpassword] = useState()
  const [isDisable, setDisable] = useState(true)
  const [eMessage,setEMessage] = useState("")
  const [pMessage,setPMessage] = useState("")
  const [preview, setPreview] = useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg')
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const handleEmail = (e) =>{
    setEmail(e.target.value)
    if(email === ""){
      setDisable(true);
      setEMessage("*Invalid Email ID")
      console.log(eMessage)
    }
    else if(!(emailPattern.test(email))){
      setDisable(true);
      setEMessage("*Invalid Email ID")
      console.log(eMessage)
    }
    else{
      setDisable(false)
    }
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
    if(password === ""){
      setDisable(true)
      setPMessage("*Invalid Password")
      console.log(pMessage)
    }
    else if(!(passwordPattern.test(password))){
      setDisable(true)
      setPMessage("*Invalid Password")
      console.log(pMessage)
    }
    else{
      setDisable(true)
    }
  }
  const handleFname = (e) =>{
    setFname(e.target.value)
  }
  const handleLname = (e) =>{
    setLname(e.target.value)
  }
  const handleConPassword = (e) =>{
    setConpassword(e.target.value)
  }
  const handleProfilePic = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPreview(reader.result)
      }
    }
  }
  return (
    <>
      <div className={form_div}>
        <form action='' className={form_des}>
          <h2 className="text-4xl mb-6">Register</h2>
          <div className="flex flex-row justify-between w-3/4">
            <input type="text" onChange={handleFname} className="w-2/4 border p-1 width-name my-2"   value={fname} placeholder='first name'/>
            <input type="text" onChange={handleLname} className="w-2/4 border p-1 width-name my-2"  value={lname} placeholder='last name'/>
          </div>
          <input type="email" onChange={handleEmail} placeholder='Email' value={email} className={text_des} />
          <input type="password"  onChange={handlePassword} placeholder='Password' value={password} className={text_des}/>
          <input type="password" onChange={handleConPassword} placeholder='Confirm Password' value={conPassword} className={text_des} />
          <div className='flex flex-col justify-center items-center'>
            <div className="h-40 w-40 rounded-full my-2 flex justify-center item-center">
              <img src={preview} alt="" className='rounded-full object-cover' />
            </div>
            <label htmlFor="profile" className='border-2 p-1.5 my-2 hover:cursor-pointer hover:bg-gray-400 hover:text-white'>
              <input type="file" name="profile" id="profile" accept='image/*' className='hidden' onChange={(e) => handleProfilePic(e)} />
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