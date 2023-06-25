import React from 'react'
import Abt from '../assets/about_start.webp'

const About = () => {
  return (
    <>

    <div className='flex mt-0 md:w-full bg-blond w-[30.5rem] h-[22rem]'>
      <div className='w-[30.5rem] py-4 md:py-1 md:w-1/2 pl-10 md:pl-32'>
        <h2 className='text-[#000000] text-3xl pb-4 pl-32 md:text-4xl md:pb-4 md:pl-40 md:mt-16 font-bold'>About Us</h2>
            <p className='text-justify text-[#000000] pr-6'>Out of the night that covers me,   
      Black as the Pit from pole to pole,   
    I thank whatever gods may be   
      For my unconquerable soul.   

    In the fell clutch of circumstance 
      I have not winced nor cried aloud.   
    Under the bludgeonings of chance   
      My head is bloody, but unbowed.   

    Beyond this place of wrath and tears   
      Looms but the Horror of the shade, 
    And yet the menace of the years   
      Finds, and shall find, me unafraid.   

    It matters not how strait the gate,   
      How charged with punishments the scroll,   
    I am the master of my fate:
      I am the captain of my soul.</p>
      </div> 

      <div className='w-0 h-0 md:w-1/2 md:pl-40'>
        {/* <img src={Abt} className='md:w-96 md:mt-8 md:pr-20 md:h-72 w-0 h-0'/> */}
        <iframe className='md:w-[35rem] md:-ml-10 md:-mt-20 md:pr-20 md:h-[30rem] md:drop-shadow-lg w-0 h-0' src="https://lottie.host/?file=bb753aec-57fd-4eab-ac3a-fecb70ab6da0/aY9ddSRQdt.json"></iframe>
        
      </div>
    </div>

    </>
  )
}

export default About
