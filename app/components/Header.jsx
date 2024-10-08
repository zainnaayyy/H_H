'use client';
import React, { useRef, useState, useEffect } from 'react';
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
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  console.log(pathname, 'check');
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));
  const isHomePage = pathname === '/';
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    {
      imageUrl: '/images/slider/african3.jpeg',
      title: 'Comprehensive Coverage Options',
      description: 'Get coverage that suits your unique needs.',
      buttonText: 'Get Started',
    },
  ];

  const handleLinkClick = (href) => {
    router.push(href); // Use router to navigate
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <header id='home' className='bg-white'>
      {/* Top Bar */}
      <div className='bg-[#13287B]'>
        <div className='container mx-auto text-white py-4 px-16 flex justify-end items-center text-sm'>
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
            <Sheet>
              <SheetTrigger asChild>
                <button className='hover:text-gray-400'>
                  <FaBars className='w-6 h-6' />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                  <SheetDescription>
                    Choose a page to navigate to:
                  </SheetDescription>
                </SheetHeader>
                <div className='grid gap-4 py-4'>
                  <nav className='py-4'>
                    <ul className='flex flex-col space-y-4'>
                      <li>
                        <Link
                          href='#home'
                          onClick={() => handleLinkClick('#home')}
                          className='hover:text-[#13287B] py-2 px-2'
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#about'
                          onClick={() => handleLinkClick('#about')}
                          className='hover:text-[#13287B] py-2 px-2'
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#products'
                          onClick={() => handleLinkClick('#products')}
                          className='hover:text-[#13287B] py-2 px-2'
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#contact'
                          onClick={() => handleLinkClick('#contact')}
                          className='hover:text-[#13287B] py-2 px-2'
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type='submit'>Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className='h-56 mb-8'>
        <div className='bg-white py-10 flex justify-between items-center px-10 container mx-auto'>
          <div className='flex items-center gap-x-5 text-5xl font-bold text-[#13287B]'>
            <Image
              src='/images/H4HLogo.svg'
              width={200}
              height={150}
              // style={{ width: '300px', height: '300px' }}
            />
            <p className='text-lg md:text-4xl'>
              Health <span className='text-[#B92031]'> For</span> Haitians
            </p>
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
                  1000 NW 65th St. | Suite 103 <br /> Fort Lauderdale FL 33309
                </span>
              </div>
            </div>
            <div className='flex'>
              <span>
                <MdOutlineMailOutline className='w-8 h-8 text-[#01209F]' />
              </span>
              <div className='flex flex-col'>
                <span className='font-bold text-base'> Email Address</span>
                <span className='text-[#D20E32] text-sm'>
                  info@h4hinsurance.com
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar */}
        <nav className='hidden md:block w-[95%] container z-50 inset-x-0 bg-transparent text-black'>
          <div className='text-xl flex justify-center space-x-4 py-2 font-bold'>
            <div>
              <Link href='#home' className='hover:text-[#13287B] py-2 px-2'>
                Home
              </Link>
              <Link href='#products' className='hover:text-[#13287B] py-2 px-4'>
                Products
              </Link>
              <Link href='#about' className='hover:text-[#13287B] py-2 px-4'>
                About Us
              </Link>
              <Link href='#contact' className='hover:text-[#13287B] py-2 px-4'>
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Hero Section */}
      {isHomePage ? (
        <div className='relative w-full'>
          <Carousel plugins={[plugin.current]} className='w-full'>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div
                    className='relative h-[40rem] mt-8 bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${slide.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-center max-w-4xl text-white space-y-4 animate-slideIn'>
                        <h1 className='text-lg md:text-5xl font-bold leading-normal'>
                          {slide.title}
                        </h1>
                        {/* <p className='text-sm md:text-lg'>
                          {slide.description}
                        </p> */}
                        <button className='bg-[#B92031] text-white px-10 py-2 text-lg font-medium'>
                          <Link href='#contact'>{slide.buttonText}</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div
          className='h-[30rem] bg-cover bg-center relative'
          style={{ backgroundImage: heroImage }}
        >
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
            <h1 className='text-4xl font-bold'>{pageTitle}</h1>
            <nav className='py-4'>
              <ul className='flex space-x-4'>
                <li>
                  <Link href='/about' className='hover:text-gray-400'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/services' className='hover:text-gray-400'>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href='/policies' className='hover:text-gray-400'>
                    Policies
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='hover:text-gray-400'>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
