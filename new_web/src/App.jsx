import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Social from './components/Social'
import About from './components/About'
import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      {/* <About/> */}
      <Landing/>
      {/* <Social/> */}
      <Footer/>
    </>
  )
}

export default App
