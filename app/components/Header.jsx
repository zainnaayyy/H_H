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
import ContactSection from './ContactSection';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
      <div className='bg-[#29d3ddb2]'>
        <div className='container mx-auto text-white py-4 px-16 flex justify-end items-center text-sm'>
          <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
            <div className='flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-10'>
              <div className='hidden md:flex justify-between items-center'>
                <FaPhoneVolume className='w-8 h-8 text-[#01209F]' />
                <span className='text-white font-bold px-2 text-xl'>
                  1.844.544.0663
                </span>
              </div>
              <div className='hidden md:flex justify-between items-center'>
                <MdOutlineMailOutline className='w-8 h-8 text-[#01209F]' />
                <span className='text-white font-bold px-2 text-xl'>
                  info@h4hinsurance.com
                </span>
              </div>
            </div>
            <div className='flex space-x-4 mt-4 sm:mt-0'>
              <a href='#' className='hover:text-gray-400'>
                <FaFacebook className='w-6 h-6 text-blue-600' />
              </a>
              <a href='#' className='hover:text-gray-400'>
                <FaInstagram className='w-6 h-6 text-orange-500' />
              </a>
              <a href='#' className='hover:text-gray-400'>
                <FaWhatsapp className='w-6 h-6 text-green-600' />
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
      </div>
      {/* Main Navigation */}
      <div className=''>
        <div className='bg-white py-1 flex justify-between items-center px-10 '>
          <div className='flex items-center justify-between w-full text-5xl font-bold text-[#13287B]'>
            <div className='flex items-center'>
              <Image
                src='/images/H4HLogo.svg'
                width={150}
                height={150}
                className='ml-20'
              />
            </div>
            <nav className='hidden lg:block w-[95%] mr-20 container z-50 bg-transparent text-black'>
              <div className='text-xl flex justify-center space-x-4 py-2 font-bold'>
                <div>
                  <Link href='#home' className='hover:text-[#13287B] py-2 px-2'>
                    Home
                  </Link>
                  <Link
                    href='#products'
                    className='hover:text-[#13287B] py-2 px-4'
                  >
                    Products
                  </Link>
                  <Link
                    href='#about'
                    className='hover:text-[#13287B] py-2 px-4'
                  >
                    Our Mission
                  </Link>
                  <Link
                    href='#contact'
                    className='hover:text-[#13287B] py-2 px-4'
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* <div className='hidden lg:flex items-start max-w-2xl space-x-8'>
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
          </div> */}
        </div>
        {/* Navbar */}
        {/* <nav className='hidden md:block w-[95%] container z-50 inset-x-0 bg-transparent text-black'>
          <div className='text-xl flex justify-center space-x-4 py-2 font-bold'>
            <div>
              <Link href='#home' className='hover:text-[#13287B] py-2 px-2'>
                Home
              </Link>
              <Link href='#products' className='hover:text-[#13287B] py-2 px-4'>
                Products
              </Link>
              <Link href='#about' className='hover:text-[#13287B] py-2 px-4'>
                Our Mission
              </Link>
              <Link href='#contact' className='hover:text-[#13287B] py-2 px-4'>
                Contact Us
              </Link>
            </div>
          </div>
        </nav> */}
      </div>
      {/* Hero Section */}
      {isHomePage ? (
        <div className='flex w-full'>
          <div className='lg:w-1/2 w-full p-6 bg-gray-50'>
            <h2 className='text-3xl font-semibold mb-6'>Get Covered Today</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 text-xl font-semibold mb-2'>
                  Choose your Insurance Type
                </label>
                <div className='flex text-lg flex-wrap gap-4'>
                  {['Health', 'Dental', 'Vision', 'Medicare', 'Life'].map(
                    (type) => (
                      <label key={type} className='inline-flex items-center'>
                        <input
                          type='checkbox'
                          className='form-checkbox text-blue-600'
                        />
                        <span className='ml-2'>{type}</span>
                      </label>
                    )
                  )}
                </div>
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
              <p className='text-sm text-gray-500 mt-2'>
                By clicking the button below, you consent to receiving marketing
                emails and text messages, additionally you consent to being
                contacted by phone call, an automatic telephone dialing system,
                text message at the telephone number you provided above or by
                email. You understand this is not a condition of purchase and
                you may also receive a quote by contacting us by phone. You may
                revoke this consent at any time by contacting us at 844-544-0663
                or info@h4hinsurance.com. You understand your carrier’s message
                and data rates may apply.{' '}
                <a href='/privacy-policy' className='underline text-blue-600'>
                  View Privacy Policy
                </a>{' '}
                and{' '}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className='text-blue-600 underline'>
                      SMS Terms of Service
                    </button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[800px] overflow-y-auto'>
                    <DialogHeader>
                      <DialogTitle className='text-2xl font-semibold mb-4'>
                        SMS Terms of Service
                      </DialogTitle>
                      <DialogDescription className='mb-4'>
                        Please read and review our SMS Terms of Service below.
                      </DialogDescription>
                    </DialogHeader>
                    <div className='max-h-[60vh] overflow-y-auto space-y-4'>
                      {/* ... all the SMS Terms content ... */}
                    </div>
                    <DialogFooter className='mt-4'>
                      <Button
                        variant='outline'
                        onClick={() =>
                          document.querySelector("[data-state='open']").click()
                        }
                      >
                        Close
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                .
              </p>
              <button
                type='submit'
                className='bg-primary-gradient mt-3 text-white font-semibold py-2 px-6  hover:bg-blue-800 transition-colors'
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className=' w-full p-6'>
            <Image
              src='/images/slider/african.jpeg'
              width='500' // Use a specific width to maintain aspect ratio
              height='500' // Use a specific height to maintain aspect ratio
              className='object-cover h-full rounded-lg'
              alt='Insurance Image'
            />
          </div>
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
