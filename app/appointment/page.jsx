'use client';
import React, { useState } from 'react';
import { DatePicker, TimePicker, Radio, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import 'antd/dist/reset.css'; // Ant Design Reset CSS

const ScheduleAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentMethod, setAppointmentMethod] = useState(''); // New state for appointment method
  const router = useRouter();

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !appointmentMethod) {
      message.error('Please select a date, time, and appointment method.');
      return;
    }

    const appointmentDetails = {
      date: selectedDate.format('YYYY-MM-DD'),
      time: selectedTime.format('HH:mm'),
      method: appointmentMethod,
    };

    try {
      // Send data to your backend API to process the appointment and send the email/SMS
      const response = await fetch('/api/submit-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentDetails),
      });

      if (response.ok) {
        message.success(
          'Appointment scheduled successfully! Please check your email.'
        );
        router.push('/thank-you'); // Optional: Redirect to a thank you page
      } else {
        message.error('Failed to schedule appointment.');
      }
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      message.error('An error occurred while scheduling the appointment.');
    }
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10'>
      <h2 className='text-2xl font-bold mb-6 text-center'>
        Schedule an Appointment
      </h2>

      <div className='mb-4'>
        <DatePicker
          className='w-full'
          onChange={(date) => setSelectedDate(date)}
          disabledDate={(current) => current && current < moment().endOf('day')}
          placeholder='Select Date'
        />
      </div>

      <div className='mb-4'>
        <TimePicker
          className='w-full'
          format='HH:mm'
          minuteStep={15}
          onChange={(time) => setSelectedTime(time)}
          placeholder='Select Time'
        />
      </div>

      {/* Radio Button Group for Appointment Method */}
      <div className='mb-4'>
        <Radio.Group
          onChange={(e) => setAppointmentMethod(e.target.value)}
          value={appointmentMethod}
        >
          <Radio value='face-to-face'>Face to Face Office Meeting</Radio>
          <Radio value='phone'>Appointment by Phone</Radio>
          <Radio value='virtual'>Virtual Meeting via Google Meet</Radio>
        </Radio.Group>
      </div>

      <Button type='primary' className='w-full' onClick={handleSubmit}>
        Confirm Appointment
      </Button>
    </div>
  );
};

export default ScheduleAppointment;
