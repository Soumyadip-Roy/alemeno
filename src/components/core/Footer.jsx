import React from "react";

const Footer = () => {
  return (
    <footer className='bg-blue-600 p-4 mt-28'>
      <div className='container mx-auto text-center text-white'>
        <p>&copy; 2025 All rights reserved.</p>
        <p>
          <a
            href='https://github.com/Soumyadip-Roy/alemeno'
            className='text-white hover:text-gray-200'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub Profile
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
