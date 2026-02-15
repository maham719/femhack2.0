import { RiErrorWarningFill } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import { BsJournalMedical } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {  useState } from 'react';
import Input from '../common/Input.jsx'
import CustomButton from '../common/CustomButton';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase.js';

const Home = () => {

   const [department, setDepartment] = useState("");
    const [availability, setaVailability] = useState("");
    const [fullname,setFullname]=useState("")
    const [cnic,setCnic] =useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [city,setCity]=useState("")
    const [address ,setAddress]=useState("")
    const [experience ,setExperience]=useState("")
  const [category,getcategory]=useState("")
  const [complaintdetails,setComplaintDet]=useState("")
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const[lostorfound,setLostorFound]=useState("")


    const sendComplaint=async()=>{
       try {
      const docRef = await addDoc(collection(db, "complaints"), {
        category,
        complaintdetails
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    }
    const sendData=async()=>{
        try {
      const docRef = await addDoc(collection(db, "volunteers"), {
        fullname,
        cnic,
    email,
    phone,
    city,
    address,
    department,
    experience,
    availability
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
      }
    
      const handleChange = (event) => {
    setDepartment(event.target.value);
  };
     const getAvialiblity = (event) => {
    setaVailability(event.target.value);
  };
   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   const [complaint, setComplaint] = useState(false);
  const closeComplaint = () => setComplaint(false);
  const handleComplaint = () => setComplaint(true);
 
 const [lostfound, setLostfound] = useState(false);
  const closeLostfound= () => setLostfound(false);
  const handleLostfound = () => setLostfound(true);

  return (
    
    <div className="container">
    <Modal
        show={lostfound}
        onHide={closeLostfound}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Lost/Found items Registration </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-2">
          <select name="" id="">
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
           <button className="complaintbtn">Upload image</button>
<Input type="text" placeholder="Title" value={fullname} setvalue={setFullname}/>
        <Input type="number" placeholder="Description" value={cnic} setvalue={setCnic}/>   

        <CustomButton text="Register Complaint"  classname="complaintbtn ms-auto"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeComplaint}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    
      <Modal
        show={complaint}
        onHide={closeComplaint}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register Complaint</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <select name="" id=""  value={category} onChange={(e)=>getcategory(e.target.value)} className='w-100 mb-4'>
          <option value="">
          Category

          </option>
          <option value="internet">Internet</option>
          <option value="electricity">Electricity</option>
          <option value="water">Water</option>
          <option value="maintenance,">Maintenance,</option>
        </select>
             <h6>complaint Details</h6>
        <textarea name="" id="" className="w-100" placeholder="complaint details" value={complaintdetails} onChange={(e)=>setComplaintDet(e.target.value)}> </textarea>
        <CustomButton text="Register Complaint" onClick={sendComplaint} classname="complaintbtn ms-auto"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeComplaint}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

      {/* volunteer registration  form */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Volunteer Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="m-auto  bg-white rounded-2 p-4">
        <h4>Personal Info</h4>
        <div className='d-flex flex-column gap-2'>
        <Input type="text" placeholder="FullName" value={fullname} setvalue={setFullname}/>
        <Input type="number" placeholder="CNIC" value={cnic} setvalue={setCnic}/>   
        <Input type="email" placeholder="Email" value={email} setvalue={setEmail}/>   
        <Input type="phone" placeholder="Phone" value={phone} setvalue={setPhone}/>   
        <Input type="text" placeholder="City" value={city} setvalue={setCity}/>   
        <Input type="text" placeholder="Address" value={address} setvalue={setAddress}/>  


        </div>
        <h4>Volunteer Department</h4>
        <select name="" id=""  value={department} onChange={handleChange} className='w-100'>
          <option value="">
          Department

          </option>
          <option value="Food Distribution">Food Distribution</option>
          <option value="Disaster Relief">Disaster Relief</option>
          <option value="IT Training">IT Training</option>
          <option value="Medical Camp">Medical Camp</option>
          <option value="Fundraising">Fundraising</option>
        </select>

        <h4>Experience</h4>
        <textarea name="" id="" className='w-100' value={experience} onChange={(e)=>setExperience(e.target.value)}></textarea>

        <h4>Availability</h4>
        <select name="" id="" value={availability} onChange={getAvialiblity} className='w-100'>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
          <option value="Emergency">Emergency</option>
        </select>
        <CustomButton text="Register as Volunteer" classname="m-auto mt-4 dashbtn" onClick={sendData}/>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
      <div className="row d-flex gap-4 justify-content-around">
        <div className="col-md-2 box">
         <h5>Total Reports</h5>
         <h1>28</h1>
        </div>
        <div className="col-md-2  box">
          <h5>Active Complaints</h5>
         <h1>5</h1>
        </div>
        <div className="col-md-2  box">
          <h5>Items Matched</h5>
         <h1>12</h1>
        </div>
        <div className="col-md-2  box">
          <h5>Events Registered</h5>
         <h1>28</h1>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h1>Recent Activity</h1>
          <p>no recent activities</p>
        </div>
      </div>

      <div className="row">

        <div className="col-md-4"><button className='dashbtn' onClick={handleLostfound}><MdReportProblem color='#66b032' size={25}/>Report lost item</button></div>
        <div className="col-md-4"><button  className='dashbtn' onClick={handleComplaint}><RiErrorWarningFill  color='#66b032' size={25}/> Submit Complaint </button></div>
        <div className="col-md-4">
        <button  className='dashbtn' onClick={handleShow}> <BsJournalMedical  color='#66b032' size={25}/>Register For Event</button></div>
      </div>
      
    </div>
  )
}

export default Home
