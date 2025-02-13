import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white font-bold text-lg'>
          Alemeno
        </Link>
        <div className='flex space-x-4'>
          <Link to='/' className='text-white hover:text-gray-200'>
            Courses
          </Link>
          <Link to='/dashboard' className='text-white hover:text-gray-200'>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
