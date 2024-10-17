// ServicesSection.js
'use client';
import React, { useState } from 'react';
import { FaBuilding, FaPhone, FaHandshake, FaLaptop } from 'react-icons/fa';
import { Select, Button, message } from 'antd';
import moment from 'moment';
import { Calendar } from '@/components/ui/calendar';
import CalendarSection from './CalendarSection';
import InterviewForm from './InterviewForm';

const services = [
  {
    id: 1,
    title: 'Schedule via Phone',
    description:
      'Conveniently book your appointment over the phone. Call us at 1.844.544.0663.',
    icon: FaPhone,
  },
  {
    id: 2,
    title: 'Face-to-Face Meeting',
    description:
      'Meet with our experts in person for a comprehensive consultation. We ensure a personalized experience.',
    icon: FaHandshake,
  },
  {
    id: 3,
    title: 'Visit Our Office',
    description:
      'Drop by our office at your convenience. We welcome you to discuss your needs with our team.',
    icon: FaBuilding,
  },
  {
    id: 4,
    title: 'Virtual Consultation',
    description:
      'Connect with us online through a virtual meeting. Get the same expert advice from the comfort of your home.',
    icon: FaLaptop,
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    // if (service.id !== 1) {
    // Don't render the form for "Schedule via Phone"
    setSelectedService(service);
    // }
  };
  const goBackToCalendar = () => {
    setShowInterview(false);
  };

  return (
    <div className='bg-gray-100 py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-800'>
          Appointment Scheduling
        </h2>
        <p className='text-gray-600 mt-2 text-lg'>
          Effortlessly schedule your appointment with flexible options and
          receive instant confirmation via email.
        </p>
      </div>
      {selectedService ? (
        <ScheduleForm
          service={selectedService}
          goBack={() => setSelectedService(null)}
        />
      ) : (
        <div className='container max-w-full flex flex-col md:flex-row gap-8'>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className='bg-white p-8 shadow-lg rounded-lg cursor-pointer'
                onClick={() => handleServiceClick(service)}
              >
                <div className='flex flex-col items-center w-full mb-4'>
                  <Icon className='h-14 w-14 text-blue-600' />
                </div>
                <h3 className='text-xl text-center font-bold text-gray-800'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mt-2'>{service.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const ScheduleForm = ({ service, goBack, goBackToCalendar }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showInterview, setShowInterview] = useState(false);

  console.log(selectedTime, selectedDate, 'checking both');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (value) => {
    setSelectedTime(value);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      message.success(
        `Appointment scheduled for ${moment(selectedDate).format(
          'MMMM Do YYYY'
        )} at ${selectedTime}`
      );
    } else {
      message.error('Please select both date and time');
    }
  };

  const timeOptions = Array.from({ length: 10 }, (_, index) =>
    moment({ hour: 9 + index }).format('h:mm A')
  );

  return (
    <div className='bg-white p-8 shadow-lg rounded-lg'>
      {/* <h3 className='text-2xl text-center font-bold text-gray-800 mb-4'>
        {service.title}
      </h3>
      <p className='text-gray-600 text-center mb-4'>{service.description}</p> */}
      {showInterview ? (
        <InterviewForm
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setShowInterview={setShowInterview}
        />
      ) : (
        <CalendarSection
          setShowInterview={setShowInterview}
          showInterview={showInterview}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
          goBack={goBack}
        />
      )}
    </div>
  );
};

export default ServicesSection;
