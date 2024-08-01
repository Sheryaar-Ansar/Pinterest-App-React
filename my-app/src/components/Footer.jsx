import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Footer = () => {
    return (
        <footer>
            <div className='block text-center md:flex flex-wrap justify-between items-center bg-gray-200 px-20 py-20 '>
                <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-red-500 border shadow-2xl md:flex flex mx-auto md:mx-0 justify-center items-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='mt-5'>
                    <NavLink to={'/'} className={'mx-4 block md:inline p-[14px] rounded-[14px] hover:bg-gray-300'}>Home</NavLink>
                    <NavLink to={'/image-generator'}className={'mx-4 block md:inline p-[14px] rounded-[14px] hover:bg-gray-300'}>Image Generator</NavLink>
                </div>
                <button className='bg-red-500 p-3 rounded-xl text-white font-semibold uppercase shadow-red-600 hover:bg-transparent hover:border hover:border-red-500 hover:text-gray-900 hover:shadow-[0 0 20px] hover:shadow-red-400 transition shadowCustom'>Get Started</button>
            </div>
        </footer>
    )
}

export default Footer
