import React from 'react'

const Btn = (props) => {
    return (
    <button 
    className='py-4 px-9 bg-green-700 rounded-2xl border-none text-lg text-white cursor-pointer'>{props.text}</button>
    )
}

export default Btn