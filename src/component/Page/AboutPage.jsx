import React from 'react';
import Lottie from "lottie-react";
import scrolldown from '../LottieData/Scroll down (2).json'
import { useNavigate } from 'react-router-dom';
import './style.css';


const AboutPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/advertiser'); // Navigate to the services page
    };
    return (
        <div className="container bg-cover bg-center z-10 mt-24 flex justify-center items-center text-white p-2" style={{ backgroundImage: 'url("your-background-image-path.jpg")' }}>
            <div className="max-w-2xl mx-auto text-center">
            <div className="max-w-[fit-content] mx-auto">
                    <h1 className="text-6xl font-bold mb-2">About Us</h1>
                    <div className="mb-8 border-b-4 bg-white"></div>
                </div>                <p className="text-2xl font-bold mb-8">
                Welcome to JauntApp Media, your trusted partner in IT services and solutions. With a commitment to innovation and excellence, we specialize in delivering cutting-edge technology services that drive business growth, streamline operations, and empower organizations to thrive in the digital age
                </p>
                <div onClick={handleNavigate} className="cursor-pointer absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
                    <Lottie
                        animationData={scrolldown}
                        loop={true}
                        style={{
                            width: '80px', // Set the width of the Lottie animation
                            height: '80px', // Set the height of the Lottie animation
                        }}
                    />
                    Our Advertiser
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
