import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mb-4'>
      <Link to='/' className='text-xl font-bold'>
        Course List
      </Link>
      <div>
        <Link to='/dashboard' className='mr-4 hover:underline'>
          Student Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
