'use client';
import React, { useRef } from 'react';
import {
  FaCube,
  FaFacebook,
  FaLink,
  FaPhoneVolume,
  FaSearch,
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
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
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
      imageUrl:
        'http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/doctor-filling-up-life-insurance-form.jpg',
      title: 'We Provide Best Insurance Policy',
      description:
        'We have almost 30+ years of experience for providing consulting services solutions',
      buttonText: 'Read More',
    },
    {
      imageUrl:
        'http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/happy-parents-laughing-together-with-daughter-1.jpg',
      title: "Secure Your Family's Future",
      description: 'Choose the right insurance plan for your loved ones.',
      buttonText: 'Learn More',
    },
    {
      imageUrl:
        'http://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/uploads/sites/48/2022/07/banner3.jpeg',
      title: 'Comprehensive Coverage Options',
      description: 'Get coverage that suits your unique needs.',
      buttonText: 'Explore Plans',
    },
  ];

  return (
    <header className=' bg-white'>
      {/* Top Bar */}
      <div className='bg-primary-gradient'>
        <div className='container mx-auto text-white py-4 px-16 flex justify-between items-center text-sm'>
          <div className='flex items-center space-x-4 text-xl'>
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
          </div>
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-gray-400'>
              <FaFacebook className='w-6 h-6' />
            </a>
            <a href='#' className='hover:text-gray-400'>
              <FaYoutube className='w-6 h-6' />
            </a>
            <a href='#' className='hover:text-gray-400'>
              <FaLink className='w-6 h-6' />
            </a>
            {/* <img src='/images/textonly_nobuffer.png' className='w-16 h-8' /> */}
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className='h-56'>
        <div className='bg-white py-10  flex justify-between items-start px-10 container mx-auto'>
          <div className='text-5xl font-bold text-[#01209F]'>
            {/* <h1>Insurance Lite</h1>
            <p className='text-lg  text-[#D20E32] font-normal'>
              WordPress Theme
            </p> */}
            <Image
              src='/images/fulllogo_nobuffer.jpg'
              width={100}
              height={20}
              style={{ width: '110px', height: '110px' }}
            />
          </div>
          <div className='hidden lg:flex items-start space-x-8'>
            <div className='flex space-x-2'>
              <span>
                <FaPhoneVolume className='w-12 h-12 text-[#01209F]' />
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-xl'> Phone Number</span>
                <span className='text-[#D20E32]'>012345678</span>
              </div>
            </div>
            <div className='flex space-x-2'>
              <span>
                <SiGooglemaps className='w-12 h-12 text-[#01209F]' />
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-xl'> Contact Address</span>
                <span className='text-[#D20E32]'>Your Address</span>
              </div>
            </div>
            <div className='flex space-x-2'>
              <span>
                <MdOutlineMailOutline className='w-12 h-12 text-[#01209F]' />
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-xl'> Email Address</span>
                <span className='text-[#D20E32]'>your@domain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className='hidden md:block absolute !sm:top-[32%] !lg:top-[23%] !xl:top-[16%]  w-[95%] container z-50 inset-x-0 bg-primary-gradient text-white shadow-lg'>
          <div className='text-xl flex justify-between space-x-4 py-5 font-bold'>
            <div>
              <a href='#' className='hover:bg-red-700 py-2 px-2'>
                Home
              </a>
              <a href='#' className='hover:bg-red-700 py-2 px-4'>
                About
              </a>
              <a href='#' className='hover:bg-red-700 py-2 px-4'>
                Pages
              </a>
              <a href='#' className='hover:bg-red-700 py-2 px-4'>
                Policies
              </a>
              <a href='#' className='hover:bg-red-700 py-2 px-4'>
                FAQ
              </a>
              <a href='#' className='hover:bg-red-700 py-2 px-4'>
                Blogs
              </a>
              <a href='#' className='hover:bg-red-700 py-2 px-4'>
                Life Insurance
              </a>
            </div>
            <div className='flex items-center space-x-5'>
              <span>
                <FaSearch />
              </span>
              <span>
                <FaCube />
              </span>
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
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div
                    className='relative h-[40rem] object-cover bg-center'
                    style={{
                      backgroundImage: `url(${slide.imageUrl})`,
                    }}
                  >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    {/* Text Content */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-center max-w-4xl text-white space-y-4 animate-slideIn'>
                        <h1 className='text-7xl font-bold leading-normal'>
                          {slide.title}
                        </h1>
                        <p className='text-4xl mt-5 leading-normal'>
                          {slide.description}
                        </p>
                        <button className='bg-primary-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
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
