"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link"; // Import Link from next/link
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoogleTranslate } from "@/lib/googleTranslate";
import { getPrefLangCookie } from "@/lib/getPrefLangCookie";
import { useTranslation } from "react-i18next";
import LanguageChanger from "@/components/LanguageChanger";

const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname(); // Get the current pathname
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));
  const isHomePage = pathname === "/";
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formPosition, setFormPosition] = useState(
    formRef?.current?.getBoundingClientRect()?.top
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    insuranceType: Yup.array()
      .min(1, "Select at least one insurance type")
      .required(),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dob: Yup.string().required("Date of birth is required"),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, "Zip Code must be 5 digits")
      .required("Zip code is required"),
    email: Yup.string()
      .email("Invalid email address")
      .optional("Email is required"),
    phoneNumber: Yup.string()
      .matches(
        /^(?:(\+1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})|(\d{11}))$/,
        "Phone number must be in the format: (123) 456-7890, 123-456-7890, or 1234567890"
      )
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      insuranceType: [],
      firstName: "",
      lastName: "",
      dob: "",
      zipCode: "",
      email: "",
      phoneNumber: "",
      consent: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        insuranceType: values.insuranceType.join(", "),
        firstName: values.firstName,
        lastName: values.lastName,
        dob: values.dob,
        zipCode: values.zipCode,
        email: values.email,
        phoneNumber: values.phoneNumber,
        consent: values.consent,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/api/saveToGoogleSheet", requestOptions)
        .then((response) => response.json())
        .then(async (result) => {
          if (result.status === 200) {
            if (values?.email) {
              await fetch("/api/submit-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });
            }

            Swal.fire({
              icon: "success",
              title: "Form Submitted!",
              text: "Your form has been submitted successfully! An agent will reach out to you soon.",
              confirmButtonColor: "#17f0ff",
              width: "25rem",
            });
            formik.resetForm();
            setIsSubmitting(false);
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: `Oops! ${error}`,
            text: "Something went wrong while submitting the form. Please try again.",
            confirmButtonColor: "#B92031",
          });
          formik.resetForm();
          setIsSubmitting(false);
        });
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      setFormPosition(formRef?.current?.getBoundingClientRect().top);
      const screenPosition = window.innerHeight / 10;
      if (formPosition < screenPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [formPosition]);

  let heroImage = "url(/default-hero-image.jpg)";
  let pageTitle = "Page";

  switch (pathname) {
    case "/about":
      heroImage = "url(/path-to-about-hero-image.jpg)";
      pageTitle = "About";
      break;
    case "/pages":
      heroImage = "url(/path-to-pages-hero-image.jpg)";
      pageTitle = "Pages";
      break;
    case "/policies":
      heroImage = "url(/path-to-policies-hero-image.jpg)";
      pageTitle = "Policies";
      break;
    case "/faq":
      heroImage = "url(/path-to-faq-hero-image.jpg)";
      pageTitle = "FAQ";
      break;
    case "/blogs":
      heroImage = "url(/path-to-blogs-hero-image.jpg)";
      pageTitle = "Blogs";
      break;
    case "/life-insurance":
      heroImage = "url(/path-to-life-insurance-hero-image.jpg)";
      pageTitle = "Life Insurance";
      break;
    default:
      heroImage = "url(/default-hero-image.jpg)";
      pageTitle = "Page";
  }

  // const slides = [
  //   {
  //     imageUrl: "/images/slider/african.jpeg",
  //     title:
  //       "Together We are Building a Healthier Haiti, One Family at a Time.",
  //     url: "/about-us",
  //     buttonText: "Learn More",
  //   },
  //   {
  //     imageUrl: "/images/slider/african3.jpeg",
  //     title:
  //       "Comprehensive Health Plans for Individuals, Family and Medicare Options.",
  //     url: "/health",
  //     buttonText: "Compare Plans",
  //   },
  //   {
  //     imageUrl: "/images/slider/african2.jpg",
  //     title: "Find an Affordable Dental & Vision Plan for Your Family.",
  //     url: "/dental",
  //     buttonText: "Discover More",
  //   },
  //   {
  //     imageUrl: "/images/slider/african3.jpg",
  //     title: "Protect Your Family's Financial Future with Life Insurance.",
  //     url: "/appointment",
  //     buttonText: "Contact Agent",
  //   },
  // ];

  const slides = t("slides", { returnObjects: true });

  const insuranceTypes = [
    {
      title: t("contact_form.insurance_types.health"),
    },
    {
      title: t("contact_form.insurance_types.dental"),
    },
    {
      title: t("contact_form.insurance_types.vision"),
    },
    {
      title: t("contact_form.insurance_types.medicare"),
    },
    {
      title: t("contact_form.insurance_types.life"),
    },
  ];

  const handleLinkClick = (href) => {
    router.push(href); // Use router to navigate
    setIsDropdownOpen(false); // Close the dropdown
  };

  // const prefLangCookie = getPrefLangCookie();

  return (
    <>
      <header id="home" className="bg-white">
        {/* Top Bar */}
        <div className="bg-primary-darkAqua">
          <div className="container mx-auto text-white py-4 px-0 lg:px-6 md:px-4 flex justify-end items-center text-sm">
            <div className="flex flex-col sm:flex-row w-full justify-between items-center">
              <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-10">
                <div className="flex items-center">
                  <FaPhoneVolume className="w-8 h-8 text-[#B92031]" />
                  <span className="text-white font-bold  px-2 text-xl">
                    1.844.544.0663
                  </span>
                </div>
                <div className="flex items-center">
                  <MdOutlineMailOutline className="w-8 h-8 text-[#B92031]" />
                  <span className="text-white font-bold px-2 text-xl">
                    info@h4hinsurance.com
                  </span>
                </div>
              </div>
              <div className=" lg:flex space-x-4 mt-4 sm:mt-0">
                <a href="#" className="hidden lg:flex hover:text-gray-400">
                  <FaFacebook className="w-6 h-6 text-white hover:text-blue-800" />
                </a>
                <a href="#" className="hidden lg:flex hover:text-gray-400">
                  <FaInstagram className="w-6 h-6 text-white hover:text-pink-800" />
                </a>
                <a href="#" className="hidden lg:flex hover:text-gray-400">
                  <FaWhatsapp className="w-6 h-6 text-white hover:text-green-800" />
                </a>
                <div className="text-black">
                  <LanguageChanger />
                </div>
              </div>
              <div className="lg:hidden block lg:mt-0 mt-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="hover:text-gray-400">
                      <FaBars className="w-6 h-6 text-white" />
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle> {t("navigation.navigate")}</SheetTitle>
                      <SheetDescription>
                        {t("navigation.choose_page")}
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <nav className="py-4">
                        <ul className="flex flex-col space-y-4">
                          <li>
                            <Link
                              href="/"
                              onClick={() => handleLinkClick("#home")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.home")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about-us"
                              onClick={() => handleLinkClick("/about-us")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.about_us")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/health"
                              onClick={() => handleLinkClick("/health")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.health")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dental"
                              onClick={() => handleLinkClick("/dental")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.dental_vision")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/life"
                              onClick={() => handleLinkClick("/life")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.life")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/medicare"
                              onClick={() => handleLinkClick("/medicare")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.medicare")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/mission"
                              onClick={() => handleLinkClick("/mission")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.mission")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/#contact"
                              onClick={() => handleLinkClick("#contact")}
                              className="hover:text-[#13287B] py-2 px-2"
                            >
                              {t("navigation.menu_items.contact")}
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => handleLinkClick("appointment")}
                              className="bg-primary-darkAqua p-4 rounded-full hover:bg-[#0A4958] text-white hover:text-white"
                            >
                              <FaPhone className="h-7 w-7" />
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">{t("navigation.close")}</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation */}
      </header>
      <header className="bg-white sticky top-0 z-50">
        <div className="bg-white mb-5 shadow-md  flex justify-center lg:justify-start items-center w-full mx-auto">
          <div className="flex lg:pl-[5rem] justify-center items-center text-[#0A4958] my-5 xl:w-5/12 w-[20%]">
            <Image
              alt="logo"
              src="/images/HHlogo.png"
              width={100}
              height={50}
              // style={{ width: '300px', height: '300px' }}
            />
          </div>
          <div className="hidden lg:flex justify-center items-center md:w-[60%]">
            {/* Navbar */}
            <nav className="text-black">
              <div className="xl:text-xl text-base flex space-x-16 font-bold">
                <Link
                  href="/"
                  className="hover:text-primary-darkAqua text-[#8d8d8d] py-2"
                >
                  {t("navigation.menu_items.home")}
                </Link>
                <Link
                  href="/about-us"
                  className="hover:text-primary-darkAqua text-[#8d8d8d] py-2"
                >
                  {t("navigation.menu_items.about_us")}
                </Link>

                <NavigationMenu>
                  <NavigationMenuList className="flex">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="hover:text-primary-darkAqua text-xl font-semibold text-[#8d8d8d] py-2">
                        {t("navigation.menu_items.products")}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white  w-[400px] shadow-lg rounded-md">
                        <div className="p-4">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/health"
                              className="block px-4 py-2 hover:bg-gray-100 text-[#8d8d8d]"
                            >
                              {t("navigation.menu_items.health")}
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/dental"
                              className="block px-4 py-2 hover:bg-gray-100 text-[#8d8d8d]"
                            >
                              {t("navigation.menu_items.dental_vision")}
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/life"
                              className="block px-4 py-2 hover:bg-gray-100 text-[#8d8d8d]"
                            >
                              {t("navigation.menu_items.life")}
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/medicare"
                              className="block px-4 py-2 hover:bg-gray-100 text-[#8d8d8d]"
                            >
                              {t("navigation.menu_items.medicare")}
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <Link
                  href="/mission"
                  className="hover:text-primary-darkAqua text-[#8d8d8d] py-2"
                >
                  {t("navigation.menu_items.mission")}
                </Link>
                {/* <Link
                  href='/#contact'
                  className='hover:text-primary-darkAqua text-[#8d8d8d] py-2'
                >
                  Contact Us
                </Link> */}
              </div>
            </nav>
          </div>
          <div className="hidden lg:flex lg:flex-col justify-center items-center w-[20%]">
            <button
              onClick={() => handleLinkClick("appointment")}
              className="bg-primary-darkAqua p-4 rounded-full hover:bg-[#0A4958] text-white hover:text-white animate-shadow-pulse"
            >
              <FaPhone className="h-12 w-12" />
            </button>
            <span className="hover:text-primary-darkAqua text-xs text-gray-800 py-1">
              {t("misc.schedule")}
            </span>
          </div>
        </div>
      </header>
      <header>
        {/* Hero Section */}
        {isHomePage ? (
          <div className="w-full mx-auto px-4 xl:pl-20 lg:pr-10 lg:flex justify-between mb-8">
            <div
              ref={formRef}
              className={`lg:w-1/3 w-full mb-5 lg:mb-0 p-6 bg-white rounded-lg shadow-2xl hover:shadow-slate-950`}
            >
              <h2 className="text-3xl text-[#B92031] font-bold mb-6">
                {/* Get Covered Today! */}
                {t("contact_form.title")}
              </h2>
              <form onSubmit={formik.handleSubmit}>
                {/* Insurance Type */}
                <div className="mb-4">
                  <label className="block text-gray-500 text-lg lg:text-xl font-semibold mb-2">
                    {/* Choose your Insurance Type */}
                    {t("contact_form.subtitle")}
                  </label>
                  <div className="flex text-lg flex-wrap gap-4">
                    {insuranceTypes.map((type, index) => (
                      <label key={index} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="insuranceType"
                          value={type.title}
                          onChange={formik.handleChange}
                          checked={formik.values.insuranceType.includes(
                            type.title
                          )}
                          className="form-checkbox text-blue-600"
                        />
                        <span className="ml-2 text-gray-500">{type.title}</span>
                      </label>
                    ))}
                  </div>
                  {formik.touched.insuranceType &&
                  formik.errors.insuranceType ? (
                    <div className="text-red-500">
                      {formik.errors.insuranceType}
                    </div>
                  ) : null}
                </div>

                {/* Full Name */}
                <div className="mb-4 ">
                  <label className="text-xl block text-gray-500 font-semibold mb-2">
                    {t("contact_form.fields.full_name")}
                  </label>
                  <div className="flex gap-4">
                    <div className="flex flex-col w-1/2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder={t("contact_form.fields.first_name")}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className="text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]"
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-red-500">
                          {formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-1/2">
                      <input
                        type="text"
                        name="lastName"
                        placeholder={t("contact_form.fields.last_name")}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className="text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]"
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-red-500">
                          {formik.errors.lastName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                  <label className="block text-xl text-gray-500 font-semibold mb-2">
                    {t("contact_form.fields.date_of_birth")}
                  </label>
                  <input
                    type="date"
                    name="dob"
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                    className="w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]"
                  />
                  {formik.touched.dob && formik.errors.dob ? (
                    <div className="text-red-500">{formik.errors.dob}</div>
                  ) : null}
                </div>

                {/* Zip Code */}
                <div className="mb-4">
                  <label className="block text-gray-500 font-semibold mb-2 text-xl">
                    {t("contact_form.fields.zip_code")}
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    onChange={formik.handleChange}
                    value={formik.values.zipCode}
                    className="w-full text-xl px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD]"
                  />
                  {formik.touched.zipCode && formik.errors.zipCode ? (
                    <div className="text-red-500">{formik.errors.zipCode}</div>
                  ) : null}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-xl text-gray-500 font-semibold mb-2">
                    {t("contact_form.fields.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01B6AD] text-xl"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                  ) : null}
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label className="block text-gray-500 font-semibold mb-2 text-xl">
                    {t("contact_form.fields.mobile_phone")}
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none text-xl focus:ring-2 focus:ring-[#01B6AD]"
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="text-red-500">
                      {formik.errors.phoneNumber}
                    </div>
                  ) : null}
                </div>

                {/* Consent */}
                <div className="mb-6">
                  <label className="inline-flex items-center text-xl">
                    <input
                      type="checkbox"
                      name="consent"
                      onChange={formik.handleChange}
                      checked={formik.values.consent}
                      className="form-checkbox text-[#01B6AD]"
                    />
                    <span className="ml-2 text-lg text-gray-500">
                      {t("contact_form.fields.text_consent")}
                    </span>
                  </label>
                  {formik.touched.consent && formik.errors.consent ? (
                    <div className="text-red-500">{formik.errors.consent}</div>
                  ) : null}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {t("contact_form.consent_notice")}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-blue-600 underline">
                        {t("contact_form.links.privacy_policy")}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] sm:max-h-[790px] overflow-y-auto">
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
                                {t(
                                  "privacy_policy.information_we_collect.pii.title"
                                )}
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
                            {t(
                              "privacy_policy.how_we_collect_information.title"
                            )}
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
                            {t(
                              "privacy_policy.how_we_use_your_information.title"
                            )}
                          </h2>
                          <ul className="list-disc list-inside space-y-2">
                            {t(
                              "privacy_policy.how_we_use_your_information.content",
                              { returnObjects: true }
                            ).map((item, index) => (
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
                                <h3 className="font-semibold mb-1">
                                  {item.title}
                                </h3>
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
                          <p>
                            {t("privacy_policy.changes_to_this_policy.content")}
                          </p>
                        </section>

                        {/* Contact Us Section */}
                        <section>
                          <h2 className="font-bold text-xl mb-3">
                            {t("privacy_policy.contact_us.title")}
                          </h2>
                          <div className="space-y-2">
                            <p>
                              {t("privacy_policy.contact_us.content.address")}
                            </p>
                            <p>
                              {t("privacy_policy.contact_us.content.email")}
                            </p>
                            <p>
                              {t("privacy_policy.contact_us.content.phone")}
                            </p>
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
                  <span className="px-1">and </span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-blue-600 underline">
                        {t("contact_form.links.terms_and_conditions")}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] sm:max-h-[790px] overflow-y-auto">
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
                          {t(
                            "terms_and_conditions.information_you_provide.title"
                          )}
                        </h2>
                        {t(
                          "terms_and_conditions.information_you_provide.content",
                          { returnObjects: true }
                        ).map((item, index) => (
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
                          {t(
                            "terms_and_conditions.privacy_and_data_sharing.title"
                          )}
                        </h3>
                        <p>
                          {t(
                            "terms_and_conditions.privacy_and_data_sharing.content"
                          )}
                        </p>
                        <h3 className="font-semibold">
                          {t(
                            "terms_and_conditions.disclaimer_and_liability.title"
                          )}
                        </h3>
                        <p>
                          {t(
                            "terms_and_conditions.disclaimer_and_liability.content"
                          )}
                        </p>
                        <h2 className="font-bold">
                          {t(
                            "terms_and_conditions.intellectual_property.title"
                          )}
                        </h2>
                        <p>
                          {t(
                            "terms_and_conditions.intellectual_property.content"
                          )}
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
                          {t(
                            "terms_and_conditions.limitation_of_liability.title"
                          )}
                        </h2>
                        {t(
                          "terms_and_conditions.limitation_of_liability.content",
                          { returnObjects: true }
                        ).map((item, index) => (
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
                          {t(
                            "terms_and_conditions.changes_to_these_terms.title"
                          )}
                        </h2>
                        <p>
                          {t(
                            "terms_and_conditions.changes_to_these_terms.content"
                          )}
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
                            document
                              .querySelector("[data-state='open']")
                              .click()
                          }
                        >
                          {t("navigation.close")}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  .
                </p>
                <button
                  type="submit"
                  className="bg-primary-darkAqua mt-3 text-white font-semibold py-2 px-6 hover:bg-[#0A4958] transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </form>
            </div>
            <div
              className={`flex flex-col justify-between items-center lg:w-2/3 lg:pl-5 w-full min-h-full mt-8`}
            >
              <div className="flex xl:flex-row flex-col items-center pb-4 xl:pb-0">
                <Image
                  alt="contact"
                  src="/images/ContactUs.svg"
                  width={200}
                  height={500}
                  // style={{ width: '300px', height: '300px' }}
                />
                <div className="flex flex-col xl:items-start items-center space-y-6">
                  <p className="text-gray-500 text-2xl md:text-5xl">
                    Health <span className="text-[#B92031]">4</span> Haitians
                  </p>
                  <p className="font-bold text-lg md:text-3xl">
                    {t("home.hero.subtitle")}
                  </p>
                  <button
                    onClick={() => handleLinkClick("#contact")}
                    className="bg-primary-darkAqua p-2 rounded-full w-1/2 hover:bg-[#0A4958] text-white hover:text-white"
                  >
                    {t("home.hero.cta_button")}
                  </button>
                </div>
              </div>
              <Carousel plugins={[plugin.current]} className="w-full">
                <CarouselContent>
                  {slides && slides.length > 0 && (
                    <>
                      {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                          <div
                            className="relative h-[24rem] lg:h-[45rem] xl:h-[40rem] bg-cover bg-center rounded-md"
                            style={{
                              backgroundImage: `url(${slide.imageUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center max-w-3xl text-white space-y-4 animate-slideIn">
                                <h1 className="text-lg md:text-4xl font-bold leading-normal">
                                  {slide.title}
                                </h1>
                                <button
                                  onClick={() => {
                                    router.push(slide.url);
                                  }}
                                  className="bg-primary-darkAqua hover:bg-[#0A4958] text-white hover:text-white font-bold py-2 px-4 rounded"
                                >
                                  {slide.buttonText}
                                </button>
                                {/* <p className='text-sm md:text-lg'>
                          {slide.description}
                        </p> */}
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </>
                  )}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
