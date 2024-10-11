// pages/dental.js
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Dental = () => {
  return (
    <>
      <Header />

      <div className='max-w-4xl mx-auto p-6'>
        <div className='text-center text-3xl mb-10 font-bold'>Dental</div>
        <h1 className='text-xl font-bold mb-4'>
          Affordable Dental & Vision Insurance Plans for Your Family
        </h1>
        <p className='mb-6'>
          Finding the right dental insurance doesn’t have to be complicated—or
          expensive. We offer a range of affordable plans that make it easy to
          get the dental care you need. Plus, you can even bundle your plan with
          vision and hearing coverage for complete care, all in one package.
        </p>

        <h2 className='text-xl font-semibold mb-2'>
          Benefits of Dental Insurance:
        </h2>
        <ul className='list-disc list-inside mb-6'>
          <li className='mb-1'>
            <strong className='font-semibold'>Enroll Anytime:</strong>
            There is no need to wait for open enrollment—you can sign up for
            coverage year-round!
          </li>
          <li className='mb-1'>
            <strong className='font-semibold'>Fast Activation:</strong>
            Enroll today, and your coverage could begin as soon as next month.
          </li>
          <li className='mb-1'>
            <strong className='font-semibold'>Coverage Anywhere:</strong>
            Our plans are available across the country, making it easy for
            nearly anyone to get covered.
          </li>
        </ul>

        <h2 className='text-xl font-semibold mb-4'>
          Why Do You Need Dental Insurance?
        </h2>
        <p className='mb-6'>
          Regular dental check-ups help catch issues before they become costly,
          ensuring you maintain a healthy smile. From routine cleanings to more
          serious procedures, dental insurance makes care more affordable,
          giving you peace of mind and protecting your wallet.
        </p>

        <p>
          <strong className='font-semibold'> Get started today!</strong>
          Explore our plans and see how easy it is to protect your smile.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Dental;
