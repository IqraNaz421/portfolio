import React from 'react';
import { FaBell } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50 animate-bounce">
      {/* Bell Icon with Text (Visible only on mobile) */}
      <Link href="/service"
        
          className="relative flex items-center justify-center bg-teal-500 p-5 rounded-full shadow-xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:rotate-6">
        
          {/* Bell Icon with Animation */}
          <FaBell className="text-white text-3xl animate-pulse" />
          
          {/* Tooltip / Text */}
          <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-2 rounded opacity-0 transition-all duration-300 group-hover:opacity-100">
            Visit My Services
          </span>
        </Link>
      
    </div>
  );
};

export default Services;
