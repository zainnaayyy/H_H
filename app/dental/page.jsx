// pages/dental.js
'use client';
import React from 'react';

import { FaBusinessTime, FaChartBar, FaTrophy, FaUsers } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Dental = () => {
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
            src='/images/dental/dental.jpg'
            alt='Health Image'
            className='w-full h-full md:h-[40rem] rounded-md object-cover'
          />
          <div className='flex absolute inset-0 flex-col items-start justify-center p-4 sm:p-10'>
            <div className='hidden sm:block text-center ml-7 md:mr-[10rem]'>
              <h1 className='text-sm text-blue-900 md:text-4xl lg:text-6xl font-bold mb-4'>
                Dental & Vision
              </h1>
              <button className='bg-blue-800 text-xs md:text-xl text-white font-semibold py-2 px-4 rounded-md'>
                <Link href='/appointment'>Find Out More</Link>
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-8 md:flex-row justify-between items-center '>
          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src='/images/dental/dental1.jpg'
              alt='Health Plans'
              className='w-full h-auto rounded-md'
            />
          </motion.div>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua font-bold mb-8'>
              Affordable Dental & Vision Insurance Plans for Your Family
            </h2>
            <p className=' text-lg'>
              Finding the right dental insurance doesn&apos;t have to be
              complicated—or expensive. We offer a range of affordable plans
              that make it easy to get the dental care you need. Plus, you can
              even bundle your plan with vision and hearing coverage for
              complete care, all in one package.
            </p>
            <div className='flex justify-center items-center'>
              <Link href='/appointment'>
                <button className='bg-primary-darkAqua text-white font-semibold py-2 px-4 rounded-md mt-8'>
                  Get Quote
                </button>
              </Link>
            </div>
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
              Benefits of Dental Insurance:
            </h2>
            <ul className='list-none list-inside mb-6 text-lg'>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Enroll Anytime:</strong>
                There is no need to wait for open enrollment—you can sign up for
                coverage year-round!
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Fast Activation:</strong>
                Enroll today, and your coverage could begin as soon as next
                month.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Coverage Anywhere:</strong>A
                fixed Our plans are available across the country, making it easy
                for nearly anyone to get covered.
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
              src='/images/dental/dental2.jpg'
              alt='Health Image'
              className='w-full h-full rounded-md'
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
              src='/images/dental/dental3.jpg'
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
              Why Do You Need Dental Insurance?
            </h2>
            <p className=' text-lg'>
              Regular dental check-ups help catch issues before they become
              costly, ensuring you maintain a healthy smile. From routine
              cleanings to more serious procedures, dental insurance makes care
              more affordable, giving you peace of mind and protecting your
              wallet.{' '}
              <a href='/' className='underline text-blue-600 pr-1 '>
                Get Started Today!
              </a>
              Explore our plans and see how easy it is to protect your smile.
            </p>
          </motion.div>
        </div>

        <div className='mt-5'>
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dental;
