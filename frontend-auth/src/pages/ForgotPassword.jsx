import React from 'react'

export default function ForgotPassword({onClose}) {
  return (
    <div className='p-8 bg-black text-white flex flex-col justify-center rounded-md w-[400px]'>
      <div
        className="text-gray-400 cursor-pointer p-1 hover:text-white self-end"
        onClick={onClose}
      >X
        </div>
      <div>GET A BRAND NEW PASSWORD!</div>
      <div className='text-gray-400 cursor-pointer p-1 hover:text-white flex flex-col'>
        <label className='font-md mt-4'>What your e-mail?</label>
        <input type="text" className='px-2 py-1 mt-2 bg-gray-800' placeholder='E-mail' />
      </div>
      <div className='flex flex-row justify-between gap-4'>
      <button type='submit' className='bg-blue-400 py-1 px-4 w-full mt-4'>ok</button>
      <button className='bg-blue-400 py-1 px-4 w-full mt-4' onClick={onClose} >Cancel</button>
      </div>
    </div>
  )
}
