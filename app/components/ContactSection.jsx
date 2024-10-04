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
        <div className=' flex mb-10 pb-10 flex-col lg:flex-row  bg-map rounded-lg'>
          {/* Contact Form */}
          <div className=' mx-auto mt-10 p-6 bg-white  rounded-lg '>
            <h2 className='text-3xl font-semibold mb-6'>Request a Quote</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 text-xl font-semibold mb-2'>
                  Choose your Insurance Type
                </label>
                <div className='flex text-lg flex-wrap gap-4'>
                  {[
                    'Health',
                    'Dental',
                    'Vision',
                    'Medicare',
                    'Life / Critical Illness',
                  ].map((type) => (
                    <label key={type} className='inline-flex items-center'>
                      <input
                        type='checkbox'
                        className='form-checkbox text-blue-600'
                      />
                      <span className='ml-2'>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className='mb-4'>
                <label className='block text-xl text-gray-700 font-semibold mb-2'>
                  Your Major Life Changing Event
                </label>
                <select className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'>
                  <option>Birth, Adoption, Foster Care</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className='mb-4 '>
                <label className='text-xl block text-gray-700 font-semibold mb-2'>
                  Full Name
                </label>
                <div className='flex gap-4'>
                  <input
                    type='text'
                    placeholder='First'
                    className='w-1/2 text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  />
                  <input
                    type='text'
                    placeholder='Last'
                    className='w-1/2 text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label className='block text-xl text-gray-700 font-semibold mb-2'>
                  Date of Birth
                </label>
                <input
                  type='date'
                  className='w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-xl font-semibold mb-2'>
                  State/Province
                </label>
                <select className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'>
                  <option>Alabama</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2 text-xl'>
                  Zip Code
                </label>
                <input
                  type='text'
                  className='w-full text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-xl text-gray-700 font-semibold mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-xl'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold mb-2 text-xl'>
                  Mobile phone number (US only)
                </label>
                <input
                  type='tel'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none text-xl focus:ring-2 focus:ring-blue-600'
                />
              </div>
              <div className='mb-6'>
                <label className='inline-flex items-center text-xl'>
                  <input
                    type='checkbox'
                    className='form-checkbox text-blue-600'
                  />
                  <span className='ml-2'>Text me with news & offers</span>
                </label>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
              >
                Submit
              </button>
            </form>
          </div>
          {/* Map
          <div className='lg:w-1/2  lg:ml-6'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5428347855853!2d85.34176967446052!3d27.684488029976038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b9c9b7a4b%3A0xe5c8f8b8c43a4b35!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1692090987598!5m2!1sen!2snp'
              width='100%'
              height='100%'
              allowFullScreen=''
              loading='lazy'
              className='rounded-lg border border-gray-300'
            ></iframe>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
