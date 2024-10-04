import { Button } from '@/components/ui/button';
import React from 'react';

const services = [
  {
    title: 'Health Insurance',
    description:
      'We have almost 35+ years of experience for providing consulting services solutions',
    imageUrl:
      'http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/doctor-filling-up-life-insurance-form.jpg',
    icon: '💉',
  },
  {
    title: 'Life Insurance',
    description:
      'We have almost 35+ years of experience for providing consulting services solutions',
    imageUrl:
      'http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/happy-parents-laughing-together-with-daughter-1.jpg',
    icon: '👨‍👩‍👧',
  },
  {
    title: 'Dental & Vision Insurance',
    description:
      'We have almost 35+ years of experience for providing consulting services solutions',
    imageUrl:
      'http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/banner3.jpeg',
    icon: '🚗',
  },
  {
    title: 'Medicare Insurance',
    description:
      'We have almost 35+ years of experience for providing consulting services solutions',
    imageUrl:
      'http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/doctor-filling-up-life-insurance-form.jpg',
    icon: '💉',
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
          Get Started
        </Button>
        <p className='text-gray-600 text-center mt-2'>
          An award winning digital branding agency, driving sales and increasing
          value with exceptional websites, brand identities & <br /> campaigns
          lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='relative group w-96 h-80 overflow-hidden rounded-lg shadow-lg'
          >
            <div
              className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
              style={{ backgroundImage: `url(${service.imageUrl})` }}
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
