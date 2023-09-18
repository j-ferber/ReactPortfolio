import React, { useState } from 'react'
import {FaEnvelope, FaPhone} from 'react-icons/fa6'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    if (name == '' || email == '' || message == '') {
      return setError('Please submit all fields')
    }
    if (email.indexOf('@') == -1) {
      return setError('Please enter a valid email')
    }
    const params = {
      from_name: name,
      user_email: email,
      message: message
    }
    emailjs.send(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, params, `${import.meta.env.VITE_PUBLIC_KEY}`)
      .then((response) => {
	      console.log('SUCCESS!', response.status, response.text);
        successfulPost()
	    }, (err) => {
	      console.log('FAILED...', err);
	    });
  }

  const successfulPost = () => {
    setSuccess('Thank you for reaching out.')
    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }

  return (
    <>
      <span className="anchor" id="contact"></span>
      <section className='h-max w-screen flex justify-center items-center flex-col pb-48' data-aos="fade-up" data-aos-once="true">
        <h2 className='sectionHead'>Contact</h2>
        <div className='w-3/4 min-h-max bg-black bg-opacity-75 rounded-[30px] shadow-lg shadow-black p-10 flex flex-col items-center max-[430px]:p-5'>
          <div className='grid cssGrid2 w-full h-full max-[950px]:grid-cols-1'>
            <div className='flex justify-start items-start text-white flex-col w-full max-[950px]:mb-4'>
              <div className='flex justify-start items-center w-full mb-4 max-xl:mr-4'>
                <FaEnvelope className='text-2xl mr-4'/>
                <div>
                  <p className='font-bold text-xl max-[325px]:text-base'>Email:</p>
                  <p className=' max-[325px]:text-sm'>ferberjustin5@gmail.com</p>
                </div>
              </div>
              <div className='flex justify-start items-center w-full '>  
                <FaPhone className='text-2xl mr-4' />
                <div>
                  <p className='font-bold text-xl max-[325px]:text-base'>Phone:</p>
                  <p className='max-[325px]:text-sm'>+1 609-619-2699</p>
                </div>
              </div>
            </div>
            <div className='w-full h-full items-center justify-center flex flex-col'>
              {!success ? (
                <form action="" className='flex w-full h-full flex-col items-end'>
                  <div className='flex justify-between w-full mb-5 items-center max-xl:flex-col max-xl:mb-0'>
                    <input type="text" placeholder='Name' className='inputs' required onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Email' className='inputs' required onChange={(e) => setEmail(e.target.value)} /> 
                  </div>
                  <textarea id="" rows="5" className='resize-y p-3 w-full min-h-[144px] rounded-lg border-[1px] border-black focus:ring-2 ring-[#1d819b] focus:outline-none mb-5' onChange={(e) => setMessage(e.target.value)} placeholder='Send a message' required></textarea>
                  <input type='submit' onClick={handleSubmit} className='bg-white w-max px-3 py-2 text-sm rounded-lg font-semibold hover:bg-[#1d819b] hover:text-white transition-all hover:scale-105 cursor-pointer' value='Send Message'/>
                </form> )
                :
                <>
                <p className='text-2xl text-white text-center'>{success}</p>
                <p className='text-2xl text-white text-center'>I will respond to your email as soon as I can.</p>
                </>
              }
            </div>
          </div>
          {error &&
            <p className='text-center w-max p-2 bg-red-200 border-2 border-red-600 rounded-lg text-red-600 font-semibold'>{error}</p>
          }
        </div>
      </section>
    </>
  )
}

export default Contact