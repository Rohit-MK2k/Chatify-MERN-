import React,{useEffect, useState} from 'react'
// import { validEmail, validPassword } from '../Shared/Regex'
import { Link } from 'react-router-dom'

function Login() {
    const form_des = 'flex flex-col justify-center items-center h-96 w-96 m-auto '
    const login_des = 'border p-1 w-3/4 my-2'
    const password_des = 'border p-1 w-3/4 my-2'
    const submit_des = 'border-2 p-1 w-3/4 my-2 hover:cursor-pointer hover:bg-gray-400 hover:text-white disabled:bg-transparent disabled:text-black disabled:cursor-default'
    const link_des = 'text-sm my-2 text-blue-600'
    const form_div = 'h-screen flex flex-col justify-center items-center'
    
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [isDisable,setDisable] = useState(true)
    const [eMessage,setEMessage] = useState("")
    const [pMessage, setPMessage] = useState("")
    useEffect(() => {
        const debounce = setTimeout(() => {
            validateEmail()
        }, 4000)
        return () => {
            clearTimeout(debounce)
        }
    },[email])
    useEffect(() => {
        const debounce = setTimeout(() => {
            validatePassword()
        })
        return () => {
            clearTimeout(debounce)
        }
    },[password])
    //Email validation
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const validateEmail = () =>{
        if(email === ""){
            setDisable(true);
            setEMessage("*Please enter your email")
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
    //Password Validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
    const validatePassword = (e) =>{
        
        if(password === ""){
            setDisable(true)
            setPMessage("*Please enter your password")
            console.log(pMessage)

        }
        else if(!(passwordPattern.test(password))){
            setDisable(true)
            setPMessage("*Invalid Password")
            console.log(pMessage)
        }
        else{
            setDisable(false)
        }
    }
    
    
    return (
        <>
            <div className={form_div}>
                <form action="" className={form_des}>
                    <h2 className='text-4xl mb-6'>Log In</h2>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} id="" placeholder='Email' value={email} className={login_des} />
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' value={password} className={password_des} />
                    <input type="submit" value="Log In" disabled = {isDisable} className={submit_des} />
                    <Link to='/signup' className={link_des}>I don't have an account</Link>
                </form>
            </div>
        </>
    )
}

export default Login