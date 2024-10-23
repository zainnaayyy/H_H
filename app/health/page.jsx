// pages/health.js
'use client';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const Health = () => {
  const healthPoints = [
    'Doctor Visits and Specialist Care',
    'Emergency and Hospital Services',
    'Prescription Drugs',
    'Preventive Services (e.g. annual check-ups)',
    'Maternity and Newborn Care',
    'Mental Health Services',
  ];
  return (
    <>
      <Header />
      <div className='  p-6'>
        <div className='text-center text-3xl mb-10 font-bold'>
          Health Insurance
        </div>
        <div className='relative w-full'>
          <img
            src='/images/health/Health.jpg'
            alt='Health Image'
            className='w-full h-full md:h-[40rem] '
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <h1 className='text-lg md:text-5xl font-bold text-white'>
              Health Insurance
            </h1>
          </div>
        </div>
        {/* <div className=''>
          <h1 className='text-2xl font-bold mb-4 mt-8 '>
            Explore the Best Health
          </h1>
        </div> */}
        <div className='flex flex-col mt-8 md:flex-row justify-between items-center bg-gray-100'>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl text-blue-700 font-bold mb-8'>
              Plans for Your Family&apos;s Needs
            </h2>
            <p className=' text-lg'>
              Finding the right health plan for your family is easier than ever!
              Our Health Insurance options offer a wide variety of plans
              tailored to fit your needs and budget. From comprehensive coverage
              to affordable options, we&apos;ve got you covered.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src='/images/health/Health2.jpg'
              alt='Health Plans'
              className='w-full h-auto'
            />
          </motion.div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-14 bg-gray-100'>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src='/images/health/Health3.jpg'
              alt='Health Plans'
              className='w-full h-auto'
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl text-blue-700 font-bold mb-8'>
              Health Insurance Helps You Save
            </h2>
            <p className=' text-lg'>
              Without coverage, even a single hospital visit can result in
              thousands of dollars in medical bills. Health insurance helps you
              manage these costs by sharing the burden and ensuring you pay a
              fraction of what you would otherwise.
            </p>
            <br />
            <p className=' '>
              Ready to protect what matters most?
              <a href='/appointment' className='underline text-blue-600 pr-1'>
                Talk to an agent
              </a>
              today and get expert advice on choosing the best health plan for
              you and your loved ones.
            </p>
          </motion.div>
        </div>

        <div className='mt-5 mb-6'>
          <h2 className='text-center mt-6 text-blue-700 text-2xl font-bold mb-4'>
            What Does Health Coverage Include?
          </h2>
          <p className='text-center mb-4 text-blue-300'>
            Here are some of the Essential Benefits the ACA plan includes:
          </p>
          <ul className='flex flex-wrap gap-y-4 mt-14'>
            {healthPoints.map((feature, index) => (
              <li key={index} className='flex w-full items-center md:w-1/2'>
                <IoIosCheckbox
                  color='blue'
                  className='mr-3 w-7 h-7 flex-shrink-0 text-success-solid'
                />
                <span className='text-nowrap bg-gray-100 px-2 text-sm font-normal text-primary-on-primary md:text-lg'>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-14 bg-gray-100'>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src='/images/health/Health5.jpg'
              alt='Health Image'
              className='w-full h-full '
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl text-blue-700 mt-6 font-semibold mb-8'>
              What are Out-of-Pocket Expenses?
            </h2>
            <p className='mb-4 text-lg'>
              Out-of-pocket expenses are the costs you pay directly for
              healthcare services that aren&apos;t covered by your health
              insurance plan. Understanding these costs is crucial to budgeting
              for your healthcare needs and preventing unexpected financial
              strain.
            </p>
          </motion.div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-14 bg-gray-100'>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl text-blue-700 mt-4 font-semibold mb-4'>
              Out-of-Pocket Costs includes:
            </h2>
            <ul className='list-none list-inside mb-6 text-lg'>
              <li className='mb-1'>
                <strong className='text-sm'>Premium:</strong>
                The fixed monthly payment you make to keep your health insurance
                active.
              </li>
              <li className='mb-1'>
                <strong className='text-sm'>Deductibles:</strong>
                The amount you must pay for covered healthcare services before
                your insurance starts to pay.
              </li>
              <li className='mb-1'>
                <strong className='text-sm'>Copayments:</strong>A fixed amount
                you pay for specific services like doctor visits or
                prescriptions.
              </li>
              <li className='mb-1'>
                <strong className='text-sm'>Coinsurance:</strong>A percentage of
                the costs you share with your insurance company after meeting
                your deductible.
              </li>
              {/* <li className='mb-1'>
                <strong className='text-sm'>Out-of-Pocket Maximum:</strong>
                The total amount you&apos;ll pay for covered services in a
                policy period. Once you reach this limit, the insurance company
                covers all further expenses.
              </li> */}
            </ul>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src='/images/health/Health.jpg'
              alt='Health Image'
              className='w-full h-full '
            />
          </motion.div>
        </div>

        {/* <div className='w-full md:w-1/2 mt-20'>
          <img
            src='/images/health/Health.jpg'
            alt='Health Image'
            className='w-full h-full '
          />
        </div>
        <h2 className='text-2xl mt-4 font-semibold mb-4'>
          Understanding Health Insurance
        </h2>
        <h2 className='text-lg font-semibold mb-4'>
          What are Out-of-Pocket Expenses?
        </h2>
        <p className='mb-6'>
          Out-of-pocket expenses are the costs you pay directly for healthcare
          services that aren&apos;t covered by your health insurance plan.
          Understanding these costs is crucial to budgeting for your healthcare
          needs and preventing unexpected financial strain.
        </p>

        <h2 className='text-lg font-semibold mb-2'>
          Out-of-Pocket Costs includes:
        </h2>
        <ul className='list-none list-inside mb-6'>
          <li className='mb-1'>
            <strong className='text-sm'>Premium:</strong>
            The fixed monthly payment you make to keep your health insurance
            active.
          </li>
          <li className='mb-1'>
            <strong className='text-sm'>Deductibles:</strong>
            The amount you must pay for covered healthcare services before your
            insurance starts to pay.
          </li>
          <li className='mb-1'>
            <strong className='text-sm'>Copayments:</strong>A fixed amount you
            pay for specific services like doctor visits or prescriptions.
          </li>
          <li className='mb-1'>
            <strong className='text-sm'>Coinsurance:</strong>A percentage of the
            costs you share with your insurance company after meeting your
            deductible.
          </li>
          <li className='mb-1'>
            <strong className='text-sm'>Out-of-Pocket Maximum:</strong>
            The total amount you&apos;ll pay for covered services in a policy
            period. Once you reach this limit, the insurance company covers all
            further expenses.
          </li>
        </ul> */}
        <div className='mt-8'>
          <p className='text-center'>
            When comparing insurance plans, it&apos;s crucial to review all
            costs. This understanding will help you make smarter decisions. Let
            us help you{' '}
            <a href='/' className='underline text-blue-600 pr-1'>
              explore the best plan
            </a>
            to fit your healthcare needs and budget. Connect with our licensed
            agent today!
          </p>
        </div>
        <div className='mt-5'>
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Health;
