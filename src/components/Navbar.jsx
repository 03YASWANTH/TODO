import React from 'react'

function Navbar() {
  return (
    <nav className='h-14 w-6/12  mt-4 mx-auto  py-3 rounded-full text-white border-1 bg-white bg-opacity-10 shadow-sm shadow-white'>
        <ul className='flex justify-evenly '>
            <div><li className='text-3xl font-bold text-blue-400 cursor-pointer'>E-Tasks</li></div>
            <div className='hover:bg-slate-500 w-20 h-8 px-3 rounded-full transition-all duration-500'><li className='text-xl hover:cursor-pointer'>Home</li></div>
            <div className='hover:bg-slate-500 w-20 h-8 px-3 rounded-full transition-all duration-500'><li className='text-xl cursor-pointer'>Tasks</li></div>
            
        </ul>
    </nav>
  )
}

export default Navbar