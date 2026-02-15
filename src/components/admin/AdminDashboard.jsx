
import { useState } from "react";
import Volunteers from "./Volunteers";
import Home from "./Home";
import LostAndFound from "./LostAndFound";
import Complaints from "./Complaints";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
 const [activeItem, setActiveItem] = useState('home');
 const navigate=useNavigate()

  const renderContent = () => {
    switch(activeItem) {
      case 'register':
        return(<>
        <Volunteers/>
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
          <Complaints/>
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
    
      
      <div className="d-flex" style={{minHeight: '100vh'}}>
        {/* Sidebar */}
        <div className="bg-light text-primary shadow" style={{width: '250px', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto'}}>
          <div className="p-4 border-bottom border-secondary">
            <h4 className="mb-0"><i className="bi bi-mortarboard-fill me-2"></i>Faculty Portal</h4>
          </div>
          <nav className="nav flex-column mt-3">
            <button
              onClick={() => setActiveItem('home')}
              className={`nav-link text-start d-flex align-items-center  ${
                activeItem === 'home' ? 'bg-primary text-white' : 'text-primary'
              }`}
              style={{border: 'none', background: activeItem === 'home' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className={`bi bi-house-door me-3 text-primary ${
                activeItem === 'home' ? 'bg-primary text-white' : 'text-primary'
              }`}></i>
              Home
            </button>
            <button
              onClick={() => setActiveItem('register')}
              className={`nav-link text-start d-flex align-items-center ${
                activeItem === 'register' ? 'bg-primary text-white' : 'text-primary'
              }`}
              style={{border: 'none', background: activeItem === 'register' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className={`bi bi-journal-text me-3 text-primary${
                activeItem === 'register' ? 'bg-primary text-white' : 'text-primary'
              }`}></i>
               Volunteer
            </button>
   
            <button
              onClick={() => setActiveItem('lostandfound')}
              className={`nav-link text-start d-flex align-items-center ${
                activeItem === 'lostandfound' ? 'bg-primary text-white' : 'text-primary'
              }`}
              style={{border: 'none', background: activeItem === 'lostandfound' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className={`bi bi-box-seam me-3 text-primary ${
                activeItem === 'lostandfound' ? 'bg-primary text-white' : 'text-primary'
              }`}></i>
             Lost and Found
            </button>
            <button
              onClick={() => setActiveItem('complainttracker')}
              className={`nav-link text-start d-flex align-items-center ${
                activeItem === 'complainttracker' ? 'bg-primary text-white' : 'text-primary'
              }`}
              style={{border: 'none', background: activeItem === 'complainttracker' ? '' : 'transparent', padding: '12px 24px'}}
            >
              <i className={`bi bi-chat-text me-3 text-primary  ${
                activeItem === 'complainttracker' ? 'bg-primary text-white' : 'text-primary'
              }`}></i>
              complaint tracker
            </button>
            <hr className="border-secondary mx-3 border-primary" />
            <button
              onClick={handleLogout}
              className="nav-link text-start d-flex align-items-center text-primary"
              style={{border: 'none', background: 'transparent', padding: '12px 24px'}}
            >
              <i className="bi bi-box-arrow-right me-3 text-primary"></i>
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

export default AdminDashboard



