import React from 'react'

export default function SignUp() {
  return (
    <div className='w-1/3 mx-auto mt-20'> 
        <h1 className='text-3xl text-center font-semibold my-7'> Sign up</h1>
        <form className='flex flex-col gap-4'>
          <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
          <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />
          <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
        </form>
      <div className='flex mt-5 gap-3'>
      <p>Have an account?</p>
      <p className='text-blue-400'>Sign in</p>
     </div>
    </div>
  )
}
