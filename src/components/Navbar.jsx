import React from 'react'

const Navbar = () => {
    return (
    <>
        <nav className='w-full flex px-8' >
        <ul className='flex w-full pr-10'>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150' >Home</li>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150 whitespace-nowrap'>About Us</li>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150'>Services</li>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150'>Contact</li>
        </ul>
        <a href="#" className='font-bold text-xl hover:text-green-600 transition-all duration-150'>Logo</a>
        </nav>
    </>
    )
}

export default Navbar