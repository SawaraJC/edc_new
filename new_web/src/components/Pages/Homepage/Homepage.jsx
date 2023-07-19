import React,{useState} from 'react'
import NavBar from './NavBar'
import About from './About'
import NumbersGame from './NumbersGame'
// import Time from './Time'
// import Time from './Time'
import TimeLine from './Timeline'
import ContactForm from './ContactForm'
import Footer from './Footer'
// import Carousel from './Carousel'
import Startup from './Startup'
// import './Startup.css'

const Homepage = () => {
  return (
    <div className='bg-gradient-to-r from-[#12100E] to-[#2B4162] md:w-full w-[30.5rem]'>
      <NavBar/>
      <About/>
      <NumbersGame/>
      {/* <Carousel/> */}
      <Startup/>
      <TimeLine/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Homepage
