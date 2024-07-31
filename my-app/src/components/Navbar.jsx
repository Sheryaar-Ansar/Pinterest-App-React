import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <header className='fixed w-full top-0 left-0 flex justify-between items-center h-15 bg-gray-300 p-5 z-10 mx-auto'>
        <img src={logo} alt="Pincraft" />
        <nav className='text-4xl text-gray-500 uppercase font-semibold px-5 absolute md:static'>
            <NavLink to={'/'} className={'mx-11'}>Home</NavLink>
            <NavLink to={'/image-generator'}>Image Generator</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
