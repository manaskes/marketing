import React from 'react';
import Lottie from "lottie-react";
import scrolldown from '../LottieData/Scroll down (2).json'
import { useNavigate } from 'react-router-dom';
import './style.css';


const Advertiser = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/publisher'); 
    };
    return (
        <div className="container bg-cover bg-center z-10 mt-5 flex justify-center items-center text-white p-2" style={{ backgroundImage: 'url("your-background-image-path.jpg")' }}>
            <div className="max-w-2xl mx-auto text-center">
                <div className="max-w-[fit-content] mx-auto">
                    <h1 className="text-5xl font-bold mb-2">ADVERTISER</h1>
                    <div className="mb-8 border-b-4 bg-white"></div>
                </div>
                <p className="text-xl font-bold mb-4">
                    We're a worldwide marketing powerhouse specializing in acquiring
                    mobile customers. Our cutting-edge technology and innovative approach
                    have empowered numerous top brands on both the Application Store and
                    Google Play Store to optimize their traffic and generate profitable returns
                    on their advertising investments.
                </p>
                <p className="text-xl font-bold mb-8">
                    We operate on a pay-on-performance model, offering <span className='text-red-600 font-bold'> CPI / CPA / CPR / CPL /CPS /CPC/CPV </span>solutions tailored to your needs. Our focus on KPI optimizations, pixel tracking & API integration, and rigorous
                    quality assurance ensures you receive high-quality traffic and ample volume. Plus, our seamless integrations make getting started quick and hassle-free.
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
                    Our Publisher
                </div>
            </div>
        </div>
    );
};

export default Advertiser;
