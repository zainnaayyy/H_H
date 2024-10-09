import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaYoutube, FaShoppingCart, FaWhatsapp, FaInstagram } from 'react-icons/fa';
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
  { name: 'Mission', href: '/#mission' },
  { name: 'Contact Us', href: '/#contact' },
];

const Footer = () => {
  return (
    <footer className='bg-footer text-white pt-5'>
      <div className='max-w-7xl mx-auto px-4 mb-6 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {/* Logo and Description */}
          <div>
            <Image
              src='/images/H4HLogo.svg'
              width={175}
              height={150}
            />
            {/* <p className='text-4xl'>Health <span className='text-[#B92031]'> For</span> Haitians</p> */}
          </div>

          {/* Services */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Company</h3>

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
                  <Link href={link.href} className='hover:text-blue-600 w-full'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
      <div className='bg-black w-full'>
        <div className='border-t w-[80%] mx-auto bg-black border-gray-700 h-16 px-5 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-xs sm:text-lg'>
            © 2024 Health for Haitians. All Rights Reserved.
          </p>
          <div className='flex space-x-4 pb-2 mt-0 sm:mt-4 md:mt-0'>
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
