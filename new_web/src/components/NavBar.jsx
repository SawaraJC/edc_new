// import React, { useState } from 'react'
// import {FaBars, FaTimes} from 'react-icons/fa'


// function NavBar() {

//     const [nav, setNav] = useState(false);

//     const links = [
//         {
//             id:1,
//             link:'about'
//         },

//         {
//             id:2,
//             link:'blogs'
//         },

//         {
//             id:3,
//             link:'initiatives'
//         },

//         {
//             id:4,
//             link:'team'
//         },

//         {
//             id:5,
//             link:'contact'
//         },
//     ]
//   return (
//     <div className='flex justify-between items-center w-full h-20 text-blond bg-navy'>
//          <div>
//             <h1 className='font-bold text-3xl ml-4 font-signature'>EDC VIIT</h1>
//          </div>

//          <ul className='hidden md:flex'>

//             {links.map(({id, link}) => (
//                 <li key={link.id} className='px-6 font-semibold cursor-pointer capitalize text-xl hover:font-bold'>{link}</li>
//             ))}
             
//          </ul>

//          <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
//             {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
//          </div>
        
//         {nav && (         
//         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-700'>
//          {links.map(({id, link}) => (
//                 <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>{link}</li>
//             ))}
//          </ul>
//          )}

//     </div>
//   )
// }

// export default NavBar


import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


function NavBar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link:'about'
        },

        {
            id:2,
            link:'blogs'
        },

        {
            id:3,
            link:'initiatives'
        },

        {
            id:4,
            link:'team'
        },

        {
            id:5,
            link:'contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-[43.5rem] md:w-full h-20 text-blond bg-navy'>
         <div>
            <h1 className='font-bold text-3xl ml-4 font-signature'>EDC VIIT</h1>
         </div>

         <ul className='hidden md:flex'>

            {links.map(({id, link}) => (
                <li key={id} className='px-6 font-semibold cursor-pointer capitalize text-xl hover:font-bold'>{link}</li>
            ))}
             
         </ul>

         <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
         </div>
        
        {nav && (         
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-[43.5rem] h-[89rem] bg-navy'>
         {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer font-extrabold capitalize py-6 text-4xl'>{link}</li>
            ))}
         </ul>
         )}

    </div>
  )
}

export default NavBar
