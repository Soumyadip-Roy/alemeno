// src/components/LoadingSkeleton.js
import React from "react";

function LoadingSkeleton({ count = 4 }) {
  const skeletons = Array.from({ length: count });
  return (
    <div>
      {skeletons.map((_, idx) => (
        <div
          key={idx}
          className='bg-gray-200 animate-pulse h-36 mb-4 rounded'></div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
