import React, { useState }  from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.css'



const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [err,setErr]=useState('')
    const navigate=useNavigate()

    const handleLogin=async(event)=>{
        event.preventDefault()
        try{
            await axios.post('http://localhost:5566/api/auth/login',{email,password})
            console.log("Registration successfull")
           
            navigate("/");
            
        }
        catch(err){
            setErr(err.response.data)
            console.error("Login FAiled",err.response)

        }
    }

    return(
        <>
        <h1 className='logintitle'>Login</h1>
        <form className="form" onSubmit={handleLogin}> 
        <div className="login-container">
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       
        <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button >Login</button>
        {<p className='error-message'>{err}</p>}
        </div>  
        </form>
        </>
    );
}
export default Login