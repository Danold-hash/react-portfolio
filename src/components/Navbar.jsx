import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { Linkedin, Github, XSquare,Instagram } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-10'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='flex items-center justify-center gap-4 text-2xl'>
            <Linkedin/>
            <Github/>
            <XSquare/>
            <Instagram/>
        </div>
    </nav>
  )
}

export default Navbar