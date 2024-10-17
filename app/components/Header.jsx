'use client';
import React, { useRef, useState, useEffect } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPhoneVolume,
  FaWhatsapp,
} from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));
  const isHomePage = pathname === '/';
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formPosition,  setFormPosition] = useState(formRef?.current?.getBoundingClientRect()?.top)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    insuranceType: Yup.array().min(1, 'Select at least one insurance type').required(),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dob: Yup.string().required('Date of birth is required'),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, 'Zip Code must be 5 digits')
      .required('Zip code is required'),
    email: Yup.string().email('Invalid email address').optional('Email is required'),
    phoneNumber: Yup.string()
    .matches(
      /^(?:(\+1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})|(\d{11}))$/,
      'Phone number must be in the format: (123) 456-7890, 123-456-7890, or 1234567890'
    )
    .required('Phone number is required')
  });

  const formik = useFormik({
    initialValues: {
      insuranceType: [],
      firstName: '',
      lastName: '',
      dob: '',
      zipCode: '',
      email: '',
      phoneNumber: '',
      consent: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        insuranceType: values.insuranceType.join(', '),
        firstName: values.firstName,
        lastName: values.lastName,
        dob: values.dob,
        zipCode: values.zipCode,
        email: values.email,
        phoneNumber: values.phoneNumber,
        consent: values.consent,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('/api/saveToGoogleSheet', requestOptions)
        .then((response) => response.json())
        .then(async (result) => {
          if (result.status === 200) {
            const response = await fetch('/api/submit-lead', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: 'Form Submitted!',
                text: 'Your form has been submitted successfully!  A confirmation e-mail has also been sent. An agent will reach out to you soon.',
                confirmButtonColor: '#17f0ff',
                width: '20rem',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: `Oops!`,
                text: 'Something went wrong while sending the confirmation e-mail.',
                confirmButtonColor: '#B92031',
              });
            }
            formik.resetForm();
            setIsSubmitting(false);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: `Oops! ${error}`,
            text: 'Something went wrong while submitting the form. Please try again.',
            confirmButtonColor: '#B92031',
          });
          formik.resetForm();
          setIsSubmitting(false);
        });
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      setFormPosition(formRef.current.getBoundingClientRect().top);
      const screenPosition = window.innerHeight / 10;
      if (formPosition < screenPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [formPosition]);

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
      title:
        'Comprehensive Health Plans for Individuals, Family and Medicare Options.',
      description: 'Get coverage that suits your unique needs.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: '/images/slider/african2.jpg',
      title: 'Find an Affordable Dental & Vision Plan for Your Family.',
      description: 'Get coverage that suits your unique needs.',
      buttonText: 'Get Started',
    },
    {
      imageUrl: '/images/slider/african3.jpg',
      title: "Protect Your Family's Financial Future with Life Insurance.",
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
      <div className='bg-[#17f0ff]'>
        <div className='container mx-auto text-white py-4 px-16 flex justify-end items-center text-sm'>
          <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
            <div className='flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-10'>
              <div className='flex justify-between items-center'>
                <FaPhoneVolume className='w-8 h-8 text-[#B92031]' />
                <span className='text-white font-bold  px-2 text-xl'>
                  1.844.544.0663
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <MdOutlineMailOutline className='w-8 h-8 text-[#B92031]' />
                <span className='text-white font-bold px-2 text-xl'>
                  info@h4hinsurance.com
                </span>
              </div>
            </div>
            <div className='hidden lg:flex space-x-4 mt-4 sm:mt-0'>
              <a href='#' className='hover:text-gray-400'>
                <FaFacebook className='w-6 h-6 text-white hover:text-blue-800' />
              </a>
              <a href='#' className='hover:text-gray-400'>
                <FaInstagram className='w-6 h-6 text-white hover:text-pink-800' />
              </a>
              <a href='#' className='hover:text-gray-400'>
                <FaWhatsapp className='w-6 h-6 text-white hover:text-green-800' />
              </a>
            </div>
            <div className='lg:hidden block lg:mt-0 mt-4'>
              <Sheet>
                <SheetTrigger asChild>
                  <button className='hover:text-gray-400'>
                    <FaBars className='w-6 h-6 text-white' />
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
                            href='/'
                            onClick={() => handleLinkClick('#home')}
                            className='hover:text-[#13287B] py-2 px-2'
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/about-us'
                            onClick={() => handleLinkClick('/about-us')}
                            className='hover:text-[#13287B] py-2 px-2'
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/health'
                            onClick={() => handleLinkClick('/health')}
                            className='hover:text-[#13287B] py-2 px-2'
                          >
                            Health
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/dental'
                            onClick={() => handleLinkClick('/dental')}
                            className='hover:text-[#13287B] py-2 px-2'
                          >
                            Dental & Vision
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/life'
                            onClick={() => handleLinkClick('/life')}
                            className='hover:text-[#13287B] py-2 px-2'
                          >
                            Life
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/medicare'
                            onClick={() => handleLinkClick('/medicare')}
                            className='hover:text-[#13287B] py-2 px-2'
                          >
                            Medicare
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/mission'
                            onClick={() => handleLinkClick('/mission')}
                            className='hover:text-[#13287B] py-2 px-2'
                          >
                            Mission
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/#contact'
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
      <div className='bg-white mb-5 flex justify-center lg:justify-start items-center w-full mx-auto'>
        <div className='flex xl:pl-[22rem] lg:pl-[5rem] justify-center items-center text-[#0A4958] my-5 xl:w-5/12 w-[20%]'>
          <Image
            src='/images/H4HLogo.svg'
            width={100}
            height={50}
            // style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className='hidden lg:flex xl:w-9/12 w-[80%]'>
          {/* Navbar */}
          <nav className='hidden lg:flex text-black'>
            <div className='xl:text-xl text-base flex justify-center space-x-10 py-2 font-bold'>
              <div>
                <Link
                  href='/'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-2'
                >
                  Home
                </Link>
                <Link
                  href='/about-us'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-4'
                >
                  About Us
                </Link>
                <Link
                  href='/health'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-4'
                >
                  Health
                </Link>
                <Link
                  href='/dental'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-4'
                >
                  Dental & Vision
                </Link>
                <Link
                  href='/life'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-4'
                >
                  Life
                </Link>
                <Link
                  href='/medicare'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-4'
                >
                  Medicare
                </Link>
                <Link
                  href='/mission'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-4'
                >
                  Mission
                </Link>
                <Link
                  href='/#contact'
                  className='hover:text-[#17f0ff] text-[#8d8d8d] py-2 px-4'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      {isHomePage ? (
        <div className='w-full mx-auto pl-20 pr-10 lg:flex justify-between mb-8'>
          <div
            ref={formRef}
            className={`lg:w-1/3 w-full mb-5 lg:mb-0 p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl`}
          >
            <h2 className='text-3xl text-[#B92031] font-semibold mb-6'>
              Get Covered Today
            </h2>
            <form onSubmit={formik.handleSubmit}>
              {/* Insurance Type */}
              <div className='mb-4'>
                <label className='block text-gray-500 text-lg lg:text-xl font-semibold mb-2'>
                  Choose your Insurance Type
                </label>
                <div className='flex text-lg flex-wrap gap-4'>
                  {['Health', 'Dental', 'Vision', 'Medicare', 'Life'].map(
                    (type) => (
                      <label key={type} className='inline-flex items-center'>
                        <input
                          type='checkbox'
                          name='insuranceType'
                          value={type}
                          onChange={formik.handleChange}
                          checked={formik.values.insuranceType.includes(type)}
                          className='form-checkbox text-blue-600'
                        />
                        <span className='ml-2 text-gray-500'>{type}</span>
                      </label>
                    )
                  )}
                </div>
                {formik.touched.insuranceType && formik.errors.insuranceType ? (
                  <div className='text-red-500'>
                    {formik.errors.insuranceType}
                  </div>
                ) : null}
              </div>

              {/* Full Name */}
              <div className='mb-4 '>
                <label className='text-xl block text-gray-500 font-semibold mb-2'>
                  Full Name
                </label>
                <div className='flex gap-4'>
                  <div className='flex flex-col w-1/2'>
                    <input
                      type='text'
                      name='firstName'
                      placeholder='First Name'
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      className='text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]'
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className='text-red-500'>
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <input
                      type='text'
                      name='lastName'
                      placeholder='Last Name'
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      className='text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]'
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className='text-red-500'>
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Date of Birth */}
              <div className='mb-4'>
                <label className='block text-xl text-gray-500 font-semibold mb-2'>
                  Date of Birth
                </label>
                <input
                  type='date'
                  name='dob'
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                  className='w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]'
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <div className='text-red-500'>{formik.errors.dob}</div>
                ) : null}
              </div>

              {/* Zip Code */}
              <div className='mb-4'>
                <label className='block text-gray-500 font-semibold mb-2 text-xl'>
                  Zip Code
                </label>
                <input
                  type='text'
                  name='zipCode'
                  onChange={formik.handleChange}
                  value={formik.values.zipCode}
                  className='w-full text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]'
                />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                  <div className='text-red-500'>{formik.errors.zipCode}</div>
                ) : null}
              </div>

              {/* Email */}
              <div className='mb-4'>
                <label className='block text-xl text-gray-500 font-semibold mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD] text-xl'
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='text-red-500'>{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Phone Number */}
              <div className='mb-4'>
                <label className='block text-gray-500 font-semibold mb-2 text-xl'>
                  Mobile phone number (US only)
                </label>
                <input
                  type='tel'
                  name='phoneNumber'
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none text-xl focus:ring-2 focus:ring-[#01B6AD]'
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className='text-red-500'>
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>

              {/* Consent */}
              <div className='mb-6'>
                <label className='inline-flex items-center text-xl'>
                  <input
                    type='checkbox'
                    name='consent'
                    onChange={formik.handleChange}
                    checked={formik.values.consent}
                    className='form-checkbox text-[#01B6AD]'
                  />
                  <span className='ml-2 text-lg text-gray-500'>
                    Text me with news & offers
                  </span>
                </label>
                {formik.touched.consent && formik.errors.consent ? (
                  <div className='text-red-500'>{formik.errors.consent}</div>
                ) : null}
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
                      <p>
                        Your use of the Health For Haitians (“we” or “us”)
                        services to receive short message services and/or
                        multi-media services (“Messages”) for marketing and
                        non-marketing purposes is subject to these SMS Terms of
                        Service (these “SMS Terms”). The SMS Services and our
                        collection and use of your personal information is also
                        subject to our SMS Privacy Policy. By enrolling to use,
                        using or accessing the SMS Services, you accept and
                        agree to these SMS Terms and our SMS Privacy Policy.
                      </p>
                      <p>
                        <strong className='block mt-4 mb-2'>
                          SMS Services Description:
                        </strong>{' '}
                        We may send marketing and non-marketing Messages,
                        through the SMS Services which may include transactional
                        Messages. Marketing Messages advertise and promote our
                        products and services and may include promotions,
                        specials, other marketing offers, abandoned checkout
                        reminders and other relevant information. Transactional
                        Messages relate to an existing or ongoing transaction
                        and may include updates and other transaction-related
                        information. Messages may be sent using an automated
                        technology, including an autodialer, automated system,
                        or automatic telephone dialing system. Message frequency
                        will vary. You agree that we and our third-party service
                        providers may send you Messages regarding the foregoing
                        topics and that such Messages and/or calls may be made
                        or placed using different telephone numbers or short
                        codes. We do not charge for Messages sent through the
                        SMS Services but you are responsible for any Message and
                        data rates imposed by your mobile provider, as standard
                        data and Message rates may apply for short Message
                        alerts. We do not share text message opt-in consents or
                        related mobile telephone numbers with third parties,
                        except with our service providers and vendors to provide
                        our SMS Services.
                      </p>
                      <p>
                        <strong className='block mt-4 mb-2'>
                          Eligibility:
                        </strong>{' '}
                        To receive SMS Services, you must be a resident of the
                        United States and 18 years of age or older.
                      </p>
                      <p>
                        <strong className='block mt-4 mb-2'>
                          User Opt-In:
                        </strong>{' '}
                        By providing your mobile phone number to us, you are
                        voluntarily opting in to the SMS Services and you agree
                        to receive recurring Messages from us at the mobile
                        phone number associated with your opt-in, even if such
                        number is registered on any state or federal “Do Not
                        Call” list. You represent that any mobile phone number
                        you provide to us is a valid mobile phone number of
                        which you are the valid account owner or authorized
                        user. If you change your mobile phone number or are no
                        longer the valid account owner or authorized user of the
                        mobile phone number, you are responsible for notifying
                        us immediately at info@H4Hinsurance.com. You agree to
                        indemnify us in full for all claims, expenses, and
                        damages related to or caused in whole or in part by your
                        failure to notify us if you change your mobile phone
                        number including, but not limited to, all claims,
                        expenses, and damages related to or arising under the
                        Telephone Consumer Protection Act. Your use of the SMS
                        Services is not required to make any purchase from us
                        and your use of the SMS Services is completely
                        voluntary.
                      </p>
                      <p>
                        <strong className='block mt-4 mb-2'>
                          User Opt-Out and Support:
                        </strong>{' '}
                        You may opt-out of the SMS Services at any time. If you
                        wish to opt-out of the SMS Services and stop receiving
                        Messages from us, or you no longer agree to these SMS
                        Terms, reply STOP, QUIT, CANCEL, OPT-OUT, or UNSUBSCRIBE
                        to any Message from us. You may continue to receive
                        Messages for a short period while we process your
                        request and you may receive a one-time opt-out
                        confirmation message. You understand and agree that the
                        foregoing is the only reasonable method of opting out.
                        If you want to use the SMS Services again, just opt-in
                        as you did the first time, or text START to a Message
                        sent by us, and we will start sending Messages to you
                        again. For support, reply HELP to any Message from us.
                        The SMS Services may not recognize requests that modify
                        the foregoing commands, and you agree that we and our
                        service providers will not be liable for failing to
                        honor requests that do not comply with the requirements
                        in these SMS Terms. We may also change the telephone
                        number or short code we use to operate the SMS Services
                        and we will notify you of any such change. You
                        acknowledge that any requests sent to a telephone number
                        or short code that has been changed may not be received
                        by us and we will not be responsible for failing to
                        honor a request sent to a telephone number or short code
                        that has been changed.
                      </p>
                      <p>
                        <strong className='block mt-4 mb-2'>
                          Disclaimer of Warranty and Liability:
                        </strong>{' '}
                        The SMS Services are offered on an “as-is” basis and may
                        not be available in all areas, at all times, or on all
                        mobile providers. You agree that neither we nor our
                        service providers will be liable for any failed,
                        delayed, or misdirected delivery of any Message or
                        information sent through the SMS Services. To the
                        fullest extent permissible pursuant to applicable law,
                        we are not responsible and will not be liable for any
                        damages of any nature, including without limitation any
                        incidental, special or consequential damages (such as
                        lost profits or lost business opportunities), punitive
                        damages or attorney’s fees.
                      </p>
                      <p>
                        <strong className='block mt-4 mb-2'>
                          Modifications:
                        </strong>{' '}
                        We may revise, modify, amend, suspend or cancel all or
                        any part of the SMS Services or any of its features at
                        any time, with or without notice. To the extent
                        permitted by applicable law, we may also modify these
                        SMS Terms at any time. Any such modification will take
                        effect when it is posted to our website or websites
                        associated with the SMS Services. You agree to review
                        these SMS Terms periodically to ensure that you are
                        aware of any modifications. Your continued use of the
                        SMS Services will constitute your acceptance of those
                        modifications or changes.
                      </p>
                      <p>
                        If you have any questions about this terms of service,
                        contact us at: Health For Haitians, 1000 NW 65th St.
                        Suite 103, Fort Lauderdale, FL 33309. Email:
                        info@H4Hinsurance.com. Phone: 1-844-544-0663
                      </p>
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
                className='bg-[#17f0ff] mt-3 text-white font-semibold py-2 px-6 hover:bg-[#0A4958] transition-colors flex items-center justify-center'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className='flex items-center'>
                    <svg
                      className='animate-spin h-5 w-5 mr-3 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'SUBMIT'
                )}
              </button>
            </form>
          </div>
          <div className={`lg:w-2/3 lg:pl-5 w-full`}>
            <Carousel plugins={[plugin.current]} className='w-full'>
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div
                      className='relative h-[25rem] xl:h-[65rem] md:h-[83rem] bg-cover bg-center'
                      style={{
                        backgroundImage: `url(${slide.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className='absolute inset-0 bg-black opacity-50'></div>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center max-w-3xl text-white space-y-4 animate-slideIn'>
                          <h1 className='text-lg md:text-4xl font-bold leading-normal'>
                            {slide.title}
                          </h1>
                          {/* <p className='text-sm md:text-lg'>
                          {slide.description}
                        </p> */}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
