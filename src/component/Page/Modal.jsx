// Modal Component
import React from "react";
import Lottie from "lottie-react";
import closeIcon from '../LottieData/Close.json'

export const Modal = ({ onClose, children }) => {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm p-10 z-50 flex "
      >
        <div className="absolute top-10 right-10 cursor-pointer z-50" onClick={onClose}>
          <Lottie animationData={closeIcon} style={{ width: '60px', height: '60px' }} />
        </div>
        <div
          className="bg-transparent"
          onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
        >
          {children}
        </div>
      </div>
    );
  };
