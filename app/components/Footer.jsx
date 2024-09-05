import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaYoutube, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const services = [
  'Life Insurance',
  'Health Insurance',
  'Car Insurance',
  'Home Insurance',
  'Business Insurance',
];

const usefulLinks = ['Home', 'Contact', 'Insurance', 'Faq', 'Services'];

const galleryImages = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
  'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
  'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
  'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648',
];

const Footer = () => {
  return (
    <footer className='bg-footer text-white pt-10'>
      <div className='max-w-7xl mx-auto px-4 mb-6 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div>
            <img
              src='http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/client_05_white.png'
              alt='Scramjet'
              className='h-12 mb-4'
            />

            <p className='text-sm'>
              There are many vari of pass of lorem ipsum availab but the
              majority have suffered in some form by injected humour or words.
              <br />
              <br />
              The majority have suffered in some form by injected humour or
              words.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Services</h3>

            <ul className='space-y-2'>
              {services.map((service, index) => (
                <li key={index} className='flex items-center'>
                  <span className='mr-2 text-white'>
                    <IoIosArrowDroprightCircle />
                  </span>
                  <Link href='/' className='hover:text-blue-600'>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Useful Links</h3>
            <ul className='space-y-2'>
              {usefulLinks.map((link, index) => (
                <li key={index} className='flex items-center'>
                  <span className='mr-2 text-white'>
                    <IoIosArrowDroprightCircle />
                  </span>
                  <Link href='/' className='hover:text-blue-600 w-full'>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Gallery</h3>
            <div className='grid grid-cols-3 gap-2'>
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className='w-full h-16 object-cover rounded'
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
      <div className='bg-black w-full'>
        <div className='border-t w-[80%] mx-auto bg-black border-gray-700 h-16 px-5 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-lg'>
            Copyright © 2024 Insurance Lite - WordPress Theme : by Sparkle WP
          </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <FaFacebookF className='text-white hover:text-blue-500 cursor-pointer' />
            <FaYoutube className='text-white hover:text-red-500 cursor-pointer' />
            <FaShoppingCart className='text-white hover:text-green-500 cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
