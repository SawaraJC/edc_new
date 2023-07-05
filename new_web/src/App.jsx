import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Social from './components/Social'
import About from './components/About'
import Landing from './components/Landing'
import ContactForm from './components/ContactForm'
import Carousel from './components/Carousel'
import Startup from './components/Startup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      {/* <About/> */}
      {/* <Landing/> */}
      {/* <Social/> */}
      {/* <Startup/> */}
      {/* <Try/> */}
      {/* <Trial/> */}
      <Carousel/>
      {/* <ContactForm/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
