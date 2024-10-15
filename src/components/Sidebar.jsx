import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const cats = ["Dashboard", "Profile", "Settings", "Notifications", "Messages", "Logout"];
  
  return (
    <div className="flex flex-col m-5 p-6 bg-gray-100 rounded-lg justify-between h-screen max-h-[100vh] shadow-lg">

      <div className="flex flex-col items-center">
        <ul className="list-none mb-8 w-full text-center">
          {cats.map((c, index) => (
            <Link to={`/?cat=${c}`} key={index} className="block text-lg font-medium py-3 w-full hover:bg-blue-100 rounded-lg cursor-pointer transition-all">
              <li className="text-gray-700">{c}</li>
            </Link>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="my-4 py-2 w-4/5 border-t border-b border-gray-400 text-xl font-semibold">Follow Us</span>
        <div className="flex mt-4 w-64 justify-center items-center">
          <i className="text-lg mx-3 cursor-pointer fa-brands fa-facebook hover:text-blue-700"></i>
          <i className="text-lg mx-3 cursor-pointer fa-brands fa-twitter hover:text-blue-400"></i>
          <i className="text-lg mx-3 cursor-pointer fa-brands fa-pinterest hover:text-red-500"></i>
          <i className="text-lg mx-3 cursor-pointer fa-brands fa-square-instagram hover:text-pink-500"></i>
        </div>
      </div>
    </div>
  );
}
