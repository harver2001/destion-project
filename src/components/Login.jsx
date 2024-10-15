import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='h-[calc(100vh-50px)] flex flex-col items-center justify-center bg-cover bg-center bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(https://img.freepik.com/free-vector/hand-draw-landscape-colorful-sketch-mountain-watercolor-background_1035-23739.jpg?w=2000)] relative'>

      <button className="absolute top-4 right-24 mx-[-20px] bg-green-500 cursor-pointer border-none p-2.5 text-white rounded-lg sm:top-6 sm:right-10 sm:mx-[-20px]">
        <Link to='/'>Home</Link>
      </button>

      <button className="absolute top-4 right-4 bg-teal-500 cursor-pointer border-none p-2.5 text-white rounded-lg sm:top-6 sm:right-24">
        <Link to='/register'>Register</Link>
      </button>

      

      <span className='text-5xl mb-5'>LOGIN</span>
      <form className='mt-5 flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' onSubmit={handleSubmit}>
        <label className='font-bold my-2.5'>Username</label>
        <input type="text" className='p-2.5 bg-white border-none rounded-md' placeholder="Enter your email..." ref={userRef} />
        <label className='font-bold my-2.5'>Password</label>
        <input type="password" className='p-2.5 bg-white border-none rounded-md' placeholder="Enter your password" ref={passwordRef} />
        <button className="mt-5 cursor-pointer bg-[rgb(239,124,104)] border-none text-white rounded-lg p-2.5" type="submit">Login</button>
      </form>
    </div>
  );
}
