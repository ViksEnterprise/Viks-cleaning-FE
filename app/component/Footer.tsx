"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
import { FaCheck, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    const date = new Date().getFullYear();
    setDate(date);
  }, []);
  return (
    <footer className="w-full h-fit">
      <div className="w-full bg-[#0D05D2] px-5 py-3 flex items-center justify-between text-white flex-col h-full">
        <div className="w-full flex items-center justify-center px-1 mb-5 pb-5">
          <div className="md:w-[94%] w-full flex md:flex-row flex-col justify-between items-start md:gap-6 gap-7 py-6 flex-wrap">
            <div className="xl:w-88 lg:w-[40%] md:w-[50%] w-full flex flex-col gap-2">
              <Image
                src="/img/logo-bg.jpg"
                className="w-14 h-15"
                alt=""
                height={100}
                width={100}
              />
              <h2 className="font-[500] text-2xl font-semibold uppercase">
                Viks cleaning service
              </h2>
              <span className="font-[200] text-[0.95em]">
                A leading provider of professional cleaning services.
              </span>
            </div>
            <div className="lg:w-[11%] md:w-[40%] flex flex-col gap-2">
              <h2 className="text-xl font-bold">Navigation</h2>
              <ul className="flex flex-col gap-2">
                <li className="font-[200] text-[0.90em]">
                  <a href="/">Home</a>
                </li>
                <li className="font-[200] text-[0.90em]">
                  <a href="/about">About</a>
                </li>
                <li className="font-[200] text-[0.90em]">
                  <a href="/services">Services</a>
                </li>
                <li className="font-[200] text-[0.90em]">
                  <a href="/#testimonial">Testimonials</a>
                </li>
                <li className="font-[200] text-[0.90em]">
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="lg:w-[15%] md:w-[40%] flex flex-col gap-3">
              <span className="text-xl font-bold">Services we offer</span>
              <div className="flex w-full flex-col gap-2">
                <span className="font-[200] text-[0.90em] flex items-start gap-1">
                  <div className="h-3 w-3 bg-white rounded-full text-blue-800 mt-1 flex items-center justify-center font-bold">
                    <FaCheck size={10} />
                  </div>
                  Residential cleaning
                </span>
                <span className="font-[200] text-[0.90em] flex items-start gap-1">
                  <div className="h-3 w-3 bg-white rounded-full text-blue-800 mt-1 flex items-center justify-center font-bold">
                    <FaCheck size={10} />
                  </div>
                  Commercial cleaning
                </span>
                <span className="font-[200] text-[0.90em] flex items-start gap-1">
                  <div className="h-3 w-3 bg-white rounded-full text-blue-800 mt-1 flex items-center justify-center font-bold">
                    <FaCheck size={10} />
                  </div>
                  End of tenancy cleaning
                </span>
                <span className="font-[200] text-[0.90em] flex items-start gap-1">
                  <div className="h-3 w-3 bg-white rounded-full text-blue-800 mt-1 flex items-center justify-center font-bold">
                    <FaCheck size={10} />
                  </div>
                  Move-in / Move-out cleaning
                </span>
                <span className="font-[200] text-[0.90em] flex items-start gap-1">
                  <div className="h-3 w-3 bg-white rounded-full text-blue-800 mt-1 flex items-center justify-center font-bold">
                    <FaCheck size={10} />
                  </div>
                  Eco-friendly cleaning
                </span>
                <span className="font-[200] text-[0.90em] flex items-start gap-1">
                  <div className="h-3 w-3 bg-white rounded-full text-blue-800 mt-1 flex items-center justify-center font-bold">
                    <FaCheck size={10} />
                  </div>
                  One-off and deep cleaning
                </span>
              </div>
            </div>
            <div className="lg:w-[15%] md:w-[40%] flex flex-col gap-3">
              <span className="text-xl font-bold capitalize">Contact us</span>
              <div className="flex w-full flex-col gap-2">
                <a
                  href="tel:+2349046783567"
                  className="font-[200] text-[0.90em] flex items-center gap-1"
                >
                  <BiPhoneCall size={18} />
                  +234 9046783567
                </a>
                <a
                  href="mailto:vikscleaning@gmail.com"
                  className="flex items-center font-[200] text-[0.90em] gap-1"
                >
                  <FiMail size={18} />
                  vikscleaning@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center p-3 md:h-11 h-full pt-4 flex md:flex-row flex-col md:items-center items-end justify-between mt-5 gap-4">
          <div className="flex md:gap-5 gap-2 md:flex-row flex-col md:items-center items-end">
            <span className="text-base font-medium">Follow us:</span>
            <div className="flex items-center gap-3 w-[fit]">
              <a
                href="https://www.instagram.com/creasitenextgenacademy?igsh=MTI1c2k5bmdsZTRxYg=="
                className="text-white"
              >
                <BsInstagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/creasite-nextgen-academy"
                className="text-white"
              >
                <BsLinkedin size={15} />
              </a>
              <a
                href="https://wa.me/message/2OTMB2XMKQG3B1"
                className="text-white"
              >
                <FaXTwitter size={15} />
              </a>
            </div>
          </div>
          <span className="font-[200] text-[0.90em] md:w-fit w-full flex items-start gap-1">
            &copy; {date} Viks Cleaning Service
          </span>
        </div>
      </div>
    </footer>
  );
}
