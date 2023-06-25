import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Social from './components/Social'
import About from './components/About'
import Landing from './components/Landing'
import ContactForm from './components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <About/>
      {/* <Landing/> */}
      {/* <Social/> */}
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
