import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="bg-opacity-75 bg-white px-3 border-gray-200 rounded-[36px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex space-x-3 rtl:space-x-reverse">
            <img src="navlogo.png" alt="logo" className=" rounded w-30 h-20" />
          </Link>
          <div className="hidden md:flex space-x-4">

          <Link to="/" className="text-cyan-600 font-bold p-2 hover:text-blue-300">Home</Link>
            <Link to="/contact" className="text-cyan-600 font-bold p-2 hover:text-blue-300">Contact</Link>
            <Link to="/MyJobs" className="text-cyan-600 font-bold p-2 hover:text-blue-300">My Jobs</Link>
          </div>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
