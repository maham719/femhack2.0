import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import CustomButton from '../common/CustomButton';
import { useNavigate } from 'react-router-dom';

const NavbarMain = () => {
  const navigate=useNavigate()
  return (
    <Navbar className='navbar-bg' expand="lg" data-bs-theme="dark">
      <Container className=''>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
         
        </Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto list d-flex gap-4">
            <Nav.Link href="#home"  className='list-items'>Home</Nav.Link>
            <Nav.Link href="#features" className='list-items'>About Us</Nav.Link>
            <Nav.Link href="#pricing" className='list-items'>Services</Nav.Link>
            <Nav.Link href="#pricing" className='list-items'>Contact Us</Nav.Link>
          </Nav>

          {/* Buttons aligned to the right */}
          <div className="d-flex gap-2 mt-2 mt-lg-0">
            <CustomButton text="Login" classname="customBtn"onClick={() => navigate("/login")}/>
            <CustomButton text="Signup" classname="customBtn" onClick={() => navigate("/signup")}/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;