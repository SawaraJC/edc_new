// import React from 'react';
// import { useEffect, useState } from 'react'
// import './Landing.css'

// const FADE_INTERVAL_MS = 1750
// const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
// const WORDS_TO_ANIMATE = ['Success is the natural consequence of consistently applying the basic fundamentals.','If things are not failing, you are not innovating enough.','If you broke a lot of rules as a kid, you’d probably make a great entrepreneur.','Be yourself; everyone else is already taken','Be the change that you wish to see in the world.','If you obey all the rules, you miss all the fun']
// const citation = ['abc xyz', 'acbhdbd', 'vvjhgiudahc', 'ysacsc','yfscyg']

// type FadeProp = { fade: 'fade-in' | 'fade-out' }

// const Landing = () => {

//   const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
//   const [wordOrder, setWordOrder] = useState(0)

//   useEffect(() => {
//     const fadeTimeout = setInterval(() => {
//       fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
//     }, FADE_INTERVAL_MS)

//     return () => clearInterval(fadeTimeout)
//   }, [fadeProp])

//   useEffect(() => {
//     const wordTimeout = setInterval(() => {
//       setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
//     }, WORD_CHANGE_INTERVAL_MS)

//     return () => clearInterval(wordTimeout)
//   }, [])

//   return (

//     <div className='flex'>

//       <div className='invisible w-0 md:visible md:w-[30%] md:bg-light_navy'>
//         <img/>
//       </div>

//       <div className='w-[43.5rem] text-3xl md:w-[70%] pt-28 pl-12 text-center h-screen text-blond md:text-5xl font-bold bg-border_blue'>
//         <h2>
//           <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}
//             <hr className="w-64 h-[0.15rem] translate-y-12 translate-x-[8.4rem] my-8 bg-blond border-0 rounded dark:bg-gray-700"/>
//             <div className="absolute ml-12 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
//                 <svg aria-hidden="true" className="w-12 h-12 ml-[20rem] text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
//             </div>
//             <hr className="w-64 ml-[30rem] mt-9 translate-y-2 h-[0.15rem] my-8 bg-blond border-0 rounded dark:bg-gray-700"/>
//             <span className={fadeProp.fade} style={{fontSize:'2rem', alignItems:'center', paddingRight:'4rem', fontWeight:'lighter'}}>{citation[wordOrder]}</span>
//           </span>
//         </h2>
//       </div>




//     </div>
//   )
// }

// export default Landing



import React from 'react'
import { Transition } from '@headlessui/react';
import logo from '../assets/logo.png';

const Landing = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex'>
      <div className='w-screen h-screen' style={{ backgroundImage: `url('https://media.giphy.com/media/U4FkC2VqpeNRHjTDQ5/giphy-downsized-large.gif')` }}>

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
            <h1 className="text-4xl font-bold pl-28 -mt-4 text-blond z-40">Entrepreneurship Development Cell</h1>
            <p className="text-lg text-blond">Welcome to our website!</p>
          </div>
        </Transition>
      </div>
    </div>
      </div>

    </div>
  )
}

export default Landing

