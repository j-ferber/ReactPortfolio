import React, { useState } from 'react'
import {useWindowScroll, useWindowSize } from 'react-use'
import { FaBars } from 'react-icons/fa6'

const Header = () => {

  const { y } = useWindowScroll()
  const {width} = useWindowSize()
  const [clicked, setClicked] = useState(false)

  return (
    <div className={y < 650 ? width > 1050 ? 'header bg-transparent' : 'header bg-gradient-to-r from-[#2193B0] to-[#6dd5ed]' : 'bg-gradient-to-r from-[#2193B0] to-[#6dd5ed] header'}>
      <p className='navItem text-2xl font-bold ml-16 cursor-pointer max-[425px]:ml-10'><a href='#'>JF</a></p>
      {width > 815 ? 
        <ul className='flex w-1/3 justify-between max-xl:w-2/5 max-[1050px]:w-1/2'>
          <li className='mr-12 cursor-pointer font-medium text-lg relative navItem'><a href="#">Home</a></li>
          <li className='mr-12 cursor-pointer font-medium text-lg relative navItem'><a href='#about'>About</a></li>
          <li className='mr-12 cursor-pointer font-medium text-lg relative navItem'><a href='#projects'>Projects</a></li>
          <li className='mr-12 cursor-pointer font-medium text-lg relative navItem'><a href="#contact">Contact</a></li>
        </ul> : 
        <p className='mr-10 text-2xl' onClick={() => setClicked(!clicked)}><FaBars /></p>
      }
      {clicked && 
        <div className='fixed top-[74px] bottom-0 left-0 right-0 bg-gradient-to-r from-[#2193B0] to-[#6dd5ed] z-[100] fadeIn transition-all'>
          <ul className='flex flex-col justify-center items-center w-full h-full'>
            <li className='cursor-pointer text-2xl font-bold relative navItem mb-4' onClick={() => setClicked(false)}><a href="#">Home</a></li>
            <li className='cursor-pointer text-2xl font-bold relative navItem mb-4' onClick={() => setClicked(false)}><a href='#about'>About</a></li>
            <li className='cursor-pointer text-2xl font-bold relative navItem mb-4' onClick={() => setClicked(false)}><a href='#projects'>Projects</a></li>
            <li className='cursor-pointer text-2xl font-bold relative navItem mb-4' onClick={() => setClicked(false)}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      }
    </div>
  )
}

export default Header