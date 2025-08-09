import React from 'react'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

export default function PopupModal({ modalContent, onClose, setModalContent }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP LAYER */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/70"
        onClick={onClose}
      ></div>

      {/* MODAL CONTENT */}
      <div className="relative z-10">
        {modalContent === 'signup' && <SignUp onClose={onClose} setModalContent={setModalContent}/>}
      </div>
      <div className="relative z-10">
        {modalContent === 'signin' && <LogIn onClose={onClose} setModalContent={setModalContent}/>}
      </div>

       <div className="relative z-10">
        {modalContent === 'forgotpassword' && <ForgotPassword onClose={onClose} />}
      </div>
  <div className="relative z-10">
        {modalContent === 'resetpassword' && <ResetPassword onClose={onClose} />}
      </div>
      
    </div>
  );
}
