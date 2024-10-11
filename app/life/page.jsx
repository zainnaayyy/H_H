// pages/life.js
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Life = () => {
  return (
    <>
      <Header />
      <div className='max-w-4xl mx-auto p-6'>
        <div className='text-center text-3xl mb-10 font-bold'>Life</div>
        <h1 className='text-xl font-bold mb-4'>
          Protect Your Loved Ones with Life Insurance
        </h1>
        <p className='mb-6'>
          Life is unpredictable, but your family&apos;s future doesn&apos;t have
          to be. Life insurance provides peace of mind, knowing that your family
          or dependents will be financially protected if the unexpected happens.
          It can be especially crucial if you:
        </p>

        <ul className='list-disc list-inside mb-6'>
          <li>
            Have dependents, like children or a spouse, who rely on your income.
          </li>
          <li>
            Carry significant debt, such as a mortgage, loans, or credit card
            debt.
          </li>
          <li>
            Want to ensure your family has financial support for education,
            daily expenses, or long-term financial stability.
          </li>
        </ul>

        <h2 className='text-xl font-semibold mb-2'>Types of Life Insurance</h2>
        <ul className='list-disc list-inside mb-6'>
          <li>
            <strong>Term Life Insurance:</strong> Affordable coverage for a set
            period (10, 20, 30 years). Great for short-term needs like income
            replacement or mortgage protection.
          </li>
          <li>
            <strong>Whole Life Insurance:</strong> Lifelong coverage that
            includes a cash value component, building savings over time.
          </li>
          <li>
            <strong>Universal Life Insurance:</strong> Flexible policy with the
            potential for cash value growth, allowing you to adjust premiums and
            coverage as your needs change.
          </li>
        </ul>

        <h2 className='text-xl font-semibold mb-4'>
          Get a Personalized Quote... Take the First Step Today!
        </h2>
        <p className='mb-6'>
          Your family&apos;s future is too important to leave to chance. Start
          securing your financial legacy today by exploring our life insurance
          options. Get your free quote and take the first step towards peace of
          mind.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Life;
