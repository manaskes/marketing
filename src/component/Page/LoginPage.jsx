import React from 'react';
import './style.css';
import Lottie from 'lottie-react';
import loginanimation from '../LottieData/LoginHeader.json'

const LoginPage = () => {
  return (
    <div className="container bg-cover bg-center z-10 h-screen flex justify-center items-center text-white p-2" style={{ backgroundImage: 'url("your-background-image-path.jpg")' }}>
      <div className="max-w-2xl mx-auto ">
     
        <div className="w-full max-w-lg mx-auto mb-4">
          <Lottie
            animationData={loginanimation}
            loop={true}
            style={{
              width: '300px', // Set the width of the Lottie animation
              height: '250px', // Set the height of the Lottie animation
              margin: '0 auto', // Additional centering for Lottie
            }}
          />
        </div>
        {/* Username input */}
        <div className="mb-4">
          <label className="text-white block mb-1 font-bold" htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="example@gmail.com"
            autoComplete='off'
          />
        </div>
        {/* Password input */}
        <div className="mb-4">
          <label className="text-white block mb-1 font-bold" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="****"
          />
        </div>
        {/* Login button */}
        <div class="flex w-full">
          <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
            <span class="mr-2 uppercase">Login</span>
            <span>
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
