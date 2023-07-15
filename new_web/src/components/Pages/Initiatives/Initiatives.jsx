import React from 'react'
import NavBar from '../Homepage/NavBar'
import Footer from '../Homepage/Footer'

const Initiatives = () => {
  return (
    <div className='bg-gradient-to-r from-[#12100E] to-[#2B4162] md:w-full w-[30.5rem] h-[100vh]'>
      <NavBar/>
      <div>
        <h2 className='text-blond text-3xl pb-4 pl-32 md:text-4xl md:pb-4 md:pl-[25rem] md:mt-16 font-bold'>Our Initiatives</h2>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Initiatives
