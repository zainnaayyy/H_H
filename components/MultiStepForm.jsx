'use client'
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/app/[locale]/components/Header";
import Footer from "@/app/[locale]/components/Footer";

const validationSchemas = [
  Yup.object().shape({
    // Validation for step 0 (Earnings)
    earnings: Yup.string().required("Please select an earnings option"),
  }),
  Yup.object().shape({
    // Validation for step 1 (Name)
    name: Yup.string().required("Name is required"),
  }),
  Yup.object().shape({
    // Validation for step 2 (Date of Birth)
    dob: Yup.date().required("Date of Birth is required").nullable(),
  }),
  Yup.object().shape({
    // Validation for step 3 (Address and City)
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
  }),
  Yup.object().shape({
    // Validation for step 4 (Email)
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  }),
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      earnings: "",
      name: "",
      dob: "",
      address: "",
      city: "",
      email: "",
    },
    validationSchema: validationSchemas[step],
    onSubmit: (values) => {
      if (step === validationSchemas.length - 1) {
        console.log("Form submitted", values);
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
    <Header/>
  
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
                    {((step + 1) / validationSchemas.length) * 100}% completed
                  </span>
                </div>
              </div>
              <div className="overflow-hidden  h-2 mb-10 text-xs flex rounded bg-green-200">
                <div
                  style={{
                    width: `${((step + 1) / validationSchemas.length) * 100}%`,
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
                  What is your earnings?
                </h2>
                <select
                  name="earnings"
                  value={formik.values.earnings}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" label="Select earnings" />
                  <option value="1000$" label="1000$" />
                  <option value="2000$" label="2000$" />
                  <option value="3000$" label="3000$" />
                </select>
                {formik.touched.earnings && formik.errors.earnings && (
                  <p className="text-red-500">{formik.errors.earnings}</p>
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
                  What is your name?
                </h2>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Enter Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">{formik.errors.name}</p>
                )}
                <div className="flex flex-col space-y-4 justify-between">
              
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold w-full py-2 px-4 rounded-full"
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    onClick={handleBackStep}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold w-full py-2 px-4 rounded-full"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-center text-blue-500 text-3xl font-bold">
                  What is your date of birth?
                </h2>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Enter Date of Birth
                </label>
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
                <div className="flex flex-col space-y-4 justify-between">
             
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
                  What is your home address?
                </h2>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Enter Address
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
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Enter City
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
                <div className="flex flex-col space-y-4 justify-between">
             
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
                Your process is complete. Please add your email so we can contact you.
                </h2>
                {/* <h2 className="text-center text-3xl font-bold">
                  What is your email address?
                </h2> */}
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Enter Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}
                <div className="flex flex-col space-y-4 justify-between">
                  
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold w-full py-2 px-4 rounded-full"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleBackStep}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold w-full py-2 px-4 rounded-full"
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
    {/* <Footer/> */}
    </>
  );
};

export default MultiStepForm;
