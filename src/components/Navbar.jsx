import React from 'react'

const Navbar = () => {
    return (
    <>
        <nav className='w-full flex px-8' >
        <ul className='flex w-full'>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150' >Home</li>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150'>About Us</li>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150'>Services</li>
            <li className='cursor-pointer px-2  hover:text-green-600 transition-all duration-150'>Contact</li>
        </ul>
        <a href="#" className='hover:text-green-600 transition-all  duration-150 font-bold'>Logo</a>
        </nav>
    </>
    )
}

export default Navbar