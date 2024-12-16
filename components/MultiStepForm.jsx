"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/app/[locale]/components/Header";
import Footer from "@/app/[locale]/components/Footer";
import { useRouter } from "next/navigation";

// US States list for dropdown
const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

// Validation schemas for each step
const validationSchemas = [
  Yup.object().shape({
    zipCode: Yup.string()
      .matches(/^\d{5}(-\d{4})?$/, "Invalid ZIP code")
      .required("ZIP code is required"),
  }),
  Yup.object().shape({
    // This is now an empty schema to maintain the step count
  }),
  Yup.object().shape({
    householdIncome: Yup.string().required("Please select household income"),
  }),
  Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),
  }),
  Yup.object().shape({
    dob: Yup.date()
      .required("Date of Birth is required")
      .max(new Date(), "Future date not allowed"),
    // .test('age', 'You must be at least 18', function(value) {
    //   const cutoff = new Date();
    //   cutoff.setFullYear(cutoff.getFullYear() - 18);
    //   return value <= cutoff;
    // }),
  }),
  Yup.object().shape({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
  }),
  Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(?:(\+1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})|(\d{11}))$/,
        "Phone number must be in the format: (123) 456-7890, 123-456-7890, or 1234567890"
      )
      .required("Phone number is required"),
  }),
];

const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      zipCode: "",
      coverageType: "",
      householdIncome: "",
      firstName: "",
      lastName: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchemas[step],
    onSubmit: (values) => {
      if (step === validationSchemas.length - 1) {
        console.log("Form submitted", values);
        router.push("/");
        // Here you would typically send the data to a backend
        // alert("Quote request submitted!");
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setStep(step + 1);
        }, 500);
      }
    },
  });

  const handleBackStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Header />

      <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-md shadow-md">
        {loading && (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        )}
        {!loading && (
          <>
            <div className="mb-6">
              <div className="relative pt-1">
                <div className="flex mb-6 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      {Math.round(
                        ((step + 1) / validationSchemas.length) * 100
                      )}
                      % completed
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-10 text-xs flex rounded bg-green-200">
                  <div
                    style={{
                      width: `${
                        ((step + 1) / validationSchemas.length) * 100
                      }%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
            </div>

            <form onSubmit={formik.handleSubmit}>
              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="text-center mb-4 text-blue-500 text-3xl font-bold">
                    Enter the ZIP Code
                  </h2>
                  <input
                    type="text"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter ZIP Code"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.zipCode && formik.errors.zipCode && (
                    <p className="text-red-500">{formik.errors.zipCode}</p>
                  )}
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded-full"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-center text-blue-500 text-3xl font-bold">
                    Are you looking for individual or family coverage?
                  </h2>
                  <div className="flex space-x-4 justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        formik.setFieldValue("coverageType", "individual");
                        setStep(step + 1);
                      }}
                      className="py-2 px-4 rounded-full w-full bg-orange-500 text-white"
                    >
                      Individual
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        formik.setFieldValue("coverageType", "family");
                        setStep(step + 1);
                      }}
                      className="py-2 px-4 rounded-full w-full bg-orange-500 text-white"
                    >
                      Family
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-center text-blue-500 text-3xl font-bold">
                    What&apos;s your household income?
                  </h2>
                  <select
                    name="householdIncome"
                    value={formik.values.householdIncome}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" label="Select Household Income" />
                    <option value="0-25k" label="$0 - $25,000" />
                    <option value="25k-50k" label="$25,001 - $50,000" />
                    <option value="50k-75k" label="$50,001 - $75,000" />
                    <option value="75k-100k" label="$75,001 - $100,000" />
                    <option value="100k+" label="$100,000+" />
                  </select>
                  {formik.touched.householdIncome &&
                    formik.errors.householdIncome && (
                      <p className="text-red-500">
                        {formik.errors.householdIncome}
                      </p>
                    )}
                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="bg-gray-500 hover:bg-gray-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-center text-blue-500 text-3xl font-bold">
                    What&apos;s your full name?
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <p className="text-red-500">
                          {formik.errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <p className="text-red-500">{formik.errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="bg-gray-500 hover:bg-gray-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-center text-blue-500 text-3xl font-bold">
                    What&apos;s your date of birth?
                  </h2>
                  <input
                    type="date"
                    name="dob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.touched.dob && formik.errors.dob && (
                    <p className="text-red-500">{formik.errors.dob}</p>
                  )}
                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="bg-gray-500 hover:bg-gray-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <h2 className="text-center text-blue-500 text-3xl font-bold">
                    What is your home address?
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.address && formik.errors.address && (
                        <p className="text-red-500">{formik.errors.address}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.city && formik.errors.city && (
                        <p className="text-red-500">{formik.errors.city}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        State
                      </label>
                      <select
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="" label="Select a State" />
                        {US_STATES.map((state) => (
                          <option key={state} value={state} label={state} />
                        ))}
                      </select>
                      {formik.touched.state && formik.errors.state && (
                        <p className="text-red-500">{formik.errors.state}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="bg-gray-500 hover:bg-gray-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-4">
                  <h2 className="text-center text-blue-500 text-3xl font-bold">
                    Secure Your Free Quote Now!
                  </h2>
                  <p className="text-center text-gray-600 mb-4">
                    Stay Connected
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500">{formik.errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your 10-digit phone number"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500">{formik.errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Submit Quote Request
                    </button>
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="bg-gray-500 hover:bg-gray-700 text-white w-full font-bold py-2 px-4 rounded-full"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MultiStepForm;
