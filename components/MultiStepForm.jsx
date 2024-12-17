"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/app/[locale]/components/Header";
import Footer from "@/app/[locale]/components/Footer";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { TiTick, TiTickOutline } from "react-icons/ti";

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
    insuranceCoverage: Yup.string().required(
      "Please select insurance coverage"
    ),
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
    // phone: Yup.string()
    //   .matches(
    //     /^(?:(\+1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})|(\d{11}))$/,
    //     "Phone number must be in the format: (123) 456-7890, 123-456-7890, or 1234567890"
    //   )
    //   .required("Phone number is required"),
  }),
];

const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      zipCode: "",
      coverageType: "",
      insuranceCoverage: "",
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
        setIsModalOpen(true);
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setStep(step + 1);
        }, 500);
      }
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

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
                    What type of insurance coverage are you looking for?
                  </h2>
                  <select
                    name="insuranceCoverage"
                    value={formik.values.insuranceCoverage}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" label="Select Insurance Coverage" />
                    <option value="Life" label="Life" />
                    <option value="Health" label="Health" />
                    <option value="Dental" label="Dental" />
                    <option value="Vision" label="Vision" />
                  </select>
                  {formik.touched.insuranceCoverage &&
                    formik.errors.insuranceCoverage && (
                      <p className="text-red-500">
                        {formik.errors.insuranceCoverage}
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

              {step === 4 && (
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

              {step === 5 && (
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

              {step === 6 && (
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

              {step === 7 && (
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
                      {/* {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500">{formik.errors.phone}</p>
                      )} */}
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

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-lg text-center">
                <TiTick className="text-green-500 text-5xl mb-4 mx-auto bg-white border  rounded-full p-1" />

                  <h2 className="text-2xl font-bold mb-4">Form Submitted</h2>
                  <p className="mb-4">
                    Your form has been successfully submitted.<br/> An agent will reach out to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {/* footer for steps form */}
      <footer className="bg-gray-100 py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 mb-4">
            You agree to receive recurring automated promotional text and email
            messages from H4H Insurance: Consent is not a condition of purchase.
            Reply HELP for help or STOP to cancel. Message and data rates may
            apply.
          </p>
          <div className="mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-blue-600 px-1 underline">
                  {t("contact_form.links.privacy_policy")}
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] sm:max-h-[700px] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold mb-4">
                    {t("privacy_policy.title")}
                  </DialogTitle>
                  <DialogDescription>
                    {t("privacy_policy.commitment")}
                  </DialogDescription>
                </DialogHeader>

                <div className="max-h-[60vh] space-y-6 overflow-y-auto pr-4">
                  {/* Information We Collect Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.information_we_collect.title")}
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t("privacy_policy.information_we_collect.pii.title")}
                        </h3>
                        <p>
                          {t(
                            "privacy_policy.information_we_collect.pii.content"
                          )}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t(
                            "privacy_policy.information_we_collect.npii.title"
                          )}
                        </h3>
                        <p>
                          {t(
                            "privacy_policy.information_we_collect.npii.content"
                          )}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* How We Collect Information Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.how_we_collect_information.title")}
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t(
                            "privacy_policy.how_we_collect_information.from_you.title"
                          )}
                        </h3>
                        <p>
                          {t(
                            "privacy_policy.how_we_collect_information.from_you.content"
                          )}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t(
                            "privacy_policy.how_we_collect_information.from_cookies.title"
                          )}
                        </h3>
                        <p>
                          {t(
                            "privacy_policy.how_we_collect_information.from_cookies.content"
                          )}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* How We Use Your Information Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.how_we_use_your_information.title")}
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      {t("privacy_policy.how_we_use_your_information.content", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Information Sharing Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.information_sharing.title")}
                    </h2>
                    <div className="space-y-3">
                      {t("privacy_policy.information_sharing.content", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <div key={index}>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p>{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Cookies and Tracking Technologies Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t(
                        "privacy_policy.cookies_and_tracking_technologies.title"
                      )}
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      {t(
                        "privacy_policy.cookies_and_tracking_technologies.content",
                        { returnObjects: true }
                      ).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* How We Protect Your Information Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t(
                        "privacy_policy.how_we_protect_your_information.title"
                      )}
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      {t(
                        "privacy_policy.how_we_protect_your_information.content",
                        { returnObjects: true }
                      ).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Your Privacy Rights Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.your_privacy_rights.title")}
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      {t("privacy_policy.your_privacy_rights.content", {
                        returnObjects: true,
                      }).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Children's Privacy Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.childrens_privacy.title")}
                    </h2>
                    <p>{t("privacy_policy.childrens_privacy.content")}</p>
                  </section>

                  {/* Changes to This Policy Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.changes_to_this_policy.title")}
                    </h2>
                    <p>{t("privacy_policy.changes_to_this_policy.content")}</p>
                  </section>

                  {/* Contact Us Section */}
                  <section>
                    <h2 className="font-bold text-xl mb-3">
                      {t("privacy_policy.contact_us.title")}
                    </h2>
                    <div className="space-y-2">
                      <p>{t("privacy_policy.contact_us.content.address")}</p>
                      <p>{t("privacy_policy.contact_us.content.email")}</p>
                      <p>{t("privacy_policy.contact_us.content.phone")}</p>
                    </div>
                  </section>
                </div>

                <DialogFooter className="mt-4">
                  <Button variant="outline" type="button">
                    {t("navigation.close")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <span className="text-gray-400 mr-1">|</span>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-blue-600 underline">
                  {t("contact_form.links.terms_and_conditions")}
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] sm:max-h-[700px] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold mb-4">
                    {t("terms_and_conditions.title")}
                  </DialogTitle>
                  <DialogDescription className="mb-4">
                    {t("terms_and_conditions.welcome")}
                  </DialogDescription>
                </DialogHeader>
                <div className="max-h-[60vh] space-y-4">
                  <h2 className="font-bold">
                    {t("terms_and_conditions.acceptance_of_terms.title")}
                  </h2>
                  {t("terms_and_conditions.acceptance_of_terms.content", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  <h2 className="font-bold">
                    {t("terms_and_conditions.use_of_the_site.title")}
                  </h2>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.use_of_the_site.license_to_use.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.use_of_the_site.license_to_use.content"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.use_of_the_site.prohibited_activities.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.use_of_the_site.prohibited_activities.content.0"
                    )}
                  </p>
                  {t(
                    "terms_and_conditions.use_of_the_site.prohibited_activities.content",
                    { returnObjects: true }
                  )
                    .slice(1)
                    .map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  <p>
                    {t(
                      "terms_and_conditions.use_of_the_site.site_modifications.content"
                    )}
                  </p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.information_you_provide.title")}
                  </h2>
                  {t("terms_and_conditions.information_you_provide.content", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  <h2 className="font-bold">
                    {t("terms_and_conditions.privacy.title")}
                  </h2>
                  <p>{t("terms_and_conditions.privacy.content")}</p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.sms_terms_of_service.title")}
                  </h2>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.sms_terms_of_service.program_name_and_description.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.program_name_and_description.content"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.sms_terms_of_service.message_frequency_and_cadence.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.message_frequency_and_cadence.content"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.sms_terms_of_service.message_and_data_rates.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.message_and_data_rates.content"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.sms_terms_of_service.eligibility.title"
                    )}
                  </h3>
                  {t(
                    "terms_and_conditions.sms_terms_of_service.eligibility.content",
                    { returnObjects: true }
                  ).map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.sms_terms_of_service.opt_in_agreement.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.opt_in_agreement.content"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.sms_terms_of_service.opt_out_instructions.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.opt_out_instructions.content"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.sms_terms_of_service.customer_care_contact_information.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.customer_care_contact_information.content"
                    )}
                  </p>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.customer_care_contact_information.Email"
                    )}
                  </p>
                  <p>
                    {t(
                      "terms_and_conditions.sms_terms_of_service.customer_care_contact_information.Phone"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t("terms_and_conditions.privacy_and_data_sharing.title")}
                  </h3>
                  <p>
                    {t("terms_and_conditions.privacy_and_data_sharing.content")}
                  </p>
                  <h3 className="font-semibold">
                    {t("terms_and_conditions.disclaimer_and_liability.title")}
                  </h3>
                  <p>
                    {t("terms_and_conditions.disclaimer_and_liability.content")}
                  </p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.intellectual_property.title")}
                  </h2>
                  <p>
                    {t("terms_and_conditions.intellectual_property.content")}
                  </p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.disclaimers.title")}
                  </h2>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.disclaimers.no_professional_advice.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.disclaimers.no_professional_advice.content"
                    )}
                  </p>
                  <h3 className="font-semibold">
                    {t(
                      "terms_and_conditions.disclaimers.no_guarantee_of_results.title"
                    )}
                  </h3>
                  <p>
                    {t(
                      "terms_and_conditions.disclaimers.no_guarantee_of_results.content"
                    )}
                  </p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.limitation_of_liability.title")}
                  </h2>
                  {t("terms_and_conditions.limitation_of_liability.content", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  <h2 className="font-bold">
                    {t(
                      "terms_and_conditions.arbitration_and_dispute_resolution.title"
                    )}
                  </h2>
                  <p>
                    {t(
                      "terms_and_conditions.arbitration_and_dispute_resolution.content"
                    )}
                  </p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.termination.title")}
                  </h2>
                  <p>{t("terms_and_conditions.termination.content")}</p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.changes_to_these_terms.title")}
                  </h2>
                  <p>
                    {t("terms_and_conditions.changes_to_these_terms.content")}
                  </p>
                  <h2 className="font-bold">
                    {t("terms_and_conditions.contact_us.title")}
                  </h2>
                  {t("terms_and_conditions.contact_us.content", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <DialogFooter className="mt-4">
                  <Button
                    variant="outline"
                    onClick={() =>
                      document.querySelector("[data-state='open']").click()
                    }
                  >
                    {t("navigation.close")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-sm text-gray-600">
            By submitting this form, you are consenting to receive marketing
            emails from H4H Insurance. You can revoke your consent to receive
            emails at any time by unsubscribing to emails at{" "}
            <a
              href="mailto:info@h4hinsurance.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@h4hinsurance.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default MultiStepForm;
