import React,{useState} from 'react'
import axios from 'axios'

const ContactForm = () => {
  const bgImg = "https://images5.alphacoders.com/356/356515.jpg";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

        // Check if the email is valid
        if (!validateEmail(email)) {
          setIsValidEmail(false);
          return;
        }

    const formData = {
      name,
      email,
      message
    };

    try {
      await axios.post('http://localhost:3000/send-email', formData);
      console.log('Email sent')
    } catch (error) {
      console.log(error);
    }

    setEmail('');
    setMessage('');
    setName('')
  }

  return (
    <div name="contact" className="w-[30.5rem] pt-3 h-[39rem] md:w-full md:h-[44rem] md:text-white md:bg-cover bg-[length:550px_624px] bg-no-repeat" style={{backgroundImage:`url(${bgImg})`}}>
      <div className='flex flex-col p-4 rounded-lg my-2 md:my-4 md:rounded-3xl justify-center drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)] md:w-[40rem] w-[20.5rem] mx-auto bg-blond bg-opacity-20'>
        <div className='pb-8 text-center'>
          <h2 className='text-blond text-3xl pb-4 pl-2 md:text-4xl md:pb-4 md:pl-10 font-bold'>Contact Us</h2>
          <p className='text-blond md:pl-4'>Submit the form below to get in touch with Us!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form method="POST" className=" flex flex-col w-full md:w-1/2">
            <input required type='text' value={name} onChange={(e)=>setName(e.target.value)} name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 md:w-[26rem] rounded-md md:-ml-12 text-blond focus:outline-none'/>
            <input required type='text' value={email} onChange={(e)=>{setEmail(e.target.value);setIsValidEmail(true);}} name='email' placeholder='Enter your email' className='my-5 p-2 bg-transparent border-2 md:w-[26rem] md:-ml-12 rounded-md text-blond focus:outline-none'/>      
            {!isValidEmail && (
              <p style={{ color: 'red' }}>Please enter a valid email address.</p>
            )}
            <textarea
              required
              name="message"
              value={message} onChange={(e)=>setMessage(e.target.value)}
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
