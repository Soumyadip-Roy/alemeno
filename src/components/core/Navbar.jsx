import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <NavLink to='/' className='text-white font-bold text-lg'>
          Alemeno
        </NavLink>
        <div className='flex space-x-4'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `text-white hover:text-gray-200 ${isActive ? "font-bold" : ""}`
            }>
            Courses
          </NavLink>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              `text-white hover:text-gray-200 ${isActive ? "font-bold" : ""}`
            }>
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
