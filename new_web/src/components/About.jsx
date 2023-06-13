import React from 'react'
import Abt from '../assets/about_start.webp'

const About = () => {
  return (
    <>

    <div className='flex mt-5 w-[43.5rem] bg-navy h-[22rem]'>
        <div className='w-[20rem] rounded-r-[150px] bg-blond h-[22rem]'>
            <img src={Abt} className='w-[20rem] rounded-r-[150px] bg-blond h-[20rem]'/>
        </div>

        <div className='w-[23.5rem] bg-navy h-[20rem]'>
        <h1 className='pl-4 text-3xl pt-5 font-extrabold text-blond'>About us</h1>
        <p className='text-blond pl-5 pt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit saepe adipisci non amet sint ea magnam praesentium unde facere? Ipsum labore assumenda ea quibusdam cumque eos accusantium in inventore voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit temporibus illum, sapiente voluptatem illo consequuntur commodi explicabo fugit? Alias accusamus necessitatibus dolore tempora est distinctio vel illum doloribus voluptatem cumque!</p>
        </div>
      
    </div>

    </>
  )
}

export default About
