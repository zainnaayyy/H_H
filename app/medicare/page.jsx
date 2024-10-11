// pages/medicare.js
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Medicare = () => {
  return (
    <>
      <Header />
      <div className='max-w-4xl mx-auto p-6'>
        <div className='text-center text-3xl mb-10 font-bold'>Medicare</div>
        <h1 className='text-2xl font-bold mb-4'>
          Medicare Coverage Made Simple, Affordable, and Tailored to Your Needs.
        </h1>
        <p className='mb-6'>
          Turning 65 and navigating Medicare can be overwhelming, but we’re here
          to help. Whether you’re enrolling for the first time, exploring
          additional coverage options, or switching plans, we’ll guide you every
          step of the way.
        </p>

        <h2 className='text-2xl font-semibold mb-4'>
          What Medicare Plan Is Right for You?
        </h2>

        <h3 className='text-xl font-semibold mb-2'>
          Medicare Advantage (Part C)
        </h3>
        <p className='mb-4'>
          Medicare Advantage plans combine hospital insurance (Part A) and
          medical insurance (Part B) into one plan. Many of these plans also
          offer prescription drug coverage (Part D), along with extra benefits
          like vision, dental, and hearing.
        </p>

        <h3 className='text-xl font-semibold mb-2'>
          Medicare Supplement (Medigap)
        </h3>
        <p className='mb-4'>
          Medicare Supplement plans help cover out-of-pocket costs that
          traditional Medicare doesn’t, such as copayments, coinsurance, and
          deductibles. Choose from a variety of plans designed to save you money
          and protect you from high medical bills.
        </p>

        <h3 className='text-xl font-semibold mb-2'>
          Prescription Drug Plans (Part D)
        </h3>
        <p className='mb-6'>
          Get coverage for prescription medications with a Part D plan. You’ll
          have access to a broad network of pharmacies and coverage for the
          drugs you need.
        </p>

        <h2 className='text-2xl font-semibold mb-4'>
          Compare Medicare Plans Now!
        </h2>
        <p className='mb-6'>
          Don’t leave your healthcare to chance. Explore our Medicare plans
          today and find coverage that keeps you healthy, protected, and
          worry-free. With our expert guidance and simple tools, you can
          confidently choose the best plan for your needs.
        </p>
        <p className='mb-6'>
          Call to speak with a licensed Medicare expert today!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Medicare;
