// pages/health.js
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Health = () => {
  return (
    <>
      <Header />
      <div className='max-w-4xl mx-auto p-6'>
        <div className='text-center text-3xl mb-10 font-bold'>Health</div>
        <h1 className='text-2xl font-bold mb-4'>
          Explore the Best Health Plans for Your Family&apos;s Needs
        </h1>
        <p className='mb-6'>
          Finding the right health plan for your family is easier than ever! Our
          Health Insurance options offer a wide variety of plans tailored to fit
          your needs and budget. From comprehensive coverage to affordable
          options, we&apos;ve got you covered.
        </p>

        <h2 className='text-xl font-semibold mb-2'>
          What Does Health Coverage Include?
        </h2>
        <ul className='list-disc list-inside mb-6'>
          <li>Doctor Visits and Specialist Care</li>
          <li>Emergency and Hospital Services</li>
          <li>Prescription Drugs</li>
          <li>Preventive Services (e.g., vaccinations, screenings)</li>
          <li>Maternity and Newborn Care</li>
          <li>Mental Health Services</li>
        </ul>

        <h2 className='text-xl font-semibold mb-4'>
          Health Insurance Helps You Save
        </h2>
        <p className='mb-6'>
          Without coverage, even a single hospital visit can result in thousands
          of dollars in medical bills. Health insurance helps you manage these
          costs by sharing the burden and ensuring you pay a fraction of what
          you would otherwise. Ready to protect what matters most? Talk to an
          agent today and get expert advice on choosing the best health plan for
          you and your loved ones.
        </p>

        <h2 className='text-xl font-semibold mb-4'>
          Understanding Health Insurance: What are Out-of-Pocket Expenses?
        </h2>
        <p className='mb-6'>
          Out-of-pocket expenses are the costs you pay directly for healthcare
          services that aren&apos;t covered by your health insurance plan.
          Understanding these costs is crucial to budgeting for your healthcare
          needs and preventing unexpected financial strain.
        </p>

        <h2 className='text-xl font-semibold mb-2'>
          Out-of-Pocket Costs includes:
        </h2>
        <ul className='list-none list-inside mb-6'>
          <li className='mb-1'>
            <strong className='font-semibold'>Premium:</strong>
            The fixed monthly payment you make to keep your health insurance
            active.
          </li>
          <li className='mb-1'>
            <strong>Deductibles:</strong>
            The amount you must pay for covered healthcare services before your
            insurance starts to pay.
          </li>
          <li className='mb-1'>
            <strong>Copayments:</strong>A fixed amount you pay for specific
            services like doctor visits or prescriptions.
          </li>
          <li className='mb-1'>
            <strong>Coinsurance:</strong>A percentage of the costs you share
            with your insurance company after meeting your deductible.
          </li>
          <li className='mb-1'>
            <strong>Out-of-Pocket Maximum:</strong>
            The total amount you&apos;ll pay for covered services in a policy
            period. Once you reach this limit, the insurance company covers all
            further expenses.
          </li>
        </ul>

        <p className=''>
          When comparing insurance plans, it&apos;s crucial to review all costs.
          This understanding will help you make smarter decisions. Let us help
          you explore the best plan to fit your healthcare needs and budget.
          Connect with our licensed agent today!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Health;
