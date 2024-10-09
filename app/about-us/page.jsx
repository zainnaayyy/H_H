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
              Empowering Haiti&apos;s Underserved Communities Through Accessible Health Insurance
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 mt-8'>
              <div>
                <p className='text-base text-gray-600'>
                At H4H (Health for Haitians), we recognize the pressing issue many Haitian immigrants face in accessing proper healthcare due to language barriers, limited awareness, and financial constraints. Our mission is to bridge this gap by providing culturally sensitive health insurance solutions that empower individuals and families to secure the care they deserve. We envision a future where every Haitian immigrant has equal access to affordable, comprehensive healthcare, leading to healthier, more secure communities.
                <br />
                <br />
                Guided by our core values of inclusivity, compassion, and empowerment, we work tirelessly to offer personalized support in navigating the complex world of health insurance. As a team of Haitian immigrants ourselves, we are deeply committed to improving the well-being of our community. Looking ahead, we aim to expand our outreach, ensuring that no member of the Haitian community is left without the knowledge or resources to protect their health.
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
