import React from 'react';
import tailwindConfig from '../../../tailwind.config';

function Navbar() {

  return (
    <nav className="bg-opacity-10 bg-white w-screen mx-0.5 p-3 border-gray-200 rounded-[36px]">

      <div className="container mx-auto">

        <div className="flex justify-between items-center">

        <a href="./index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src\components\MainNav\images\navlogo.png" alt="logo" className=" rounded w-30 h-20" />
    </a>

          <div className="hidden md:flex space-x-4">

            <a href="#" className="text-cyan-600 font-bold p-2 hover:text-blue-300">Home</a>

            <a href="#" className="text-cyan-600 font-bold p-2 hover:text-blue-300">About</a>

            <a href="#" className="text-cyan-600 font-bold p-2 hover:text-blue-300">Services</a>

            <a href="#" className="text-cyan-600 font-bold p-2 hover:text-blue-300">Contact</a>

          </div>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;