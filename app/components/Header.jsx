'use client';
import React, { useRef } from 'react';
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaPhoneVolume,
  FaSearch,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { MdOutlineMailOutline } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  console.log(pathname, 'check');
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const isHomePage = pathname === '/'; //

  let heroImage = 'url(/default-hero-image.jpg)';
  let pageTitle = 'Page';

  switch (pathname) {
    case '/about':
      heroImage = 'url(/path-to-about-hero-image.jpg)';
      pageTitle = 'About';
      break;
    case '/pages':
      heroImage = 'url(/path-to-pages-hero-image.jpg)';
      pageTitle = 'Pages';
      break;
    case '/policies':
      heroImage = 'url(/path-to-policies-hero-image.jpg)';
      pageTitle = 'Policies';
      break;
    case '/faq':
      heroImage = 'url(/path-to-faq-hero-image.jpg)';
      pageTitle = 'FAQ';
      break;
    case '/blogs':
      heroImage = 'url(/path-to-blogs-hero-image.jpg)';
      pageTitle = 'Blogs';
      break;
    case '/life-insurance':
      heroImage = 'url(/path-to-life-insurance-hero-image.jpg)';
      pageTitle = 'Life Insurance';
      break;
    default:
      heroImage = 'url(/default-hero-image.jpg)';
      pageTitle = 'Page';
  }

  const slides = [
    {
      imageUrl: '/images/slider/african.jpeg',
      title:
        'Together We are Building a Healthier Haiti, One Family at a Time.',
      description:
        'We have almost 30+ years of experience for providing consulting services solutions',
      buttonText: 'Get Started',
    },
    // {
    //   imageUrl: '/images/slider/african2.jpg',
    //   title: "Secure Your Family's Future",
    //   description: 'Choose the right insurance plan for your loved ones.',
    //   buttonText: 'Get Started',
    // },
    {
      imageUrl: '/images/slider/african3.jpeg',
      title: 'Comprehensive Coverage Options',
      description: 'Get coverage that suits your unique needs.',
      buttonText: 'Get Started',
    },
  ];

  return (
    <header className=' bg-white'>
      {/* Top Bar */}
      <div className='bg-[#13287B]'>
        <div className='container mx-auto text-white py-4 px-16 flex justify-end items-center text-sm'>
          {/* <div className='flex items-center space-x-4 text-xl'>
            <span className='flex items-center'>
              <FaPhoneVolume className='text-[#01209F]' />
              <span className='px-2'>012345678</span>
            </span>
            <span className='flex items-center'>
              <MdOutlineMailOutline className='text-[#01209F]' />{' '}
              <span className='px-2'>your@domain.com</span>
            </span>
            <span className='flex items-center'>
              <SiGooglemaps className='text-[#01209F]' />
              <span className='px-2'>Your Address</span>
            </span>
          </div> */}
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-gray-400'>
              <FaFacebook className='w-6 h-6' />
            </a>
            <a href='#' className='hover:text-gray-400'>
              <FaInstagram className='w-6 h-6' />
            </a>
            <a href='#' className='hover:text-gray-400'>
              <FaWhatsapp className='w-6 h-6' />
            </a>
            {/* <img src='/images/textonly_nobuffer.png' className='w-16 h-8' /> */}
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className='h-56 mb-8'>
        <div className='bg-white py-10  flex justify-between items-center px-10 container mx-auto'>
          <div className='flex items-center gap-x-5 text-5xl font-bold text-[#13287B]'>
            {/* <h1>Insurance Lite</h1>
            <p className='text-lg  text-[#D20E32] font-normal'>
              WordPress Theme
            </p> */}
            <Image
              src='/images/H4HLogo.svg'
              width={200}
              height={150}
              // style={{ width: '300px', height: '300px' }}
            />
            <p className='text-4xl'>Health <span className='text-[#B92031]'> For</span> Haitians</p>
          </div>
          <div className='hidden lg:flex items-start max-w-2xl space-x-8'>
            <div className='flex'>
              <span>
                <FaPhoneVolume className='w-8 h-8 text-[#01209F]' />
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-base'> Phone Number</span>
                <span className='text-[#D20E32] text-sm'>1.844.544.0663</span>
              </div>
            </div>
            <div className='flex'>
              <span>
                <SiGooglemaps className='w-8 h-8 text-[#01209F]' />
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-base'> Contact Address</span>
                <span className='text-[#D20E32] text-sm'>
                  1000 NW 65th St. | Suite 103 <br/> Fort Lauderdale FL 33309
                </span>
              </div>
            </div>
            <div className='flex'>
              <span>
                <MdOutlineMailOutline className='w-8 h-8 text-[#01209F]' />
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-base'> Email Address</span>
                <span className='text-[#D20E32] text-sm'>info@h4hinsurance.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className='hidden md:block    w-[95%] container z-50 inset-x-0 bg-transparent text-black '>
          <div className='text-xl flex justify-center space-x-4 py-2 font-bold'>
            <div>
              <a href='#' className='hover:text-[#13287B] py-2 px-2'>
                Home
              </a>
              <a href='#' className='hover:text-[#13287B] py-2 px-4'>
                Products
              </a>
              <a href='#' className='hover:text-[#13287B] py-2 px-4'>
                About Us
              </a>
              <a href='#' className='hover:text-[#13287B] py-2 px-4'>
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      {isHomePage ? (
        <div className='relative w-full'>
          <Carousel
            plugins={[plugin.current]}
            className='w-full'
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div
                    className='relative h-[50rem] mt-8 bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${slide.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    {/* Text Content */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-center max-w-4xl text-white space-y-4 animate-slideIn'>
                        <h1 className='text-5xl font-bold leading-normal'>
                          {slide.title}
                        </h1>
                        <p className='text-3xl mt-5 leading-normal'>
                          {slide.description}
                        </p>
                        <button className='bg-[#13287B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      ) : (
        <div
          className='relative h-60 bg-cover bg-center'
          style={{
            backgroundImage: heroImage,
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
            <h2 className='text-white text-4xl font-bold'>{pageTitle}</h2>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
