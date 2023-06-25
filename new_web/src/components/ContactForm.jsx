import React from 'react'

const ContactForm = () => {
  return (
    <div name="contact" className="w-[30.5rem] pt-3 h-[35rem] md:w-full md:h-[35rem] bg-light_navy md:text-white">
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto '>
        <div className='pb-8 text-center'>
          <h2 className='text-[#f8f8f8] text-3xl pb-4 pl-5 md:text-4xl md:pb-4 md:pl-10 font-bold'>Contact Us</h2>
          <p className='text-[#bbbbbb] md:pl-4'>Submit the form below to get in touch with Us!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/bf488a47-474a-4e26-a492-1847e2282866" method="POST" className=" flex flex-col w-full md:w-1/2">
            <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-blond focus:outline-none'/>
            <input type='text' name='email' placeholder='Enter your email' className='my-5 p-2 bg-transparent border-2 rounded-md text-blond focus:outline-none'/>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 bg-transparent border-2 rounded-md text-blond focus:outline-none"
            ></textarea>

            <button className="text-blond bg-gradient-to-b from-cyan to-blue px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
