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
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <div className='text-center text-3xl mb-10 font-bold'>Mission</div>
          <h2 className='text-3xl font-bold mb-4'>How We Make a Difference</h2>
          <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 mt-8'>
            <div>
              <p className='text-base text-gray-600'>
                Our mission is to improve the lives of Haiti&apos;s underserved
                populations by providing access to affordable and comprehensive
                health insurance. We believe that everyone, regardless of their
                financial situation, deserves quality healthcare. By breaking
                down financial barriers and promoting awareness of available
                health services, we are working to ensure that more Haitian
                families can lead healthier, more secure lives.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-700'>
                Together, We are Building a Stronger, Healthier Haiti, One
                Policy at a Time.
              </h3>
              <p className='text-base text-gray-600'>
                Investing in Haitian communities is not just a moral imperative;
                it&apos;s a catalyst for sustainable growth and positive change.
                The Haitian community often faces systemic barriers that limit
                access to essential resources, such as education, healthcare,
                and economic opportunities. By directing investments into these
                areas, we can foster equity, create pathways for success, and
                strengthen the broader economy. Empowering Haitians unlocks
                their full potential, generating innovation, cultural diversity,
                and a more inclusive society. When we uplift our own, we build a
                future where everyone thrives.
              </p>
            </div>
          </div>
          {/* <div className='flex items-center mt-8'>
            <img
              src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/Screen-Shot-2022-07-24-at-15.12-1.png'
              alt='CEO'
              className='w-14 h-14 rounded-full mr-4'
            />
            <div>
              <p className='text-gray-800 font-bold'>Bhagat Singh</p>
              <p className='text-sm text-gray-600'>CEO</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InsurancePolicy;
