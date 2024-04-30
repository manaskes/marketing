import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Lottie from "lottie-react";
import loginbutton from '../LottieData/Login.json';
import Hamburger from '../LottieData/Hamburger Menu.json';
import facebook from '../LottieData/Facebook.json'
import linkidin from '../LottieData/Linkedin.json'
import { Modal } from '../Page/Modal';
// Mock array of pages, you would have your actual pages here
const pages = ['/', '/about','/advertiser', '/publisher','/login', '/contact'];

const page = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/advertiser', label: 'ADVERTISER' },
  { path: '/publisher', label: 'PUBLISHER' },
  { path: '/login', label: 'LOGIN' },
  { path: '/contact', label: 'CONTACT' },
  // ... add other pages as needed
];



const RightSideBar = () => {
  // State to track the active page index

  const location = useLocation();
  const [activePageIndex, setActivePageIndex] = useState(pages.indexOf(location.pathname));
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleHamburgerClick = () => {
    setIsModalOpen(true);
  };



  useEffect(() => {
    // This will run when the location.pathname changes
    const currentPath = location.pathname;
    const pageIndex = pages.findIndex((p) => p === currentPath);
    if (pageIndex !== -1) {
      setActivePageIndex(pageIndex);
    }
  }, [location, location.pathname]);

  const handlePageClick = (index) => {
    setActivePageIndex(index);
    navigate(pages[index]); // Navigate to the selected page
  };

  const handleloginbutton = () => {
    navigate('/login'); // Navigate to the services page
  };


  return (
    <div className="flex z-10 flex-col h-full justify-between ">
      {/* Lottie animations */}
      <div className="flex justify-center items-center">
        {/* First Lottie animation */}
        <div style={{ cursor: 'pointer' }} onClick={handleloginbutton}>
          <Lottie
            animationData={loginbutton}
            loop={true}
            style={{ width: '10rem', height: '100px', marginRight: '1rem' }}
          />
        </div>
        {/* Second Lottie animation */}
        <div style={{ cursor: 'pointer' }} onClick={handleHamburgerClick}>
          <Lottie
            animationData={Hamburger}
            loop={true}
            style={{ width: '2rem', height: '2rem' }}
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col  h-full">
            {page.map((page, index) => (
              <Link
                key={page.label}
                to={page.path}
                className={`text-white md:font-bold text-7xl ms-20 my-2 hover:text-red-400 ${activePageIndex === index ? 'text-red-400' : ''}`}
                onClick={() => setIsModalOpen(false)}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </Modal>
      )}

      {/* Navigation points */}
      <div className="flex flex-col items-center ml-16">
        {pages.map((page, index) => (
          <div
            key={page}
            className={`w-2 ${activePageIndex === index ? 'h-4' : 'h-2'} mb-2 rounded-full border border-white transition-all duration-300 ${activePageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            style={{ cursor: 'pointer' }}
            onClick={() => handlePageClick(index)}
          />
        ))}
      </div>

       <div className="flex justify-center items-center">
        {/* First Lottie animation */}
        <div style={{ cursor: 'pointer' }}>
          {/* <Lottie
            animationData={facebook}
            loop={true}
            style={{ width: '7rem', height: '100px'}}
          /> */}
        </div>
        {/* Second Lottie animation */}
        <div  style={{ cursor: 'pointer' }}>
          <Lottie
            animationData={linkidin}
            loop={true}
            style={{ width: '10rem', height: '100px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;


