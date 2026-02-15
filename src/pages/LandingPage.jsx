import Footer from '../components/home/Footer.jsx'
import Hero from '../components/home/Hero.jsx'
import NavbarMain from '../components/home/Navbar.jsx'

const LandingPage = () => {
  return (
    <div className='landingpage position-relative w-full'>
      
      <NavbarMain/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default LandingPage
