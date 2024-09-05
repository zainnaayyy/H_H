import React from 'react';
import { FaBuilding, FaMoneyBillWave, FaCogs } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Trusted Company',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit libero facilisis etiam ridiculus.',
    icon: FaBuilding,
  },
  {
    id: 2,
    title: 'Anytime Money Back',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit libero facilisis etiam ridiculus.',
    icon: FaMoneyBillWave,
  },
  {
    id: 3,
    title: 'Flexible Plan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit libero facilisis etiam ridiculus.',
    icon: FaCogs,
  },
  {
    id: 4,
    title: 'Trusted Company',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit libero facilisis etiam ridiculus.',
    icon: FaBuilding,
  },
  {
    id: 5,
    title: 'Anytime Money Back',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit libero facilisis etiam ridiculus.',
    icon: FaMoneyBillWave,
  },
  {
    id: 6,
    title: 'Flexible Plan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit libero facilisis etiam ridiculus.',
    icon: FaCogs,
  },
];

const ServicesSection = () => {
  return (
    <div className='bg-gray-100 py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-800'>
          Insurance Provide You a Better Future
        </h2>
        <p className='text-gray-600 mt-2'>
          We have almost 35+ years of experience for providing consulting
          services solutions
        </p>
      </div>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className='bg-white p-8 shadow-lg rounded-lg'>
              <div className='flex justify-between items-center mb-4'>
                <Icon className='h-14 w-14 text-blue-600 mr-4' />
                <span className='text-7xl text-gray-100 font-bold'>{`0${
                  index + 1
                }`}</span>
              </div>
              <h3 className='text-xl font-bold text-gray-800'>
                {service.title}
              </h3>
              <p className='text-gray-600 mt-2'>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
