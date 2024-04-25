import React from 'react';

const RightSideBar = () => {
  return (
    <div className="flex flex-col h-full justify-between p-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
        Login
      </button>
      <p className="text-center mt-2 text-xl text-white">
        Welcome to our platform!
      </p>
      <div> {/* Empty div to balance the layout */} </div>
    </div>
  );
}

export default RightSideBar;
