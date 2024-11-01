'use client';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutUs = () => {
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
            src='/images/about/about.jpg'
            alt='Health Image'
            className='w-full h-full md:h-[40rem] rounded-md object-cover'
          />
          <div className='flex absolute inset-0 flex-col items-end justify-center p-4 sm:p-10'>
            <div className='text-right mr-7 md:mr-[10rem]'>
              <h1 className='text-sm text-primary-darkAqua md:text-4xl lg:text-6xl font-bold mb-4'>
                Medicare
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
              A Personal Mission: From Immigrant Experience to Empowerment
            </h2>
            <p className=' text-lg'>
              Founded by a Haitian immigrant with first-hand experience of the
              unique challenges Haitians face when trying to access the American
              Dream, our mission is deeply personal.
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
              src='/images/about/about1.jpg'
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
              src='/images/about/about2.jpg'
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
              A Vision for Holistic Empowerment
            </h2>
            <p className=' text-lg'>
              Like everyone else, he envisions helping the Haitian community
              gain access to essential opportunities such as healthcare,
              education, jobs, networks, housing, nutrition, investing, and
              personal growth. His wife, also of Caribbean descent, shares this
              vision and dreams of expanding these efforts to all Caribbean
              Islands. While our goal is to support all underserved communities,
              our team is particularly focused on Haitians, who are among the
              most underserved. Health is the foundation of life, which is why
              we begin our work here.
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
              Bridging the Healthcare Gap for Haitians
            </h2>
            <p className=' text-lg'>
              Access to quality healthcare is vital for the well-being of
              individuals and families, yet many in the Haitian community face
              significant barriers to obtaining proper health coverage. Language
              differences, lack of information, and financial constraints are
              just a few of the obstacles that prevent them from accessing the
              care they need. Our mission is to bridge this gap by providing
              Creole-speaking resources to help Haitian individuals and families
              navigate the complex healthcare system and secure the coverage
              necessary for a healthier future.
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
              src='/images/about/about3.jpg'
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
              src='/images/about/about4.jpg'
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
              Expanding Access to Quality Healthcare Services
            </h2>
            <p className=' text-lg'>
              Whether they need Medicaid, health insurance, Medicare, or life
              insurance, we believe that everyone deserves access to
              high-quality service and support. Looking ahead, we aim to expand
              our outreach, ensuring that every member of the Haitian community
              has the knowledge and resources to protect their health and
              well-being.
            </p>
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

export default AboutUs;
