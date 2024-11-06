'use client';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Medicare = () => {
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
            src='/images/medi/medi1.jpg'
            alt='Health Image'
            className='w-full h-full md:h-[40rem] rounded-md object-cover'
          />
          <div className='flex absolute inset-0 flex-col items-end justify-center p-4 sm:p-10'>
            <div className='text-right mr-7 md:mr-[10rem]'>
              <h1 className='text-sm text-primary-darkAqua md:text-4xl lg:text-6xl font-bold mb-4'>
                Medicare
              </h1>
              <button className='bg-[#B92031] text-xs md:text-xl text-white font-semibold py-2 px-4 rounded-md'>
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
              confidently choose the best plan for your needs. Call to speak
              with a licensed Medicare expert today!
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
              What Medicare Plan Is Right for You?
            </h2>
            <ul className='list-none list-inside mb-6 text-lg'>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Medicare Advantage:</strong>
                Medicare Advantage plans combine hospital insurance (Part A) and
                medical insurance (Part B) into one plan. Many of these plans
                also offer prescription drug coverage (Part D), along with extra
                benefits like vision, dental, and hearing.
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>Medicare Supplement:</strong>
                Medicare Supplement plans help cover out-of-pocket costs that
                traditional Medicare doesn’t, such as copayments, coinsurance,
                and deductibles. Choose from a variety of plans designed to save
                you money and protect you from high medical bills
              </li>
              <li className='mb-1'>
                <strong className='text-lg pr-1'>
                  Prescription Drug Plans:
                </strong>
                Get coverage for prescription medications with a Part D plan.
                You’ll have access to a broad network of pharmacies and coverage
                for the drugs you need.
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
              src='/images/medi/medi4.jpg'
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

export default Medicare;
