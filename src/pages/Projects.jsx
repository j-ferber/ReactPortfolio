import React from 'react'
import { useParams } from 'react-router-dom'
import allProjects from '../components/Projects/Projects'
import ProjectHeader from '../components/Projects/ProjectHeader'
import {FaGithub} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import {RxOpenInNewWindow} from 'react-icons/rx'

const Projects = () => {

  const {id} = useParams()
  const selectedProject = allProjects.projects.filter(project => id == project.id)[0]
  const listTechnologies = selectedProject.technologies.map((tech, index) => (
    <li className='ml-10 leading-8 text-lg max-[1024px]:text-base max-[530px]:text-xs' key={index}>{tech}</li>
  ))

  return (
    <>
      <ProjectHeader />
      <section className='w-screen h-screen flex justify-center items-center'>
        <div className='w-3/4 min-h-max bg-black bg-opacity-75 p-6 flex flex-col items-center shadow-lg shadow-black rounded-[30px] max-xl:w-5/6'>
          <h2 className='text-[#1d819b] text-3xl font-bold mb-4 max-[530px]:text-xl'>{selectedProject.title}</h2>
          <div className="w-full h-full grid cssGrid max-[1024px]:grid-cols-1">
            <div className='flex justify-center items-center '>
              <img src={selectedProject.source} className='border-4 overflow-hidden h-full object-cover w-full rounded-[30px] border-[#1d819b] max-[1024px]:h-3/5 max-[1024px]:w-3/5 max-[1024px]:mb-4 max-[1024px]:mx-0 max-[530px]:w-4/5' alt="" />
            </div>
            <div className=' text-white flex flex-col w-[95%] justify-center items-start'>
              <p className='text-white text-2xl max-[1440px]:text-xl max-[1024px]:text-base max-[530px]:text-sm'>{selectedProject.description}</p>
              <h2 className='mt-6 text-xl font-semibold text-[#1d819b] max-[1024px]:text-base max-[530px]:text-sm'>Technologies:</h2>
              <ul className='list-disc'>
                {listTechnologies}
              </ul>
              {selectedProject.note &&
                <p className='mt-6 w-[95%] max-[530px]:text-sm max-[425px]:text-xs'><strong>Note: </strong>{selectedProject.note}</p>
              }
            </div>
          </div>
          <div className='flex w-[100px] text-white text-2xl justify-around mt-4'>
            <Link to={selectedProject.github} target='_blank' className='hover:scale-125 transition-all duration-300 text-[#1d819b]'><FaGithub /></Link>
            <Link to={selectedProject.live} target='_blank' className='hover:scale-125 transition-all duration-300 text-[#1d819b]'><RxOpenInNewWindow /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects