import React from 'react';

export default function ResetPassword({ onClose }) {
  return (
    <div className='p-8 bg-black text-white flex flex-col justify-center rounded-md w-[400px]'>
      <div
        className="text-gray-400 cursor-pointer p-1 hover:text-white self-end"
        onClick={onClose}
      >
        X
      </div>
      <div className="mb-4 font-bold text-lg">RESET YOUR PASSWORD</div>
      <div className='flex flex-col mb-4'>
        <label className='font-md mt-2'>New Password</label>
        <input
          type="password"
          className='px-2 py-1 mt-2 bg-gray-200 rounded'
          placeholder='Enter new password'
        />
      </div>
      <div className='flex flex-col mb-4'>
        <label className='font-md mt-2'>Confirm Password</label>
        <input
          type="password"
          className='px-2 py-1 mt-2 bg-gray-200 rounded'
          placeholder='Confirm new password'
        />
      </div>
      <div className='flex flex-row justify-between gap-4'>
      <button className='bg-blue-400 py-1 px-4 w-full mt-2 text-white rounded'>Reset Password</button>
      <button className='bg-blue-400 py-1 px-4 w-full mt-2 text-white rounded' onClick={onClose}>Cancel</button>
    </div>
    </div>
  )
}
