import React from 'react';

const StarIcon = ({ filled, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${filled ? 'text-yellow-500' : 'text-gray-500'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2L9.15 8.9H2l6.46 4.97L5.82 21l6.36-4.87L18.18 21l-2.63-8.13L22 8.9h-7.15L12 2z"
      />
    </svg>
  );
};

export default StarIcon;
