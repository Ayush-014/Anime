import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='Loader h-screen overflow-hidden w-screen z-50'>
      <img src="./Image/Loader.gif" alt="" className='p-80 pt-52'/>
    </div>
  );
};

export default Loader;
