import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MdHome, MdInfo, MdContactMail, MdPublish, MdLogin } from 'react-icons/md';
import logo from '../img/jaunt_app.png'
const pages = [
  { path: '/', label: 'Home', Icon: MdHome },
  { path: '/about', label: 'About', Icon: MdInfo },
  { path: '/advertiser', label: 'Advertiser', Icon: MdPublish }, // Assuming using the same icon for simplicity
  { path: '/publisher', label: 'Publisher', Icon: MdPublish },
  { path: '/login', label: 'Login', Icon: MdLogin },
  { path: '/contact', label: 'Contact', Icon: MdContactMail }
];

function Sidebar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div className='w-60 z-10'>
      <div className="flex flex-wrap mt-2 ml-12">
        <div className="w-10/10">
          <img
            src={logo}
            // height={250}
            className="mx-auto w-20 h-20 rounded-full"
          />
        </div>
      </div>
      <ul className="mt-8 ml-8">
        {pages.map(({ path, label, Icon }) => (
          <li key={path} className="px-8 py-3 text-white flex flex-row border-gray-300 hover:text-white font-bold hover:bg-transparent hover:font-bold rounded-lg">
            <span className={`${activeTab === path ? 'bg-gray-300 text-black' : ''} hover:bg-gray-300 hover:text-black rounded-full p-1`}>
              <Icon className="fill-current h-5 w-5" />
            </span>
            <Link to={path} onClick={() => setActiveTab(path)} className="ml-2">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 absolute bottom-5 ml-12 text-white">
        Developed by <span className="font-bold text-yellow-600">JauntApp</span>
      </div>
    </div>
  );
}

export default Sidebar;
