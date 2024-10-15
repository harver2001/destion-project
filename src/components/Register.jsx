import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: false, email: false, password: false });
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValid = true;

    setError({ username: false, email: false, password: false });
    setErrorMsg("");

    if (username.trim() === "") {
      setError((prevError) => ({ ...prevError, username: true }));
      setErrorMsg("Username is required");
      formValid = false;
    }

    if (email.trim() === "" || !validateEmail(email)) {
      setError((prevError) => ({ ...prevError, email: true }));
      setErrorMsg("Please enter a valid email");
      formValid = false;
    }

    if (password.length < 6) {
      setError((prevError) => ({ ...prevError, password: true }));
      setErrorMsg("Password should be at least 6 characters long");
      formValid = false;
    }

    if (formValid) {
      console.log("Form Submitted");
    }
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(https://t3.ftcdn.net/jpg/05/48/63/06/360_F_548630653_hQO3uDwzJ8AcKUhQ3gMSGy29AreVcbHr.jpg)` }}>
        
        <h1 className="text-4xl sm:text-5xl font-medium">Register</h1>
        
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col w-2/5 sm:w-1/2 lg:w-2/4 xl:w-2/6">
            {/* Username Input */}
            <label className="mt-5 font-extrabold">Username</label>
            <input 
              type="text" 
              className={`p-3 bg-white border-none rounded-md shadow-md ${error.username ? 'border border-red-500' : ''}`} 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error.username && <span className="text-red-500 text-sm">Username is required</span>}

            <label className="mt-4 font-extrabold">Email</label>
            <input 
              type="email" 
              className={`p-3 bg-white border-none rounded-md shadow-md ${error.email ? 'border border-red-500' : ''}`} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}

            <label className="mt-4 font-extrabold">Password</label>
            <input 
              type="password" 
              className={`p-3 bg-white border-none rounded-md shadow-md ${error.password ? 'border border-red-500' : ''}`} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <span className="text-red-500 text-sm">Password should be at least 6 characters long</span>}
            {errorMsg && <span className="text-red-500 text-sm mt-2">{errorMsg}</span>}
            
            <button type="submit" className="mt-6 cursor-pointer bg-[#ef7c68] text-white rounded-lg py-2 px-4 hover:bg-[#e66a54] transition-all">
                Register
            </button>
        </form>

        <button className="absolute top-4 right-4 bg-teal-600 cursor-pointer text-white rounded-lg py-2 px-4 hover:bg-teal-500 transition-all">
            <Link to='/login'> Login </Link>
        </button>

        <button className="absolute top-4 right-24 bg-green-600 cursor-pointer text-white rounded-lg py-2 px-4 hover:bg-teal-500 transition-all">
            <Link to='/'> Home </Link>
        </button>
    </div>
  );
}
