import React,{useState} from 'react'
import NavBar from './NavBar'
import About from './About'
import NumbersGame from './NumbersGame'
import Timeline from './Timeline'
import ContactForm from './ContactForm'
// import Carousel from './Carousel'
// import Startup from './Startup'
// import './Startup.css'

const Homepage = () => {
  return (
    <div>
      <NavBar/>
      <About/>
      <NumbersGame/>
      {/* <Carousel/>
      <Startup/> */}
      <Timeline/>
      <ContactForm/>
    </div>
  )
}

export default Homepage
