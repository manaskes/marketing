import React from 'react';
import { AiOutlineMessage, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'; // Import icons from react-icons
import Lottie from "lottie-react";
import contactAnimation from '../LottieData/Contact Us.json';
import './style.css';


const ContactPage = () => {
  return (
    <div className="container bg-cover bg-center z-10  flex flex-col justify-center items-center text-white p-0" style={{ backgroundImage: 'url("your-background-image-path.jpg")' }}>
      {/* Lottie container for positioning the animation */}
      <div className="w-full max-w-lg mx-auto ">
        <Lottie
          animationData={contactAnimation}
          loop={true}
          style={{
            width: '250px', // Set the width of the Lottie animation
            height: '300px', // Set the height of the Lottie animation
            margin: '0 auto', // Additional centering for Lottie
          }}
        />
      </div>
      
      {/* Three-column row for contact information */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {/* Message column */}
        <div>
          <div className="flex items-center justify-center mb-2">
            <AiOutlineMessage className="text-3xl mr-2" />
            <h2 className="text-3xl font-bold">Message</h2>
          </div>
          <p className='ms-5'>winner height Tower<br/>104 D, C Block, Pocket C, Sector 19, Noida, Uttar Pradesh 201301</p>
        </div>

        {/* Call Us column */}
        <div>
          <div className="flex items-center justify-center mb-2">
            <AiOutlinePhone className="text-3xl mr-2" />
            <h2 className="text-3xl font-bold">Call Us</h2>
          </div>
          <p className='ms-5'>7007442854</p>
          <p className='ms-5'>6392851592</p>
        </div>

        {/* Mail column */}
        <div>
          <div className="flex items-center justify-center mb-2">
            <AiOutlineMail className="text-3xl mr-2" />
            <h2 className="text-3xl font-bold">Email</h2>
          </div>
          <p className=''>business@jauntappmedia.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
