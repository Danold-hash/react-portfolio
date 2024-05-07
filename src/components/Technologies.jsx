import React from 'react'
import { RiReactjsLine, RiNextjsLine, RiAngularjsLine, RiVuejsLine } from 'react-icons/ri';
import { animate, motion } from 'framer-motion';

const iconVariants = (duration)=>({
    initial: {y:-10},
    animate:{
        y: [10,-10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}} 
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiVuejsLine className='text-7xl text-green-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiAngularjsLine className='text-7xl text-red-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsLine className='text-7xl '/>
            </div>
            
        </div>
    </div>
  )
}

export default Technologies