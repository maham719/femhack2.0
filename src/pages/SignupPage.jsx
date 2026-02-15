import SignupForm from "../components/auth/SignupForm"
import logo from "../assets/images/logo.png"

const SignupPage = () => {
  return (
      <div className="h-100 container w-100 ">
      <div className="row  m-auto">
        <div className="col-md-8 d-flex flex-column justify-content-around">
          <img src={logo} width={150} alt="" /> 
          <span className="w-50">
          <h1>Campus Portal</h1>
          <p>Manage Reports , Coomplaints & Events in one place</p>
          </span>
        </div>
        <div className="col-md-4  mt-5">
      <SignupForm/>
        </div>
      </div>
    </div>
  )
  
}

export default SignupPage
