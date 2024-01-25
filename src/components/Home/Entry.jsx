import React, { useEffect } from 'react'
import TypedComponent from './TypedComponent'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {BiFile} from 'react-icons/bi'

const Entry = () => {

  return (
    <div className='absolute left-[20%] top-[35%] max-[375px]:left-[18%] max-[325px]:left-[14%]' data-aos="fade-up" data-aos-once="true">
      <p className='text-[60px] text-white font-bold max-[600px]:text-4xl'>Justin Ferber</p>
      <p className='text-[30px] text-[#155d70] max-[600px]:text-lg max-[425px]:text-center'><span className='text-white'>I'm a </span><TypedComponent /></p>
      <div className='flex w-1/3 mt-3 max-[425px]:w-full max-[425px]:justify-center'>
        <a href="https://github.com/j-ferber" target="_blank"><FaGithub className='icons' /></a>
        <a href="https://www.linkedin.com/in/j-ferber/" target="_blank"><FaLinkedin className='icons'/></a>
        <a href="https://drive.google.com/file/d/1pB3XcBPA1QrA1iC-Q97pF6lDkEohpZST/view?usp=sharing" target="_blank"><BiFile className='icons' /></a>
      </div>
    </div>
  )
}

export default Entry