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
            <div className='text-center text-3xl font-bold'>About Us</div>
            <div className='w-full md:w-1/2 mt-8'>
              <img
                src='/images/about/about.jpg'
                alt='Health Plans'
                className='w-full h-auto'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 mt-8'>
              <div>
                <p className='text-base text-gray-600'>
                  Founded by a Haitian immigrant with first-hand experience of
                  the unique challenges Haitians face when trying to access the
                  American Dream, our mission is deeply personal. Like everyone
                  else, he envisions helping the Haitian community gain access
                  to essential opportunities such as healthcare, education,
                  jobs, networks, housing, nutrition, investing, and personal
                  growth. His wife, also of Caribbean descent, shares this
                  vision and dreams of expanding these efforts to all Caribbean
                  Islands. While our goal is to support all underserved
                  communities, our team is particularly focused on Haitians, who
                  are among the most underserved. Health is the foundation of
                  life, which is why we begin our work here.
                  <br />
                  <br />
                  Access to quality healthcare is vital for the well-being of
                  individuals and families, yet many in the Haitian community
                  face significant barriers to obtaining proper health coverage.
                  Language differences, lack of information, and financial
                  constraints are just a few of the obstacles that prevent them
                  from accessing the care they need. Our mission is to bridge
                  this gap by providing Creole-speaking resources to help
                  Haitian individuals and families navigate the complex
                  healthcare system and secure the coverage necessary for a
                  healthier future.
                  <br />
                  <br />
                  Whether they need Medicaid, health insurance, Medicare, or
                  life insurance, we believe that everyone deserves access to
                  high-quality service and support. Looking ahead, we aim to
                  expand our outreach, ensuring that every member of the Haitian
                  community has the knowledge and resources to protect their
                  health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
