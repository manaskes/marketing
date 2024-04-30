import React from 'react';
import Lottie from "lottie-react";
import scrolldown from '../LottieData/Scroll down (2).json'
import { useNavigate } from 'react-router-dom';

// Import your icons or use placeholders
// For a real application, you'd replace these with actual icon components or images
const icons = {
  web: 'WebIcon', // Replace with your icon component or path to image
  mobile: 'MobileIcon', // Replace with your icon component or path to image
  enterprise: 'EnterpriseIcon', // Replace with your icon component or path to image
  chatbot: 'ChatbotIcon', // Replace with your icon component or path to image
  analytics: 'AnalyticsIcon', // Replace with your icon component or path to image
  marketing: 'MarketingIcon' // Replace with your icon component or path to image
};

const servicesData = [
  {
    icon: icons.web,
    title: 'Websites Development',
    description: 'Website is most essential part of a business if you want to survive in 21st century business style. We will help you to excel in this.'
  },
  {
    icon: icons.web,
    title: 'Websites Development',
    description: 'Website is most essential part of a business if you want to survive in 21st century business style. We will help you to excel in this.'
  },{
    icon: icons.web,
    title: 'Websites Development',
    description: 'Website is most essential part of a business if you want to survive in 21st century business style. We will help you to excel in this.'
  },{
    icon: icons.web,
    title: 'Websites Development',
    description: 'Website is most essential part of a business if you want to survive.'
  },{
    icon: icons.web,
    title: 'Websites Development',
    description: 'Website is most essential part of a business if you want to survive.'
  },{
    icon: icons.web,
    title: 'Websites Development',
    description: 'Website is most essential part of a business if you want to survive in.'
  },
  // ... Add other services following the same structure
];

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-2 m-1">
      {/* Use actual <img> or custom icon component here */}
      <div className="icon mb-3">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/login'); 
    };
  return (
    <div className="bg-cover z-10 bg-center min-h-screen p-0 text-white" style={{ backgroundImage: 'url("your-background-image-path.jpg")' }}>
      <div className="container mx-auto">
        {/* <h5 className="text-2xl font-bold text-center ">We offer the following services to our customers to make sure that sky is the limit for their business growth:</h5> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
      <div onClick={handleNavigate} className="cursor-pointer absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
        <Lottie
          animationData={scrolldown}
          loop={true}
          style={{
            width: '80px', // Set the width of the Lottie animation
            height: '80px', // Set the height of the Lottie animation
          }}
        />
      </div>
    </div>
  );
};

export default Services;
