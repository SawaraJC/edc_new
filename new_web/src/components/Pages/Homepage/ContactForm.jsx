import React,{useState} from 'react'

const ContactForm = () => {
  const bgImg = "https://images5.alphacoders.com/356/356515.jpg";
  const [form,setForm] = useState(true);
  // const [name,setName] = useState(true);
  // const [message,setMessage] = useState(true);

  const handleSubmit = () => {
    Array.from(document.querySelectorAll('input'));
    this.setState({
      itemvalues:[{}]
    })
  }

  return (
    <div name="contact" className="w-[30.5rem] pt-3 h-[39rem] md:w-full md:h-[44rem] md:text-white md:bg-cover bg-[length:550px_624px] bg-no-repeat" style={{backgroundImage:`url(${bgImg})`}}>
      <div className='flex flex-col p-4 rounded-lg my-2 md:my-4 md:rounded-3xl justify-center drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)] md:w-[40rem] w-[20.5rem] mx-auto bg-blond bg-opacity-20'>
        <div className='pb-8 text-center'>
          <h2 className='text-blond text-3xl pb-4 pl-2 md:text-4xl md:pb-4 md:pl-10 font-bold'>Contact Us</h2>
          <p className='text-blond md:pl-4'>Submit the form below to get in touch with Us!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/bf488a47-474a-4e26-a492-1847e2282866" method="POST" className=" flex flex-col w-full md:w-1/2">
            <input required type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 md:w-[26rem] rounded-md md:-ml-12 text-blond focus:outline-none'/>
            <input required type='text' name='email' placeholder='Enter your email' className='my-5 p-2 bg-transparent border-2 md:w-[26rem] md:-ml-12 rounded-md text-blond focus:outline-none'/>
            <textarea
              required
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 md:-ml-12 bg-transparent border-2 md:w-[26rem] rounded-md text-blond focus:outline-none"
            ></textarea>

            <button onClick={handleSubmit} className="text-blond bg-gradient-to-b from-cyan to-blue px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
