import React, { useState } from 'react';

const HeartIcon = ({ filled, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${filled ? 'text-red-500' : 'text-gray-500'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21l-1.42-1.42C5.82 15.66 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.82 7.16-8.58 11.08L12 21z"
      />
    </svg>
  );
};

export default HeartIcon;
