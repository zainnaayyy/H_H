'use client';
import React from 'react';
import { FaBuilding, FaMoneyBillWave, FaCogs, FaPhone } from 'react-icons/fa';
import {
  MdOutlineChat,
  MdOutlineMail,
  MdOutlineMailOutline,
} from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
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

const ContactSection = () => {
  const services = [
    {
      id: 1,
      title: 'Call',
      description: '1.844.544.0663',
      icon: FaPhone,
    },
    {
      id: 2,
      title: 'Email',
      description: 'info@h4hinsurance.com',
      icon: MdOutlineMailOutline,
    },
    {
      id: 3,
      title: 'Chat',
      description: 'Mon to Fri (9am - 6pm EST)',
      icon: MdOutlineChat,
    },
  ];

  const formFields = [
    { label: 'Your name', type: 'text', placeholder: 'Your name' },
    { label: 'Your email', type: 'email', placeholder: 'Your email' },
    { label: 'Subject', type: 'text', placeholder: 'Subject' },
    {
      label: 'Your message (optional)',
      type: 'textarea',
      placeholder: 'Your message',
    },
  ];

  return (
    <>
      <div
        className='bg-map py-16 '
        style={{
          backgroundImage:
            "url('https://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/themes/insurance-lite/assets/map-bg.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800'>Contact Us!</h2>
        </div>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className='bg-white p-8 shadow-lg '>
                <div className='flex justify-center items-center mb-4 py-2'>
                  <Icon className='h-14 w-14 text-blue-600 mr-4' />
                </div>
                <h3 className='text-xl text-center font-bold text-gray-800'>
                  {service.title}
                </h3>
                <p className='text-gray-600 text-center mt-2'>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className='bg-map mb-10'
        style={{
          backgroundImage:
            "url('https://demo.sparklewpthemes.com/constructionlight/insurance-lite/wp-content/themes/insurance-lite/assets/map-bg.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className='max-w-6xl mx-auto  flex flex-col lg:flex-row shadow-lg bg-map rounded-lg'>
          {/* Contact Form */}
          <div className='lg:w-1/2 p-6 bg-gray-50'>
            <h2 className='text-3xl font-semibold mb-6'>Get Started</h2>
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
                className='bg-primary-gradient mt-3 text-white font-semibold py-2 px-6  hover:bg-blue-800 transition-colors'
              >
                SUBMIT
              </button>
            </form>
          </div>
          {/* Map */}
          <div className='lg:w-1/2  lg:ml-6'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.6965285964066!2d-80.16006712390586!3d26.206548477075174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d903bbc80c6051%3A0xd716d64cc168483e!2s1000%20NW%2065th%20St%2C%20Fort%20Lauderdale%2C%20FL%2033309%2C%20USA!5e0!3m2!1sen!2s!4v1728073940467!5m2!1sen!2s'
              width='100%'
              height='100%'
              className='rounded-lg border border-gray-300'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
