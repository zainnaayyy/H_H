import React from 'react';
import { FaBusinessTime, FaChartBar, FaTrophy, FaUsers } from 'react-icons/fa';

const data = [
  {
    icon: <FaBusinessTime className='text-blue-600 w-8 h-8' />,
    title: 'Business Service',
    description: 'Quickly productive just in time strategic theme.',
  },
  {
    icon: <FaChartBar className='text-blue-600 w-8 h-8' />,
    title: 'Marketing Plan',
    description: 'Quickly productive just in time strategic theme.',
  },
  {
    icon: <FaUsers className='text-blue-600 w-8 h-8' />,
    title: 'Team Management',
    description: 'Quickly productive just in time strategic theme.',
  },
  {
    icon: <FaTrophy className='text-blue-600 w-8 h-8' />,
    title: 'Award Won',
    description: 'Quickly productive just in time strategic theme.',
  },
];

const InsurancePolicy = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap items-center justify-between py-16 px-8 bg-white'>
      <div className='flex flex-col md:flex-row  justify-center md:space-x-8 w-full'>
        <div className='md:w-[40%]'>
          <div className=''>
            <img
              src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/Screen-Shot-2022-07-24-at-15.12-1.png'
              alt='Insurance'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>
            We Provide Best Insurance Policy for Any Purpose
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
            {data.map((item, index) => (
              <div key={index} className='flex items-start space-x-4 mt-6'>
                {item.icon}
                <div>
                  <h3 className='text-lg font-semibold text-gray-700'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-600'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center mt-8'>
            <img
              src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/Screen-Shot-2022-07-24-at-15.12-1.png'
              alt='CEO'
              className='w-14 h-14 rounded-full mr-4'
            />
            <div>
              <p className='text-gray-800 font-bold'>Bhagat Singh</p>
              <p className='text-sm text-gray-600'>CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePolicy;
