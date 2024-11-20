// pages/health.js
'use client';
import React from 'react';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
import Image from 'next/image';
import { IoIosCheckbox } from 'react-icons/io';
// import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BreadcrumbComp from '@/app/components/BreadcrumbComp';
import Footer from '@/app/[locale]/components/Footer';
import CTA from '@/app/[locale]/components/CTA';
import Header from '@/app/[locale]/components/Header';
import { useTranslation } from 'react-i18next';

const Health = () => {
  const healthPoints = [
    'Doctor Visits and Specialist Care',
    'Emergency and Hospital Services',
    'Prescription Drugs',
    'Preventive Services (e.g. annual check-ups)',
    'Maternity and Newborn Care',
    'Mental Health Services',
  ];
  const { t } = useTranslation();
  const healthSections = t('health.sections', { returnObjects: true });
  console.log('Health Sections:', healthSections[3])
  return (
    <>
      <Header />

      <div className=''>
        <BreadcrumbComp
        img={'/images/health/couple.jpg'} 
        pos={'end'} 
        route={'Health Insurance'}
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
            {healthSections[1].title}
            </h2>
            <p className=' text-lg'>
            {healthSections[1].description}
            </p>
            <div className='flex justify-center items-center'>
              <Link href='/appointment'>
                <button className='bg-primary-darkAqua text-white font-semibold py-2 px-4 rounded-md mt-8'>
                {healthSections[1].button_text}
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
            {healthSections[2].title}
            </h2>
            <p className=' text-lg'>
            {healthSections[2].description}
            </p>
            <br />
            <p className=' pl-2'>
            {healthSections[2].call_to_action}
              <a
                href='/appointment'
                className='underline text-blue-600 pr-1 px-1'
              >
               {healthSections[2].link_text}
              </a>
         
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
          {healthSections[3].title}
          </h2>
          <p className='text-center text-white text-lg mb-4 '>
          {healthSections[3].description}
          </p>
          <ul className='grid grid-cols-1 gap-y-4 mt-10 md:grid-cols-2 md:gap-x-6 mb-10'>
          {healthSections[3]?.list?.map((feature, index) => (
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
                {feature.text || feature.title || feature}
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
            {healthSections[4].title}
            </h2>
            <p className='mb-4 text-lg'>
            {healthSections[4].description}
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
            {healthSections[5].title}
            </h2>
            <ul className='list-none list-inside mb-6 text-lg'>
     {healthSections[5].list.map((item, index) => (
       <li key={index} className='mb-1'>
         <strong className='text-lg pr-1'>{item.item}:</strong>
         {item.description}
       </li>
     ))}
     <li className='mb-1'>
       <strong className='text-lg pr-1'>
         {healthSections[5].list[4].item}:
       </strong>
       {healthSections[5].list[4].description}
     
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

        <div className='mt-5'>
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Health;
