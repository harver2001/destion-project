import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="relative">
      {/* Buttons for login and register */}
      <div className="absolute top-4 right-4 flex space-x-4 sm:relative sm:top-auto sm:flex-row sm:justify-end sm:mt-4 sm:space-x-6">
        <button className="bg-teal-600 text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-teal-500 transition-all sm:w-auto sm:text-base w-full sm:py-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-blue-500 text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-blue-400 transition-all sm:w-auto sm:text-base w-full sm:py-2">
          <Link to="/register">Register</Link>
        </button>
      </div>

      {/* Header Text */}
      <div className="flex flex-col items-center font-serif text-gray-700 mt-20 sm:mt-10 relative">
        <span className="text-4xl sm:text-[100px]">Landing Page</span>
      </div>

      {/* Header Image */}
      <img
        className="w-full h-[300px] sm:h-[550px] mt-10 object-cover"
        src="https://wallpaperaccess.com/full/51363.jpg"
        alt=""
      />
    </div>
  );
}
