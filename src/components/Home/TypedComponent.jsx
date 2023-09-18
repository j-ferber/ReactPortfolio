import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'

const TypedComponent = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Computer Engineer', 'Front-End Dev', 'Software Engineer'],
      typeSpeed: 50,
      backSpeed: 20,
      smartBackspace: true,
      loop: true,
      backDelay: 1000,
    }) 
    return () => {
      typed.destroy()
    }
  })

  return (
    <span ref={el} className='font-bold'></span>
  )
}

export default TypedComponent