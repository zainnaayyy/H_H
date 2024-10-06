import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const services = [
  {
    title: 'Health Insurance',
    description:
      'The Affordable Care Act offers resources to help reduce obstacles and provide healthcare access for those in need.',
    imageUrl: '/images/health.jpeg',
    icon: '💉',
  },
  {
    title: 'Life Insurance',
    description: 'Let us help you navigate the key to financial security.',
    imageUrl: '/images/life.jpeg',
    icon: '👨‍👩‍👧',
  },
  {
    title: 'Dental & Vision Insurance',
    description:
      'We provide affordable dental and vision policies for your overall health.',
    imageUrl: '/images/dental.jpeg',
    icon: '🦷',
  },
  {
    title: 'Medicare Insurance',
    description:
      'Finding the right medicare supplement can be challenging, we are here to help.',
    imageUrl: '/images/medicare.jpeg',
    icon: '⚕️',
  },
];

const InsuranceService = () => {
  return (
    <div className='bg-gray-100 py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-800'>
          We Are Here to Service Your Insurance Needs
        </h2>
        <Button size='lg' className='bg-[#13287B] mt-2 '>
          <Link href='#contact'>Get Started</Link>
        </Button>
        <p className='text-gray-600 text-center mt-2 text-lg'>
          Insurance can leave you with a lot of questions, let us help you make
          the best informed decision.
        </p>
      </div>
      <div className='max-w-4xl mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='relative group w-96 h-80 overflow-hidden rounded-lg shadow-lg'
          >
            <div
              className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
              style={{
                backgroundImage: `url(${service.imageUrl})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div className='absolute inset-x-0 top-10 left-10 w-80 h-64 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0'>
              <div className='text-blue-600 text-5xl mb-4'>{service.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceService;
