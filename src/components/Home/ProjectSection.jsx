import { useState } from 'react'
import projectData from '../Projects/Projects.js'
import { Link } from 'react-router-dom'

const ProjectSection = () => {
  
  const [hover, setHover] = useState(false)

  const projectsDivs = projectData.projects.map(project => (
    <Link to={`/project/${project.id}`} key={project.id}>
      <div className='mr-5 mb-5 max-[430px]:mr-0 hover:scale-[102%] transition-all duration-300 border-4 border-[#1d819b] border-solid rounded-[24px] overflow-hidden' onMouseOver={() => setHover(project.id)} onMouseOut={() => setHover(false)}>
        <img src={project.title == 'Jotter Blog App' ? project.image2 : project.source} alt="" className={hover == project.id ? 'w-full h-[400px] object-cover blur-md max-[600px]:h-[300px] max-[425px]:h-[200px]' : 'w-full h-[400px] object-cover relative max-[600px]:h-[300px] max-[425px]:h-[200px]'} />
        {hover == project.id &&
          <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/75 flex items-center justify-center w-full fadeIn'>
            <p className='font-bold text-3xl text-transparent bg-gradient-to-r from-[#2193B0] to-[#6dd5ed] bg-clip-text max-[480px]:text-xl max-[360px]:text-base'>{project.title}</p>
          </div>
        }
      </div>
    </Link>
  ))

  return (
    <>
      <span className="anchor" id="projects"></span>
      <section className='min-h-screen w-screen flex items-center flex-col' data-aos="fade-up" data-aos-once="true">
        <h2 id='projects' className='sectionHead'>Projects</h2>
        <div className='w-3/4 max-[430px]:p-5 bg-black shadow-lg shadow-black h-max rounded-[30px] bg-opacity-75 overflow-hidden pt-[50px] grid grid-cols-2 pl-[50px] pr-[30px] pb-[30px] max-[950px]:grid-cols-1'>
          {projectsDivs}
        </div>
      </section>
    </>
  )
}

export default ProjectSection