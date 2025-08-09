import React, { useContext,useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import PopupModal from './PopupModal';

export default function HomeDashboard() {
  const {theme, toggleTheme} = useContext(ThemeContext);
const[isShowPopup, setIsShowPopup] =useState(true);
const[modalContent, setModalContent] =useState('signup');

const handleSignupClick = (content) => {
  setIsShowPopup(true);
  setModalContent(content);
}

  return (
    <>
   <div className={`min-h-screen  pt-0 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} flex flex-col`}>
  
  <div className='flex flex-row items-center justify-between p-2 px-4 py-4 bg-white rounded-md'>
    <span className='font-bold'>Dashboard</span>
    <div className='flex items-center'>
      <button className='text-black ml-2 p-1'>Log in</button>
      <button className='text-black ml-2 p-1 px-2  border-blue-400 text-blue-400 border-1 rounded-md' onClick={()=> handleSignupClick('signup')}>Sign up</button>
      <button
      className='ml-4 border p-1 bg-blue-600 text-white rounded-md'
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
    </div>
    
  </div>

  {/* Image fills remaining space */}
  <img
    src="/Images/istockphoto.jpg"
    alt="ins image"
    className="w-full flex-grow object-cover mt-4 rounded-md"
  />
 
 {isShowPopup  && (
    <PopupModal modalContent={modalContent} onClose={() => setIsShowPopup(false)} />
  )}

</div>

</>
  )
}
