import React from 'react'

const ExperienceItem = ({experience}) => {
  return (
    <div className='flex flex-wrap items-start pb-7 lg:px-40'>
        <div className='w-full lg:w-1/4 text-neutral-500 font-semibold'>
            {experience.year}
        </div>
        <div className='w-full lg:w-3/4'>
            <h4 className='font-semibold '>{experience.role} - {experience.company}</h4>
            <p className='py-2'>{experience.description}</p>
            <span className=''>{experience.technologies.map((value) => (
                <ul className='inline-flex px-1 py-1'>
                    <li className='border border-white px-2 '>{value}</li>
                </ul>
            ))}</span>
        </div>
    </div>
  )
}

export default ExperienceItem