'use client';
import React, { useState } from 'react';
import { DatePicker, TimePicker, Radio, Button, message, Input } from 'antd';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import 'antd/dist/reset.css'; // Ant Design Reset CSS
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const ScheduleAppointment = () => {
  return (
    <>
      <Header />
      <div>
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
};

export default ScheduleAppointment;
