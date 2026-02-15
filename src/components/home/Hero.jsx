import hero from '../../assets/images/hero.png'
import CustomButton from '../common/CustomButton'
import 'animate.css';
const Hero = () => {
  return (
    <div className="container  h-50 mt-5">
        {/* left div  */}
        <div className="row h-100 ">
            <div className="col-md-6  d-flex align-items-center animate__animated animate__slideInLeft">

                <div className="d-flex flex-column gap-1" >
                    <p> Healing Hearts, Healing Lives</p>
                    <h1>Being Part Of 
Aid Foundation 
Is A Way To Share</h1>
<p>Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pulvinar maecenas neque. Sit tellus nunc enim cursus dolor ultrices sit ullamcorper aliqueorem aliquet.</p>

<CustomButton text="join us" classname="heroBtn"/>
                </div>
            </div>
  {/* right div  */}
            <div className="col-md-6 r h-100 animate__animated animate__slideInRight ">
                <div className="row h-100 d-flex ">
                    <div className="col-6 h-100 d-flex align-items-start justify-content-start" ><img src={hero} alt="" width={400}  /></div>
                    <div className="col-6 h-100 d-flex align-items-end justify-content-start "><img src={hero} alt="" width={300} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
