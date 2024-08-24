import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';
function SignUp() {
  const [formData , setformData] = useState({});
  const handleChange = (e)=>{
    setformData({...formData , [e.target.id]:e.target.value})
  }
  const handleSubmit = async ()=>{
    e.preventDefault(); // it prevents regfres page on submit
    const res = await fetch('/api/auth/signup' , {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
    const Data = await res.json();
    console.log(Data) 
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input type="text" placeholder='Username' id='username' className='p-3 bg-slate-300 rounded-lg' onChange={handleChange} />
        <input type="email" placeholder='Email' id='email' className='p-3 bg-slate-300 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='p-3 bg-slate-300 rounded-lg' onChange={handleChange}/>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-65">SignUp</button>
      </form>
      <div className='flex gap-2'>
        Have an account ? 
        <Link to='/signin'><span className='text-blue-600'>Sign In</span></Link>

      </div>
    </div>
  )
}

export default SignUp;



