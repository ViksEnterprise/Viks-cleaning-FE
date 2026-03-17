"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WhyChooseUs from "../component/Reason";
import Services from "../component/Service";
import Footer from "../component/Footer";

export default function OurServices() {
  return (
    <>
      <div>
        <div className="bg-[url('/img/service.webp')] w-full h-115 bg-no-repeat bg-cover bg-center relative before:bg-black/60 before:h-full before:w-full before:absolute before:z-1 text-white flex items-center justify-center overflow-hidden">
          <motion.h2
            whileInView={"visible"}
            transition={{ duration: 1.2 }}
            initial="hidden"
            variants={{
              hidden: { x: -120, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="relative z-2 text-5xl font-semibold uppercase"
          >
            Our services
          </motion.h2>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-6xl items-center justify-between p-5">
            <div className="flex flex-col gap-6 items-start w-full">
              <span className="text-lg font-medium leading-[150%]">
                At Viks Cleaning Services, we offer a large range of different
                cleaning services ranging from commercial, residential and
                others listed below. Here are the services we offer.
              </span>
              <Services home={false} />
              <div className="w-full flex items-center justify-center">
                <a
                  href="/"
                  className="bg-[#0C06AC] text-sm h-11 flex items-center justify-center w-54 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
                >
                  Book our services now
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-[#BDBDBD]" />
        <WhyChooseUs />
      </div>
      <Footer />
    </>
  );
}
