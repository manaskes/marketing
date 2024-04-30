import React from 'react';
import Lottie from 'lottie-react';
import Discount from '../LottieData/Discount Tag.json';
import './style.css'

const Publisher = () => {
    return (
        <div className="container bg-cover bg-center z-10 mt-5 flex justify-center items-center text-white p-2" style={{ backgroundImage: 'url("your-background-image-path.jpg")' }}>
            <div className="max-w-2xl mx-auto ">
                {/* Header */}
                <div className="max-w-[fit-content] mx-auto">
                    <h1 className="text-5xl font-bold mb-2">Publisher</h1>
                    <div className="mb-8 border-b-4 bg-white"></div>
                </div>
                {/* Text */}
                <p className="text-lg font-bold  text-center mb-3">
                    At Jaunt App Media, we promise unbeatable eCPMs to help you maximize your traffic and boost earnings.
                </p>
                {/* Flex container for Lottie animation and list */}
                <div className="max-w-[fit-content] ">
                    <h1 className="text-4xl font-bold mb-1">Offers</h1>
                    <div className="mb-3 border-b-4 bg-white"></div>
                </div>
                <div className="flex items-center">
                    {/* Lottie animation */}
                    
                    {/* List */}
                    <ul className="list-disc pl-6 font-bold">
                        <li className="text-lg mb-3">Global reach with top eCPM rates</li>
                        <li className="text-lg mb-3">Automatic optimization for maximum revenue</li>
                        <li className="text-lg mb-3">Easy API integration</li>
                        <li className="text-lg mb-3">Earn higher eCPMs with us</li>
                        <li className="text-lg mb-3">Faster, flexible payment terms</li>
                        <li className="text-lg mb-3">Secure ads with smart tracking and mediation</li>
                        <li className="text-lg mb-3">Outstanding support</li>
                    </ul>
                    <div>
                        <Lottie
                            animationData={Discount}
                            loop={true}
                            style={{
                                width: '15rem', // Set the width of the Lottie animation
                                height: '15rem', // Set the height of the Lottie animation
                                marginLeft: '10px', // Adjust margin as needed
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publisher;
