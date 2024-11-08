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
import BreadcrumbComp from '@/app/components/BreadcrumbComp';

const Life = () => {
  return (
    <>
      <Header />
      <div className=''>
        <BreadcrumbComp
          img={'/images/life/life.jpg'} 
          pos={'start'} 
          route={'Life Insurance'}
        />

        
        <div className='flex flex-col md:flex-row justify-between items-center mt-14 bg-gray-100'>
          {/* Left Side */}
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
              Types of Life Insurance
            </h2>
            <ul className='list-none list-inside mb-6 text-lg'>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>•	Term Life Insurance: </strong>
                Affordable coverage for a set period (10, 20, 30 years). Great for short-term needs like income replacement or mortgage protection.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>•	Whole Life Insurance: </strong>
                Lifelong coverage that includes a cash value component, building savings over time.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>•	Universal Life Insurance: </strong>
                Flexible policy with the potential for cash value growth, allowing you to adjust premiums and coverage as your needs change.
              </li>
            </ul>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4 flex justify-center'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              priority={true}
              width={600}
              height={500}
              src='/images/life/Life2.jpg'
              alt='life Image'
              className='rounded-md'
            />
          </motion.div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-14 bg-gray-100'>
          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4 flex justify-start'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              priority={true}
              width={750}
              height={500}
              src='/images/life/Life3.jpg'
              alt='life Image'
              className='rounded-md'
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
                Get Your Free Quote Today
                </button>
              </Link>
            </div>
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
