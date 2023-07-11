import React from 'react'
import logo from '../../../assets/logo.png'
import {FaInstagramSquare,FaLinkedin,FaTwitter,FaYoutube} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"

// const Footer = () => {
//   return (
    
//     <div className='bg-navy w-max flex pt-5 md:w-full md:h-96 md:bg-navy md:flex md:pt-0'>

      
//         <div className='invisible w-48 h-24 pt-3 pl-4 md:w-48 md:h-32 md:visible'>
//           <img className='h-24 w-40 mt-6 pl-16 ml-2 md:h-28 md:w-44' src={logo}/>
//           <h2 className='text-blond text-lg pl-12 mt-6 md:text-blond md:mt-6 md:text-3xl md:font-bold md:pl-6 md:text-justify'>Entrepreneurship</h2>
//           <h2 className='text-blond text-lg pl-12 ml-2 md:text-blond md:text-3xl md:font-bold md:pl-10 md:ml-0'>Development</h2>
//           <h2 className='text-blond text-lg pl-16 ml-2 md:text-blond md:text-3xl md:font-bold md:pl-12 md:ml-0'>Cell, VIIT</h2>
//         </div>
      
      
//         <div className='text-blond text-xl pl-0 -ml-32 pt-5 font-bold md:text-blond md:text-2xl md:font-bold md:pl-40 md:mt-12 md:ml-0'>
//           <h2>Quick Links</h2>
//           <ul className='text-blond text-md font-thin pt-2 md:text-blond md:text-lg md:font-semibold md:pt-2'>
//             <li className='md:pl-4'>About</li>
//             <li className='md:pl-4'>Blogs</li>
//             <li className='md:pl-4'>Initiatives</li>
//             <li className='md:pl-4'>Our Team</li>
//             <li className='md:pl-4'>Contact</li>
//           </ul>
//         </div>

//       <div className='text-blond text-xl font-bold pl-12 mt-5 md:text-blond md:text-2xl md:font-bold md:pl-20 md:mt-16'>
//         <h2 className='pl-3 md:pl-1'>Follow us on</h2>
//         <div className='flex'>
//           <a  href='https://www.instagram.com/edcviit/' target='_blank'>
//             <FaInstagramSquare size={36} className='pt-3'/>
//           </a>

//           <a  href='https://www.linkedin.com/company/entrepreneurship-development-cell-viit/mycompany/' target='_blank'>
//             <FaLinkedin size={36} className='pt-3'/>
//           </a>

//           <a  href='https://twitter.com/EdcViit' target='_blank'>
//             <FaTwitter size={36} className='pt-3'/>
//           </a>

//           <a  href='https://youtube.com/@edcviit' target='_blank'>
//             <FaYoutube size={36} className='pt-3'/>
//           </a>

//         </div>
        
//       </div>

//       <div className='text-blond text-xl font-bold pt-5 pl-12 md:text-blond md:text-2xl md:font-bold md:pl-20 md:mt-12'>
//         <h2 className='pl-2 pb-4 md:pl-6 md:pb-2'>Contact Us</h2>
//         <div className='pb-4'>
//           <a href='mailto:edc@viit.ac.in' className='font-thin md:font-semibold md:text-lg '>Email: edc@viit.ac.in </a>
//         </div>

//         <div>
//           <a href='tel:8668351747' className='font-thin md:font-semibold md:text-lg'>Phone no.: +91 8668351747 </a>
//         </div>

//         <div>
//           <a href='tel:8888888888' className='font-thin md:font-semibold md:text-lg'>+91 8888888888 </a>       
//         </div>

//         <div className='pt-4'>
//           <a href='https://goo.gl/maps/o1FJZxkyeCEH4WLW8' target='_blank' className='font-thin md:font-semibold md:text-lg'>Address: EDC HQ, VIIT Campus,<br/> Kondhwa, Pune-48</a>
//         </div>
        
//       </div>

//       <div className='invisible w-5 md:w-80 md:visible'>
//         <a href='https://www.google.co.in/maps/place/EDC+VIIT/@18.4605415,73.8817141,17z/data=!4m6!3m5!1s0x3bc2eaf473dfa6d3:0x254f86fb9c3da40d!8m2!3d18.4605364!4d73.884289!16s%2Fg%2F11g65fzpkt?entry=ttu' target='_blank'>
//           <iframe
//             title="EDC address"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.510057981493!2d73.88171407387703!3d18.460541471007737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf473dfa6d3%3A0x254f86fb9c3da40d!2sEDC%20VIIT!5e0!3m2!1sen!2sin!4v1685876557402!5m2!1sen!2sin"
//             className="w-80 h-80 ml-5 pt-10"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </a>
//       </div>

      
//     </div>
//   )
// }

