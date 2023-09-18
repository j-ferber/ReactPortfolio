import React from 'react'
import {FaReact, FaNode, FaHtml5, FaCss3, FaPython} from 'react-icons/fa6'
import {BiLogoTailwindCss, BiLogoMongodb, BiLogoJavascript, BiLogoCPlusPlus} from 'react-icons/bi'
import {SiExpress} from 'react-icons/si'

const Icons = () => {


  const iconsObject = {
    'languages': [
      {
        id: 1,
        component: <FaReact />,
        title: 'React'
      },
      {
        id: 2,
        component: <FaNode />,
        title: 'Node'
      },
      {
        id: 3,
        component: <SiExpress />,
        title: 'Express'
      },
      {
        id: 4,
        component: <BiLogoMongodb />,
        title: 'MongoDB'
      },
      {
        id: 5,
        component: <BiLogoTailwindCss />,
        title: 'TailwindCSS'
      },
      {
        id: 6,
        component: <FaHtml5 />,
        title: 'HTML'
      },
      {
        id: 7,
        component: <FaCss3 />,
        title: 'CSS'
      },
      {
        id: 8,
        component: <FaPython />,
        title: 'Python'
      }, 
      {
        id: 9, 
        component: <BiLogoJavascript />,
        title: 'JavaScript', 
      }, 
      {
        id: 10,
        component: <BiLogoCPlusPlus />, 
        title: 'C++'
      }
    ]
    
  }

  const iconComponents = iconsObject.languages.map(language => (
    <div key={language.id} className='bg-white p-4 rounded-lg w-[225px] flex flex-col justify-center items-center mr-6 mb-6 hover:scale-110 transition-all duration-200'>
      <div className='text-8xl text-[#1d819b]'>{language.component}</div>
      <p className='text-[#1d819b] font-semibold text-2xl'>{language.title}</p>
    </div>
  ))


  return (
    <>
      {iconComponents}
    </>
  )
}

export default Icons