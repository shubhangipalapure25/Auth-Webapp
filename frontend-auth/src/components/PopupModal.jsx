import React from 'react'
import SignUp from '../pages/SignUp'

export default function PopupModal({ modalContent, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP LAYER */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/70"
        onClick={onClose}
      ></div>

      {/* MODAL CONTENT */}
      <div className="relative z-10">
        {modalContent === 'signup' && <SignUp onClose={onClose} />}
      </div>
    </div>
  );
}
