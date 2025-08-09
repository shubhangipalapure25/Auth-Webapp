import React from 'react'

export default function LogIn({onClose, setModalContent}) {
  return (
    <div className='p-8 bg-black text-white flex flex-col justify-cneter rounded-md w-[400px]'>
      <div
        className="text-gray-400 cursor-pointer p-1 hover:text-white self-end"
        onClick={onClose}
      >X
        </div>
      <div>LOGIN OR SIGN UP TO START JOURNEY</div>

      <div className='text-gray-400 cursor-pointer p-1 hover:text-white flex flex-col'>
        <label className='font-md mt-4'>What your e-mail?</label>
        <input type="text" className='px-2 py-1 mt-2 bg-gray-800' placeholder='E-mail' />
      </div>

      <div className='text-gray-400 cursor-pointer p-1 hover:text-white flex flex-col'>
        <label className='font-md mt-4'>Your Password?</label>
        <input type="password" className='px-2 py-1 mt-2 bg-gray-800' placeholder='Password' />
      </div>

      <button type='submit' className='bg-blue-400 py-1 px-4 w-full mt-4'>Login</button>
     
      <div className='flex flex-row justify-between mt-4'>
        <a href="/" className='text-blue-600 text-sm hover:underline'>Create account</a>
        <div
          className='text-blue-600 text-sm hover:underline cursor-pointer'
          onClick={() => setModalContent('forgotpassword')}
        >
          Forgot your password?
        </div>
        </div>
    </div>
  ) 
}
