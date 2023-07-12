import React from 'react'
import { Transition } from '@headlessui/react';
import './Landing.css'
import logo from '../../../assets/logo.png';
import money from '../../../assets/money.png'
import briefcase from '../../../assets/briefcase.png'
import bulb from '../../../assets/bulb.png'
import rocket from '../../../assets/rocket.png'

const Landing = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex'>
      <div className='w-screen h-screen bg-gradient' >

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl p-8 mx-auto">

        <Transition
          show={isOpen} 
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <img src={logo} alt="Logo" className="-mt-28 z-40 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-[20rem] h-[20rem]" />
            <h1 className="text-4xl font-bold -mt-4 pl-28 text-blond z-40">Entrepreneurship Development Cell</h1>
            <p className="text-lg text-blond centerr" >Achieving the Perfect Amalgamation of Technical Expertise and Business Skills!</p>
          </div>
        
        <div className="icon-container icon-logo1">
          <img className="bbutton " src={money} alt="a small money logo" />
          <span class="tooltip">Money</span>
        </div>
        <div className="icon-container icon-logo2">
          <img className="bbutton" src={briefcase} alt="a small briefcase logo" />
          <span class="tooltip">Professionalism</span>
        </div>
        <div className="icon-container icon-logo3">
        <img className="bbutton" src={bulb} alt="a small bulb logo" />
        <span class="tooltip">Ideas</span>
        </div>
        <div className="icon-container icon-logo4">
        <img className="bbutton" src={rocket} alt="a small rocket logo" />
        <span class="tooltip">Growth</span>
        </div>
        </Transition>
      </div>
    </div>
      </div>

    </div>
  )
}

export default Landing

