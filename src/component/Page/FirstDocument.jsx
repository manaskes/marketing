import React from 'react';
import logo from '../img/jauntlogo1.png'; // Replace with the path to your logo image
import Lottie from "lottie-react";
import scrolldown from '../LottieData/Scrolldown1.json'
import getstarted from '../LottieData/Get Started Now.json'
import './style.css';

const FirstDocument = () => {
  return (
    <div className="container flex min-h-screen mt-24 from-gray-800 to-gray-900"> {/* Added a background class for styling */}
      <div className="relative flex w-full max-w-[48rem] flex-row text-white "> {/* Added padding */}
        {/* Content container on the left */}
        <div className="flex flex-col top-0 mr-30 ">
          <h2 className="text-6xl font-bold leading-snug tracking-normal antialiased ">Jaunt App Media</h2> {/* Header */}
          <div className="mb-4 border-b-4 bg-white"></div>
          <p className="text-lg font-bold leading-relaxed "> {/* Paragraph */}
          WELCOME To Jaunt App Media!
          </p>
          {/* Get started button */}
          <a href="#" className="inline-block flex items-center">
            {/* <Lottie
              animationData={getstarted}
              loop={true}
              style={{
                width: '15rem', // Set the width of the Lottie animation
                height: '15rem', // Set the height of the Lottie animation
              }}
            /> */}
          </a>
        </div>
        {/* Logo container on the right */}
        <div className="flex items-start"> {/* Align items to the start (top) of the container */}
          <img src={logo} alt="Logo" /> {/* Your logo */}
        </div>
      </div>
      {/* Scroll down indicator */}
      <a href="/about">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
        <Lottie
          animationData={scrolldown}
          loop={true}
          style={{
            width: '80px', // Set the width of the Lottie animation
            height: '80px', // Set the height of the Lottie animation
          }}
        />
      </div>
      </a>
    </div>
  );
};

export default FirstDocument;
