import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className='relative w-full bg-gray-200 rounded-full h-4 flex m-auto'>
      <div
        className='bg-green-500 h-4 rounded-full'
        style={{ width: `${progress}%` }}></div>
      <div className='absolute inset-0 flex items-center justify-center text-gray-600 text-xs'>
        {progress}% Completed
      </div>
    </div>
  );
};

export default ProgressBar;
