import React from 'react';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import MovingIcons from './components/MovingIcons';
import ContactSection from './components/ContactSection';
import InsuranceService from './components/InsuranceService';
import InsurancePolicy from './components/InsurancePolicy';
import GrowBusiness from './components/GrowBusiness';
import ContactFormWithMap from './components/ContactFormWithMap';
import Achievements from './components/Achievements';
import BlogSection from './components/BlogSection';
import Team from './components/Team';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const page = () => {
  return (
    <div>
      <Header />
      {/* <ServicesSection /> */}
      <InsuranceService />
      <MovingIcons />
      <InsurancePolicy />
      <GrowBusiness />
      <ContactSection />
      <Achievements />
      <BlogSection />
      <Testimonials />
      <Team />
      <Footer />
      {/* <ContactSection /> */}
      {/* <ContactFormWithMap /> */}
    </div>
  );
};

export default page;
