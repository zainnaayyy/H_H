'use client';
import React, { useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const GrowBusiness = () => {
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.getElementById('parallax-bg');
      const offset = window.scrollY;
      parallax.style.backgroundPositionY = `${offset * 0.7}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='parallax-bg'
      className='relative h-96 flex flex-col justify-center items-center bg-cover bg-center '
      style={{
        backgroundImage:
          'url(http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/family-moving-using-boxes-1.jpg)',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className=' z-50'>
        <button className='w-24 flex justify-center items-center h-24 rounded-full bg-blue-500 focus:outline-none'>
          <FaPlay className='h-10 w-10 text-white' />
        </button>
      </div>
      <div className='text-center mt-8 text-white z-50'>
        <h1 className='text-4xl md:text-4xl font-bold'>
          We Help You to Grow Your Business Quickly
        </h1>
        <p className='mt-8 text-sm md:text-sm'>
          We have almost 35+ years of experience for providing consulting
          services solutions
        </p>
      </div>
    </div>
  );
};

export default GrowBusiness;
