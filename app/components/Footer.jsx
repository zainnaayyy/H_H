import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const services = [
  'Privacy Policy',
  'Terms of Service',
  'SMS Terms & Condition',
];

const usefulLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Products', href: '/#products' },
  { name: 'Mission', href: '/mission' },
  { name: 'Contact Us', href: '/#contact' },
];

const Footer = () => {
  return (
    <footer className='bg-footer text-white pt-5'>
      <div className='max-w-7xl mx-auto px-4 mb-6 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Logo and Description */}
          <div className='flex flex-col items-center md:items-start mb-6 md:mb-0'>
            <Image
              src='/images/H4HLogo.svg'
              width={175}
              height={150}
              alt='Health for Haitians Logo'
            />
          </div>

          {/* Services */}
          <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-bold mb-4 text-center md:text-left'>
              Company
            </h3>
            <ul className='space-y-2'>
              {services.map((service, index) => (
                <li
                  key={index}
                  className='flex items-center justify-center md:justify-start'
                >
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
            <h3 className='text-xl font-bold mb-4 text-center md:text-left'>
              Useful Links
            </h3>
            <ul className='space-y-2'>
              {usefulLinks.map((link, index) => (
                <li
                  key={index}
                  className='flex items-center justify-center md:justify-start'
                >
                  <span className='mr-2 text-white'>
                    <IoIosArrowDroprightCircle />
                  </span>
                  <Link href={link.href} className='hover:text-blue-600'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='bg-black w-full py-4'>
        <div className='border-t border-gray-700 w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center py-4'>
          <p className='text-xs sm:text-lg text-center md:text-left mb-4 md:mb-0'>
            © 2024 Health for Haitians. All Rights Reserved.
          </p>
          <div className='flex space-x-4'>
            <FaFacebookF className='text-white hover:text-blue-500 cursor-pointer' />
            <FaWhatsapp className='text-white hover:text-green-500 cursor-pointer' />
            <FaInstagram className='text-white hover:text-red-500 cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
