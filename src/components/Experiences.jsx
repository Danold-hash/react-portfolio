import React from 'react'
import { EXPERIENCES } from '../constants'
import ExperienceItem from './ExperienceItem'

const Experiences = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Experiences</h2>
        <div className='flex flex-wrap'>
            {EXPERIENCES.map((experience, index) => (
                <ExperienceItem key={index} experience={experience}/>
            ))}
            
        </div>
    </div>
  )
}

export default Experiences