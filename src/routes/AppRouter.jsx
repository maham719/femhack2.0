import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage.jsx"
import LandingPage from "../pages/LandingPage.jsx"
import UserDashboard from "../components/user/UserDashboard.jsx"
import AdminDashboard from "../components/admin/AdminDashboard.jsx"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import LostAndFound from "../components/user/LostAndFound.jsx"
import ComplaintTracker from "../components/user/ComplaintTracker.jsx"
import VolunteerRegistration from "../components/user/VolunteerRegistration.jsx"
const AppRouter = () => {
  const {user}=useContext(AuthContext)
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/login" element={user?<UserDashboard/>:<LoginPage/>}/>
    <Route path="/signup" element={<SignupPage/>} />
    <Route path="/userdashboard" element={<UserDashboard/>}/>
    <Route path="/lostandfound" element={<LostAndFound/>}/>
    <Route path="/complaint" element={<ComplaintTracker/>}/>
    <Route path="/volunteer" element={<VolunteerRegistration/>}/>
    <Route path="/admindashboard" element={<AdminDashboard/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRouter
