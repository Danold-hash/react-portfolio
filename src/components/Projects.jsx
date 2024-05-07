import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}} 
        >Projects</motion.h2>
        <div className=''>
            {PROJECTS.map((project, index) => (
                <div className='flex flex-wrap lg:justify-center py-5' key={index}>
                    <div className='w-full lg:w-1/4'>
                        <img src={project.image} className='w-40 h-40 rounded-md'/>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <h4 className='font-bold text-neutral-500'>{project.title}</h4>
                        <p className='text-neutral-400 py-2'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <ul className='inline-flex px-1 py-1'>
                                <li className='border border-white px-2 ' key={index}>{tech}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects