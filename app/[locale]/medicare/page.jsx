'use client';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BreadcrumbComp from '@/app/components/BreadcrumbComp';

const Medicare = () => {
  return (
    <>
      <Header />
      <div className=''>
        <BreadcrumbComp
        img={'/images/medi/medi1.jpg'} 
        pos={'end'} 
        route={'Medicare'}
      />

        <div className='flex flex-col mt-8 md:flex-row justify-between items-center '>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua font-bold mb-8'>
              Medicare Coverage Made Simple, Affordable, and Tailored to Your
              Needs.
            </h2>
            <p className=' text-lg'>
              Turning 65 and navigating Medicare can be overwhelming, but we’re
              here to help. Whether you’re enrolling for the first time,
              exploring additional coverage options, or switching plans, we’ll
              guide you every step of the way.
            </p>
            <div className='flex justify-center items-center'>
              <Link href='/appointment'>
                <button className='bg-primary-darkAqua text-white font-semibold py-2 px-4 rounded-md mt-8'>
                  Get a Quote
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
              src='/images/medi/medi2.jpg'
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
              src='/images/medi/medi3.jpg'
              alt='Health Plans'
              className='w-full h-auto rounded-md'
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua mt-4 font-semibold mb-4'>
              What Medicare Plan Is Right for You?
            </h2>
            <ul className='list-none list-inside mb-6 text-lg'>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Medicare Advantage (Part C):</strong>
                Medicare Advantage plans combine hospital insurance (Part A) and
                medical insurance (Part B) into one plan. Many of these plans
                also offer prescription drug coverage (Part D), along with extra
                benefits like vision, dental, and hearing.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Medicare Supplement (Medigap):</strong>
                Medicare Supplement plans help cover out-of-pocket costs that
                traditional Medicare doesn’t, such as copayments, coinsurance,
                and deductibles. Choose from a variety of plans designed to save
                you money and protect you from high medical bills
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>
                Prescription Drug Plans (Part D):
                </strong>
                Get coverage for prescription medications with a Part D plan.
                You’ll have access to a broad network of pharmacies and coverage
                for the drugs you need.
              </li>
            </ul>
          </motion.div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-14'>
          {/* Left Side */}
          <motion.div
            className='w-full md:w-1/2 p-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl lg:text-5xl text-primary-darkAqua font-bold mb-8'>
              Compare Medicare Plans Now!
            </h2>
            <p className=' text-lg'>
              Don’t leave your healthcare to chance. Explore our Medicare plans
              today and find coverage that keeps you healthy, protected, and
              worry-free. With our expert guidance and simple tools, you can
              confidently choose the best plan for your needs. 
              <a href='/appointment' className='underline text-blue-600 pr-1 px-1'>Call to speak</a>
              with a licensed Medicare expert today!
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
              src='/images/medi/medi4.jpg'
              alt='Health Image'
              className='w-full h-full rounded-md'
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

export default Medicare;
