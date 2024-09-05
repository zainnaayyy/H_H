import React from 'react';

const MovingIcons = () => {
  return (
    <>
      <div className='relative flex bg-primary-gradient rounded-lg w-[90%] mx-auto my-10 space-x-8 sm:space-x-10 md:space-x-12 lg:space-x-16 h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden group'>
        <div className='flex items-center animate-loop-scroll space-x-8 sm:space-x-10 md:space-x-12 lg:space-x-16 group-hover:paused'>
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_02_white.png'
            alt='Logo 1'
            className='h-14'
          />
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_04_white.png'
            alt='Logo 2'
            className='h-14'
          />
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_02_white.png'
            alt='Logo 1'
            className='h-14'
          />
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_04_white.png'
            alt='Logo 2'
            className='h-14'
          />
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_02_white.png'
            alt='Logo 1'
            className='h-14'
          />
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_04_white.png'
            alt='Logo 2'
            className='h-14'
          />
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_02_white.png'
            alt='Logo 1'
            className='h-14'
          />
          <img
            src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_04_white.png'
            alt='Logo 2'
            className='h-14'
          />
        </div>
      </div>
      <div className='absolute hidden sm:block -mt-12 -z-50 left-10 sm:left-16 md:left-28 lg:left-48  w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-3 sm:h-4 md:h-5 bg-primary-gradient rounded shadow-md animate-shadow-pulse'></div>
      <div className='absolute hidden sm:block -mt-9 -z-50 left-12 sm:left-20 md:left-32 lg:left-56  w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] h-3 sm:h-4 md:h-5 bg-primary-gradient rounded shadow-md animate-shadow-pulse'></div>
    </>
  );
};

export default MovingIcons;
