import React from 'react';
import { FaBuilding, FaMoneyBillWave, FaCogs, FaPhone } from 'react-icons/fa';
import { MdOutlineMail, MdOutlineMailOutline } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';

const ContactSection = () => {
  const services = [
    {
      id: 1,
      title: 'Call Us',
      description: '012345678',
      icon: FaPhone,
    },
    {
      id: 2,
      title: 'Email Us',
      description: 'your@domain.com',
      icon: MdOutlineMailOutline,
    },
    {
      id: 3,
      title: 'Address',
      description: 'Your Address',
      icon: SiGooglemaps,
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
    <>
      <div
        className='bg-map py-16 '
        style={{
          backgroundImage:
            "url('https://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/themes/insurance-lite/assets/map-bg.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800'>Contact Section</h2>
          <p className='text-gray-600 mt-2'>Contact Subtitle Section</p>
        </div>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className='bg-white p-8 shadow-lg '>
                <div className='flex justify-center items-center mb-4 py-2'>
                  <Icon className='h-14 w-14 text-blue-600 mr-4' />
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
      <div
        className='bg-map mb-10'
        style={{
          backgroundImage:
            "url('https://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/themes/insurance-lite/assets/map-bg.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className='max-w-6xl mx-auto  flex flex-col lg:flex-row shadow-lg bg-map rounded-lg'>
          {/* Contact Form */}
          <div className='lg:w-1/2 p-6 bg-gray-50'>
            <form className='space-y-4'>
              {formFields.map((field, index) => (
                <div key={index}>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      placeholder={field.placeholder}
                      className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      rows='6'
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                  )}
                </div>
              ))}
              <div className='flex justify-end mt-4'>
                <button
                  type='submit'
                  className='bg-primary-gradient text-white font-semibold py-2 px-6  hover:bg-blue-800 transition-colors'
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className='lg:w-1/2  lg:ml-6'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5428347855853!2d85.34176967446052!3d27.684488029976038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b9c9b7a4b%3A0xe5c8f8b8c43a4b35!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1692090987598!5m2!1sen!2snp'
              width='100%'
              height='100%'
              allowFullScreen=''
              loading='lazy'
              className='rounded-lg border border-gray-300'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
