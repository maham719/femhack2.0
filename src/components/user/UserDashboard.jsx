import { useState } from "react";
import VolunteerRegistration from "./VolunteerRegistration";
import Home from "./Home";
import ComplaintTracker from "./ComplaintTracker";
import LostAndFound from "./LostAndFound";
import logo from '../../assets/images/logo.png'


import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const UserDashboard = () => {
 const [activeItem, setActiveItem] = useState('home');
const navigate=useNavigate()
  const renderContent = () => {
    switch(activeItem) {
      case 'register':
        return(<>
        <VolunteerRegistration/>
        </>)
      case 'home':
        return (
         <Home/>
        );
      
    

      case 'lostandfound':
        return (
        <LostAndFound/>
        );

      case 'complainttracker':
        return (
          <ComplaintTracker/>
        );

      default:
        return null;
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {

 console.log("Sign-out successful.")
navigate("/")
}).catch((error) => {
  console.log(error)
});
  };

  return (
    <>
     
      
      <div className="d-flex " style={{minHeight: '100vh'}}>
        {/* Sidebar */}
        <div className="bg-light text-primary shadow" style={{width: '250px', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto'}}>
          <div className="p-4 border-bottom border-secondary">
            <h4 className="mb-0"><i className="bi bi-mortarboard-fill me-2"></i><img src={logo} alt="" width={100}/></h4>
          </div>
          <nav className="nav flex-column mt-3">
            <button
              onClick={() => setActiveItem('home')}
              className={`nav-link text-start d-flex align-items-center ${
                activeItem === 'home' ? 'bg-primary text-white' : 'text-primary'
              }`}
              style={{border: 'none', background: activeItem === 'home' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className="bi bi-house-door me-3"></i>
              Dashboard
            </button>
            <button
              onClick={() => setActiveItem('register')}
              className={`nav-link text-start d-flex align-items-center ${
                activeItem === 'register' ? 'bg-primary text-white' : 'text-primary'
              }`}
              style={{border: 'none', background: activeItem === 'register' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className="bi bi-journal-text me-3"></i>
               Volunteer
            </button>
   
            <button
              onClick={() => setActiveItem('lostandfound')}
              className={`nav-link text-start d-flex align-items-center ${
                activeItem === 'lostandfound' ? 'bg-primary text-white' : 'text-primart'
              }`}
              style={{border: 'none', background: activeItem === 'lostandfound' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className="bi bi-box-seam me-3"></i>
             Lost and Found
            </button>
            <button
              onClick={() => setActiveItem('complainttracker')}
              className={`nav-link text-start d-flex align-items-center ${
                activeItem === 'complainttracker' ? 'bg-primary text-white' : 'text-primary'
              }`}
              style={{border: 'none', background: activeItem === 'complainttracker' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className="bi bi-chat-text me-3"></i>
              complaint tracker
            </button>
            <hr className="border-secondary mx-3" />
            <button
              onClick={handleLogout}
              className="nav-link text-start d-flex align-items-center text-primary"
              style={{border: 'none', background: 'transparent', padding: '12px 24px'}}
            >
              <i className="bi bi-box-arrow-right me-3"></i>
              Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-fill dashboard-body" style={{ overflowY: 'auto'}}>
          <div className="p-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard
