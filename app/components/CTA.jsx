'use client';
import React from 'react';
import { FaBuilding, FaMoneyBillWave, FaCogs, FaPhone } from 'react-icons/fa';
import {
  MdOutlineChat,
  MdOutlineMail,
  MdOutlineMailOutline,
} from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const CTA = () => {
  const services = [
    {
      id: 1,
      title: 'Call',
      description: '1.844.544.0663',
      icon: FaPhone,
    },
    {
      id: 2,
      title: 'Email',
      description: 'info@h4hinsurance.com',
      icon: MdOutlineMailOutline,
    },
    {
      id: 3,
      title: 'Chat',
      description: 'Mon to Fri (9am-6pm EST)',
      icon: MdOutlineChat,
    },
  ];

  const formFields = [
    { label: 'Your name', type: 'text', placeholder: 'Your name' },
    { label: 'Your email', type: 'email', placeholder: 'Your email' },
    { label: 'Subject', type: 'text', placeholder: 'Subject' },
    {
      label: 'Your message (optional)',
      type: 'textarea',
      placeholder: 'Your message',
    },
  ];

  return (
    <div className='mb-12'>
      <div
        className='bg-map py-16 '
        style={{
          backgroundImage:
            "url('https://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/themes/insurance-lite/assets/map-bg.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-500'>Contact Us!</h2>
        </div>
        <div className='max-w-6xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className='bg-white p-6 shadow-lg '>
                <div className='flex justify-center items-center mb-4 py-2'>
                  <Icon className='h-12 w-12 text-[#B92031]' />
                </div>
                <h3 className='text-xl text-center font-bold text-gray-800'>
                  {service.title}
                </h3>
                <p className='text-gray-600 text-center mt-2'>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CTA;
