import React from 'react'
import {MdBusiness,MdPeopleOutline} from 'react-icons/md'
import {FaChalkboardTeacher} from 'react-icons/fa'

function NumbersGame() {
  return (
    <div className='h-[70rem] md:w-full md:flex mt-10 md:h-[20rem] md:pl-16'>
        <div className='w-[13rem] hover:scale-105 mb-12 h-[15rem] bg-gradient-to-tr from-[#20A4F3] to-[#182B3A] rounded-br-xl rounded-tl-xl ml-40 translate-y-9 drop-shadow-[10px_10px_7px_rgba(0,0,0,0.50)]'>
            <MdBusiness size={75} className='pt-5 md:pt-0 md:mt-4 ml-[4.5rem] text-blond'/>
            <hr className='w-2/3 ml-9 md:translate-y-0 translate-y-3 pb-3 md:pb-0'/>
                <p className='font-extrabold text-4xl text-[#ffffff] ml-[4.8rem] mt-3'>25+</p>
                <p className='ml-[2rem] mt-3 text-lg text-blond'>Startups Incubated</p>
        </div>

        <div className='w-[13rem] hover:scale-105 mb-12 h-[15rem] bg-gradient-to-tr from-[#20A4F3] to-[#182B3A] rounded-br-xl rounded-tl-xl ml-40 translate-y-9 drop-shadow-[10px_10px_7px_rgba(0,0,0,0.50)]'>
            <MdPeopleOutline size={75} className='pt-5 md:pt-0 md:mt-4 ml-[4.5rem] text-blond'/>
            <hr className='w-2/3 ml-9 md:translate-y-0 translate-y-3 pb-3 md:pb-0'/>
                <p className='font-extrabold text-4xl text-[#ffffff] ml-[4.4rem] mt-3'>500+</p>
                <p className='ml-[4.5rem] mt-3 text-lg text-blond'>Aluminis</p>
        </div>

        <div className='w-[13rem] hover:scale-105 mb-12 h-[15rem] bg-gradient-to-tr from-[#20A4F3] to-[#182B3A] rounded-br-xl rounded-tl-xl ml-40 translate-y-9 drop-shadow-[10px_10px_7px_rgba(0,0,0,0.50)]'>
            <FaChalkboardTeacher size={75} className='pt-5 md:pt-0 md:mt-4 ml-[4.5rem] text-blond'/>
            <hr className='w-2/3 ml-9 md:translate-y-0 translate-y-3 pb-3 md:pb-0'/>
                <p className='font-extrabold text-4xl text-[#ffffff] ml-[4.8rem] mt-3'>100+</p>
                <p className='ml-[1.5rem] mt-3 text-lg text-blond'>Industry Connections</p>
        </div>
    </div>
  )
}

export default NumbersGame