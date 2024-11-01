// pages/health.js
'use client';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

      <div className=''>
        {/* <div className='text-center text-6xl mb-10 font-bold'>
          Health Insurance
        </div> */}

        {/* <div className=''>
          <h1 className='text-2xl font-bold mb-4 mt-8 '>
            Explore the Best Health
          </h1>
        </div> */}

        <div className='relative w-full mt-10 p-10 rounded-md'>
          <img
            src='/images/health/couple.jpg'
            alt='Health Image'
            className='w-full h-full md:h-[34rem] rounded-md object-cover'
          />
          <div className='flex absolute inset-0 flex-col items-end justify-center p-4 sm:p-10'>
            <div className='text-right mr-7 md:mr-[10rem]'>
              <h1 className='text-sm text-primary-darkAqua md:text-4xl lg:text-6xl font-bold mb-4'>
                Health Insurance
              </h1>
              <button className='bg-primary-darkAqua text-xs md:text-xl text-white font-semibold py-2 px-4 rounded-md'>
                <Link href='/appointment'>Find Out More</Link>
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-8 md:flex-row justify-between items-center '>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua font-bold mb-8'>
              Plans for Your Family&apos;s Needs
            </h2>
            <p className=' text-lg'>
              Finding the right health plan for your family is easier than ever!
              Our Health Insurance options offer a wide variety of plans
              tailored to fit your needs and budget. From comprehensive coverage
              to affordable options, we&apos;ve got you covered.
            </p>
            <div className='flex justify-center items-center'>
              <Link href='/appointment'>
                <button className='bg-primary-darkAqua text-white font-semibold py-2 px-4 rounded-md mt-8'>
                  Get Quote
                </button>
              </Link>
            </div>
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
              className='w-full h-auto rounded-md'
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
              className='w-full h-auto rounded-md'
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua font-bold mb-8'>
              Health Insurance Helps You Save
            </h2>
            <p className=' text-lg'>
              Without coverage, even a single hospital visit can result in
              thousands of dollars in medical bills. Health insurance helps you
              manage these costs by sharing the burden and ensuring you pay a
              fraction of what you would otherwise.
            </p>
            <br />
            <p className=' pl-2'>
              Ready to protect what matters most?
              <a
                href='/appointment'
                className='underline text-blue-600 pr-1 px-1'
              >
                Talk to an agent
              </a>
              today and get expert advice on choosing the best health plan for
              you and your loved ones.
            </p>
          </motion.div>
        </div>

        <motion.div
          className='mt-10 mb-6 flex flex-col items-center bg-primary-darkAqua'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <h2 className='text-center mt-6 text-white text-lg md:text-5xl font-bold mb-4'>
            What Does Health Coverage Include?
          </h2>
          <p className='text-center text-white text-lg mb-4 '>
            Here are some of the Essential Benefits the ACA plan includes:
          </p>
          <ul className='grid grid-cols-1 gap-y-4 mt-10 md:grid-cols-2 md:gap-x-6 mb-10'>
            {healthPoints.map((feature, index) => (
              <motion.li
                key={index}
                className='flex items-center'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <IoIosCheckbox
                  color='white'
                  className='mr-3 w-7 h-7 flex-shrink-0 text-success-solid'
                />
                <span className='bg-gray-100 px-2 text-sm font-normal text-primary-on-primary md:text-lg'>
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

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
              className='w-full h-full rounded-md'
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua mt-6 font-semibold mb-8'>
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

        <div className='flex flex-col md:flex-row justify-between items-center mt-14'>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua mt-4 font-semibold mb-4'>
              Out-of-Pocket Costs includes:
            </h2>
            <ul className='list-none list-inside mb-6 text-lg'>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Premium:</strong>
                The fixed monthly payment you make to keep your health insurance
                active.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Deductibles:</strong>
                The amount you must pay for covered healthcare services before
                your insurance starts to pay.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Copayments:</strong>A fixed
                amount you pay for specific services like doctor visits or
                prescriptions.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Coinsurance:</strong>A
                percentage of the costs you share with your insurance company
                after meeting your deductible.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>
                  Comparing Insurance Plans:
                </strong>
                When comparing insurance plans, it&apos;s crucial to review all
                costs.
                <a href='/' className='underline text-blue-600 pr-1 px-1'>
                  Explore the best plan
                </a>
                to fit your healthcare needs and budget. Connect with our
                licensed agent today!
              </li>
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
              className='w-full h-full rounded-md'
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
        {/* <div className='mt-8'>
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
        </div> */}
        <div className='mt-5'>
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Health;
