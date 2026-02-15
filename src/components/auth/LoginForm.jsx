import { useState } from 'react'
import Input from '../common/Input.jsx'
import google from '../../assets/images/google.png'
import CustomButton from "../common/CustomButton.jsx"
import Toggle from '../common/Toggle.jsx'
import {auth} from '../../config/firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
const LoginForm = () => {
  const [role, setRole] = useState(null)
  const [email,setEmail]=useState("")  
  const [password ,setPassword]=useState("")  

  const submithandler=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("login successfull ")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return (
    <div className='d-flex  flex-column gap-4 bg-white w-100 h-100 p-3 shadow '>
      <h1>Login</h1>

      <Input type='email' placeholder='Enter Email' value={email} setvalue={setEmail}/>
      <Input type='password' placeholder='Password' value={password} setvalue={setPassword}/>

      <div className='w-100 d-flex align-items-center flex-column gap-4'>
    <span className='d-flex m-auto gap-2' >  <button className='role-btn'>Student</button> <button className='role-btn'>Admin</button></span>
    <CustomButton classname="loginbtn" text="login" onClick={submithandler}/>
    <Toggle text="Don't have an account ? " link="/signup" linktext="Signup"/>
 <button className='d-flex align-items-center justify-content-center gap-2 border-0 p-1 googlebtn'> <img src={google} alt="" width={30} />Sign in with google </button>
 </div>
    </div>

  )
}

export default LoginForm
