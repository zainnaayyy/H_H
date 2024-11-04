// pages/life.js
'use client';
import React from 'react';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Life = () => {
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
            src='/images/life/life.jpg'
            alt='Health Image'
            className='w-full h-full md:h-[40rem] rounded-md object-cover'
          />
          <div className='flex absolute inset-0 flex-col items-start justify-center p-4 sm:p-10'>
            <div className='hidden sm:block text-center ml-7 md:mr-[10rem]'>
              <h1 className='text-sm text-blue-900 md:text-4xl lg:text-6xl font-bold mb-4'>
                Life
              </h1>
              <button className='bg-blue-800 text-xs md:text-xl text-white font-semibold py-2 px-4 rounded-md'>
                <Link href='/appointment'>Get Your Free Quote Today!</Link>
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
              src='/images/life/Life3.jpg'
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
              Get a Personalized Quote... Take the First Step Today!
            </h2>
            <p className=' text-lg'>
              Your family&apos;s future is too important to leave to chance.
              Start securing your financial legacy today by exploring our life
              insurance options. Get your free quote and take the first step
              towards peace of mind.
            </p>
            <div className='flex justify-center items-center'>
              <Link href='/appointment'>
                <button className='bg-primary-darkAqua text-white font-semibold py-2 px-4 rounded-md mt-8'>
                  Get a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-14 bg-gray-100'>
          {/* Left Side */}

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua font-bold mb-8'>
              Protect Your Loved Ones with Life Insurance
            </h2>
            <p className=' text-lg'>
              Life is unpredictable, but your family&apos;s future doesn&apos;t
              have to be. Life insurance provides peace of mind, knowing that
              your family or dependents will be financially protected if the
              unexpected happens. It can be especially crucial if you:
            </p>
            <ul className='list-none list-inside mb-6 text-lg'>
              <li className='mb-1'>
                Have dependents, like children or a spouse, who rely on your
                income.
              </li>
              <li className='mb-1'>
                Carry significant debt, such as a mortgage, loans, or credit
                card debt.
              </li>
              <li className='mb-1'>
                Want to ensure your family has financial support for education,
                daily expenses, or long-term financial stability.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src='/images/life/Life1.jpg'
              alt='Health Plans'
              className='w-full h-auto rounded-md'
            />
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

export default Life;
