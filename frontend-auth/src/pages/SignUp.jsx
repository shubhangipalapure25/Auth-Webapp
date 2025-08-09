import React from 'react'

export default function SignUp({onClose}) {
  return (
    <div className="p-8 bg-black text-white flex flex-col justify-center rounded-md w-[400px]">
      <div
        className="text-gray-400 cursor-pointer p-1 hover:text-white self-end"
        onClick={onClose}
      >X
        </div>
        <div className=" font-md mt-4">SIGN UP TO MAHARASHTRA COLLEGE!</div>
        <div className='mt-6 flex flex-col'>
            <label>What's your name?</label>
            <input type="text" className='px-2 py-1 mt-2 bg-gray-800' placeholder='Name' />
        </div>
        <div className='mt-4 flex flex-col'>
            <label>What's your e-mail?</label>
            <input type="text" className='px-2 py-1 mt-2 bg-gray-800' placeholder='E-mail' />
        </div>
        <div className='mt-4 flex flex-col'>
            <label>Your password?</label>
            <input type="password" className='px-2 py-1 mt-2 bg-gray-800 font-bold ' placeholder='Password' />
        </div>
        <div className='mt-4 flex flex-col'>
            <label>Phone Number</label>
            <input type="number" className='px-2 py-1 mt-2 bg-gray-800' placeholder='98XXXXXXXX' />
        </div>
      
      <button className='bg-blue-400 py-1 px-4 w-full mt-4'>Start your journey</button>

      <div className='flex flex-row justify-between mt-4'>
        <a href='/' className='text-blue-600 text-sm hover:underline'>Sign in with your account</a>
        <a href='/'  className='text-blue-600 text-sm hover:underline'>Forgot your password?</a>
      </div>
      
    </div>
  )
}