// export default Footer


const Footer = () => {
  return (
    <div className='w-[30.5rem] bg-navy h-96 md:w-full md:h-80 md:flex' >
      <div className='flex md:flex-col'>
        <div className='w-[13.5rem] md:w-[15.5rem] border-r-2 border-blond h-24 mt-5 md:mt-3 md:border-none'>
          <img src={logo} className='w-20 h-20 ml-28 mt-3 md:ml-24 md:w-40 md:h-40'/>
        </div>

        <div className='w-[10rem] text-blond mt-8 pl-5 md:mt-24 md:text-xl md:ml-20 md:font-semibold'>
          <h2 className='md:pl-0'>Enterpreneurship</h2>
          <h2 className='md:pl-3'>Development</h2>
          <h2 className='md:pl-6'>Cell, VIIT</h2>
        </div>

      </div>

      <div className='ml-5 md:ml-12'>
        <h2 className='text-blond mt-8 ml-2 font-medium text-md'>Quick Links</h2>
        <ul>
          <li className='pl-2 text-blond font-thin text-sm md:text-lg'>About</li>
          <li className='pl-2 text-blond font-thin text-sm md:text-lg'>Blogs</li>
          <li className='pl-2 text-blond font-thin text-sm md:text-lg'>Team</li>
          <li className='pl-2 text-blond font-thin text-sm md:text-lg'>Initiatives</li>
        </ul>
      </div>

      <div className='text-blond ml-8'>  
      <h2 className='text-blond -mt-28 ml-28 pt-2 font-medium text-md md:text-blond md:mt-5 md:ml-12 md:font-medium md:text-lg'>Follow us</h2>
      <div className='ml-28 flex'>
        <div className='-ml-1'>
          <a  href='https://www.instagram.com/edcviit/' target='_blank'>
            <GrInstagram size={35} className='pt-3'/>
          </a>
        </div>
        <div className='-ml-1 md:-ml-24'>
          <a  href='https://www.linkedin.com/company/entrepreneurship-development-cell-viit/mycompany/' target='_blank'>
             <FaLinkedin size={36} className='pt-3'/>
          </a>
        </div>
      </div>

      <div className='ml-28 flex'>
        <div className='-ml-1'>
          <a  href='https://twitter.com/EdcViit' target='_blank'>
             <FaTwitter size={36} className='pt-3'/>
          </a>
        </div>
        <div className='-ml-1 md:-ml-24'>
          <a  href='https://youtube.com/@edcviit' target='_blank'>
             <FaYoutube size={36} className='pt-3'/>
          </a>
        </div>
      </div>
      </div>

      <div className='text-blond ml-64 -mt-28 md:ml-24 md:mt-4'>
        <h2 className='text-blond pt-4 font-medium text-md'>
          Contact us
        </h2>

        <div className='py-3'>
          <a href='mailto:edc@viit.ac.in' className='font-thin md:text-lg '>Email: edc@viit.ac.in </a>
        </div>

        <div>
           <a href='tel:8668351747' className='font-thin md:text-lg'>Phone no.: +91 8668351747 </a>
        </div>

        <div>
           <a href='tel:8888888888' className='font-thin md:text-lg'>+91 8888888888 </a>       
        </div>

        <div className='pt-3'>
          <a href='https://goo.gl/maps/o1FJZxkyeCEH4WLW8' target='_blank' className='font-thin md:text-lg'>Address: EDC HQ, VIIT Campus,<br/> Kondhwa, Pune-48</a>
        </div>

      </div>

      

      <div className='invisible md:visible'>

        <a href='https://www.google.co.in/maps/place/EDC+VIIT/@18.4605415,73.8817141,17z/data=!4m6!3m5!1s0x3bc2eaf473dfa6d3:0x254f86fb9c3da40d!8m2!3d18.4605364!4d73.884289!16s%2Fg%2F11g65fzpkt?entry=ttu' target='_blank'>
           <iframe
             title="EDC address"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.510057981493!2d73.88171407387703!3d18.460541471007737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf473dfa6d3%3A0x254f86fb9c3da40d!2sEDC%20VIIT!5e0!3m2!1sen!2sin!4v1685876557402!5m2!1sen!2sin"
             className="w-0 h-0 rounded-3xl md:w-[22rem] md:h-60 md:ml-20 md:mt-8"
             allowFullScreen=""
             loading="lazy"
           ></iframe>
        </a>
      </div>
    </div>
  )
}

export default Footer
