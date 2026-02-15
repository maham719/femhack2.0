import CustomButton from "../common/CustomButton";
import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full  footer">
      <div className="container h-100">
        <div className="row h-50 d-flex align-items-center">
          <div className="col-md-6 ">
            <h1>Sign up for our Newsletter</h1>
            <p>Stay in the loop with everything you need to know.</p>
          </div>
          <div className="col-md-6  ">
            <div className="newsletter-input">
              <input type="email" placeholder="enter your email" />
              <CustomButton text="Subscribe" classname="subscribBtn" />
            </div>
          </div>
        </div>
        <div className="row w-100 h-50 ">
          <div className="col-md-8 ms-auto  w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <div className="w-100 d-flex justify-content-between align-items-center mb-4">
              <span className=" d-flex align-items-center w-50 justify-content-start">
                <img src={logo} alt=""  width={80} className="object-contain"/> <h3 className="m-0 p-0 text-white"></h3>{" "}
              </span>{" "}
              <ul className="icons w-50 d-flex align-items-center justify-content-end gap-3 ">
               <li> <FaFacebookF color="white" size={25} />   </li>
                <li><FaInstagram color="white" size={25} /></li>
                <li><FaTwitter color="white" size={25} /></li>
               <li> <FaLinkedinIn color="white" size={25} /></li>
              </ul>{" "}
            </div>
            <span className="w-100">
              
              <ul className="footer-links d-flex w-full justify-content-between align-items-lg-center text-dark mb-5 ">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>

              <p className="text-center">© 2023 Asra . All rights reserved.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
