import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'
import { FaHamburger, FaTimes } from 'react-icons/fa'
import { CiMenuBurger } from 'react-icons/ci'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  const content = <>
    <div className='md:hidden absolute w-full top-16 block left-0 right-0 bg-gray-200 transition'>
      <div className='text-center text-2xl p-20 block'>
        <NavLink to={'/'} className={'my-4 py-4 block uppercase p-[14px] rounded-[14px] hover:bg-gray-500'}>Home</NavLink>
        <NavLink to={'/image-generator'} className={'my-4 py-4 block uppercase p-[14px] rounded-[14px] hover:bg-gray-500'}>Image Generator</NavLink>
        <NavLink to={'/create-pin'} className={'my-4 py-4 block uppercase p-[14px] rounded-[14px] hover:bg-gray-500'}>Create Pin</NavLink>
        <NavLink to={'/show-pins'} className={'my-4 py-4 block uppercase p-[14px] rounded-[14px] hover:bg-gray-500'}>Show Pins</NavLink>

      </div>
    </div>
  </>
  return (
      <header>
        <div className='fixed top-0 left-0 w-full h-[80px] flex justify-between items-center lg:py-5 py-4 px-20 bg-gray-200 flex-1 z-10'>
          <img src={logo} alt="" className='w-[150px]'/>
          <div className='hidden md:flex lg:flex flex-1 items-center justify-end transition font-normal'>
          <NavLink to={'/'} className={'uppercase mx-3 font-semibold p-[14px] rounded-[14px] hover:bg-gray-300'}>Home</NavLink>
          <NavLink to={'/image-generator'} className={'uppercase mx-3 font-semibold p-[14px] rounded-[14px] hover:bg-gray-300'}>Image Generator</NavLink>
          <NavLink to={'/create-pin'} className={'uppercase mx-3 font-semibold p-[14px] rounded-[14px] hover:bg-gray-300'}>Create Pin</NavLink>
          <NavLink to={'/show-pins'} className={'uppercase mx-3 font-semibold p-[14px] rounded-[14px] hover:bg-gray-300'}>Show Pins</NavLink>
          </div>
          <div>
            {click && content}
          </div>
          <button className='block md:hidden transition' onClick={handleClick}>{click ?<FaTimes className='text-red-800 font-normal text-3xl'/> :<CiMenuBurger className='text-red-800 font-normal text-[24px]'/>}</button>
        </div>
      </header>

  )
}

export default Navbar
