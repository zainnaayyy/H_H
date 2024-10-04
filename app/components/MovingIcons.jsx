import React from 'react';

const MovingIcons = () => {
  return (
    <>
      <div className='relative flex justify-center items-center bg-primary-gradient rounded-lg w-[90%] mx-auto my-10 space-x-8 sm:space-x-10 md:space-x-12 lg:space-x-16 h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden group'>
        <div className='flex flex-col items-center space-y-5'>
          <p className='text-5xl text-white font-bold'>Open Enrollment Begins November 1st...</p>
          <div className='flex space-x-8'>
            <div className='flex flex-col text-white font-semibold items-center'>
              <p className='text-4xl'>10</p>
              <p>Days</p>
            </div>
            <div className='flex flex-col text-white font-semibold items-center'>
              <p className='text-4xl'>7</p>
              <p>Hours</p>
            </div>
            <div className='flex flex-col text-white font-semibold items-center'>
              <p className='text-4xl'>20</p>
              <p>Minutes</p>
            </div>
            <div className='flex flex-col text-white font-semibold items-center'>
              <p className='text-4xl'>15</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='absolute hidden sm:block -mt-12 -z-50 left-10 sm:left-16 md:left-28 lg:left-48  w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-3 sm:h-4 md:h-5 bg-primary-gradient rounded shadow-md animate-shadow-pulse'></div>
      <div className='absolute hidden sm:block -mt-9 -z-50 left-12 sm:left-20 md:left-32 lg:left-56  w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] h-3 sm:h-4 md:h-5 bg-primary-gradient rounded shadow-md animate-shadow-pulse'></div> */}
    </>
  );
};

export default MovingIcons;
