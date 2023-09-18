import React from 'react'
import {HiHome} from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const ProjectHeader = () => {
  return (
    <div className='w-screen fixed top-0 h-[75px] bg-transparent flex items-center'>
      <Link to='/' className='ml-6 hover:scale-110 transition-all duration-300 max-[768px]:ml-3'><HiHome className='text-4xl max-[768px]:text-2xl text-white'/></Link>
    </div>
  )
}

export default ProjectHeader