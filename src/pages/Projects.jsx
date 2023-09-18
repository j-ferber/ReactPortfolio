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
    <li className='leading-8 text-lg max-[1024px]:text-base max-[425px]:text-xs' key={index}>{tech}</li>
  ))

  return (
    <>
      <ProjectHeader />
      <section className='w-screen min-h-screen flex justify-center items-center py-10'>
        <div className='w-3/4 min-h-max bg-black bg-opacity-75 p-6 flex flex-col items-center shadow-lg shadow-black rounded-[30px] justify-center'>
          <h2 className='text-[#1d819b] text-3xl font-bold mb-4 max-[475px]:text-2xl'>{selectedProject.title}</h2>
          <div className="w-full h-full grid cssGrid max-[1024px]:grid-cols-1">
            <div className='flex justify-center items-center'>
              <img src={selectedProject.source} className='border-4 overflow-hidden h-full object-cover w-full rounded-[30px] border-[#1d819b]' alt="" />
            </div>
            <div className='text-white flex flex-col w-[95%] justify-center items-start'>
              <p className='text-white text-2xl max-[1024px]:mt-6 max-[1024px]:text-lg max-[425px]:text-sm w-full'>{selectedProject.description}</p>
              <h2 className='mt-6 text-xl font-semibold text-[#1d819b] max-[1024px]:text-lg max-[425px]:text-sm'>Technologies:</h2>
              <ul className='list-disc h-full w-full ml-10'>
                {listTechnologies}
              </ul>
              {selectedProject.note &&
                <p className='mt-6 w-[95%] text-sm max-[425px]:text-xs'><strong>Note: </strong>{selectedProject.note}</p>
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