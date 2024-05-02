import React from 'react'
import { Link } from 'react-router-dom'
function Headers() {
  return (
    <div className='bg-slate-400 h-16 flex justify-center items-center'>
     <div className='flex justify-between items-center w-4/5  h-15'>
     <h1 className='text-3xl font-extrabold'>Vibhu</h1>
      <ul className='flex gap-8 font-semibold' >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/photos'>Photos</Link></li>
        <li className='border-2 rounded-3xl px-2 bg-red-400'><Link to='/login' >Login/Signup</Link></li>
      </ul>
     </div>
     
    
    </div>
  )
}

export default Headers
