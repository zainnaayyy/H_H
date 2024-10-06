'use client';
import React from 'react';
import { useTimer } from 'react-timer-hook';

const MovingIcons = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Set the target date to November 1st of the current year
  const targetTime = new Date(currentYear, 10, 1); // Month is 0-indexed, so 10 is November

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: targetTime,
  });

  return (
    <div className='relative flex justify-center items-center bg-primary-gradient rounded-lg w-[90%] mx-auto my-10 space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-12 xl:space-x-16 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 overflow-hidden group p-4'>
      <div className='flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5'>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold text-center'>
          Open Enrollment Begins November 1st...
        </p>
        <div className='flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10'>
          <div className='flex flex-col text-white font-semibold items-center'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {days}
            </p>
            <p className='text-xs sm:text-sm md:text-base'>Days</p>
          </div>
          <div className='flex flex-col text-white font-semibold items-center'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {hours}
            </p>
            <p className='text-xs sm:text-sm md:text-base'>Hours</p>
          </div>
          <div className='flex flex-col text-white font-semibold items-center'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {minutes}
            </p>
            <p className='text-xs sm:text-sm md:text-base'>Minutes</p>
          </div>
          <div className='flex flex-col text-white font-semibold items-center'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              {seconds}
            </p>
            <p className='text-xs sm:text-sm md:text-base'>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingIcons;
