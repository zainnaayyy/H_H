'use client'

import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className='flex flex-wrap md:flex-nowrap items-center justify-between py-16 px-8 bg-white'>
        <div className='flex flex-col md:flex-row  justify-center md:space-x-8 w-full'>
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <h2 className='text-3xl font-bold text-[#0A4958] mb-4'>
              How We Make a Difference
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 mt-8'>
              <div>
                <h3 className='text-lg font-semibold text-gray-700'>
                  Empowering Haiti&apos;s Underserved Communities Through Accessible Health Insurance
                </h3>
                <p className='text-base text-gray-600'>
                Our mission is to improve the lives of Haiti&apos;s underserved populations by providing access to affordable and comprehensive health insurance. We believe that everyone, regardless of their financial situation, deserves quality healthcare. By breaking down financial barriers and promoting awareness of available health services, we are working to ensure that more Haitian families can lead healthier, more secure lives. 
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-700'>
                  Together, We are Building a Stronger, Healthier Haiti, One Policy at a Time.
                </h3>
                <p className='text-base text-gray-600'>
                  Investing in Haitian communities is not just a moral imperative; it&apos;s a catalyst for sustainable growth and positive change. The Haitian community often faces systemic barriers that limit access to essential resources, such as education, healthcare, and economic opportunities. By directing investments into these areas, we can foster equity, create pathways for success, and strengthen the broader economy. Empowering Haitians unlocks their full potential, generating innovation, cultural diversity, and a more inclusive society. When we uplift our own, we build a future where everyone thrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default AboutUs;
