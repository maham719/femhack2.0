import Input from '../common/Input.jsx'
import google from '../../assets/images/google.png'
import CustomButton from "../common/CustomButton.jsx"
import { useState } from 'react'
import Toggle from '../common/Toggle.jsx'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase.js'

const SignupForm = () => {
    const [role, setRole] = useState(null)
      const [username,setUsername]=useState("")  
      const [email,setEmail]=useState("")  
  const [password ,setPassword]=useState("")  
  

  const submithandler=()=>{
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("signup successfull ")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
}  
  return (
    <div className='d-flex  flex-column gap-4 bg-white w-100 h-100 p-3 shadow '>
      <h1>Signup</h1>

      <Input type='text' placeholder='username' value={username} setvalue={setUsername}/>
      <Input type='email' placeholder='Enter Email' value={email}  setvalue={setEmail}/>
      <Input type='password' placeholder='Password' value={password} setvalue={setPassword}/>

      <div className='w-100 d-flex align-items-center flex-column gap-4'>
    <span className='d-flex m-auto gap-2' >  <button className='role-btn'>Student</button> <button className='role-btn'>Admin</button></span>
    <CustomButton classname="loginbtn" text="Signup" onClick={submithandler}/>
    <Toggle text="Already have an account ? " link="/login" linktext="Login"/>

 <button className='d-flex align-items-center justify-content-center gap-2 border-0 p-1 googlebtn'> <img src={google} alt="" width={30} />Sign in with google </button>
 </div>
    </div>

  )
}


export default SignupForm
