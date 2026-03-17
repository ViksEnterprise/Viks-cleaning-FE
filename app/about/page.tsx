"use client";

import Image from "next/image";
import { VALUE } from "../component/values";
import { useEffect, useState } from "react";
import Testimonial from "../component/Review";
import { motion } from "motion/react";
import Footer from "../component/Footer";

export default function About() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 780 : false,
  );
  const [isMounted, setIsMounted] = useState(false);

  const checkWindowWIdth = () => {
    setMobile(window.innerWidth <= 765);
  };

  useEffect(() => {
    setIsMounted(true);

    checkWindowWIdth();
    window.addEventListener("resize", checkWindowWIdth);

    return () => window.removeEventListener("resize", checkWindowWIdth);
  }, []);
  if (!isMounted) return null;

  return (
    <div>
      <div className="flex w-full items-center justify-center lg:h-screen h-full py-5 mt-5">
        {!mobile ? (
          <div className="flex w-6xl items-center justify-between p-5 mt-7 pt-5">
            <div className="relative w-fit h-full">
              <div className="overflow-hidden">
                <motion.div
                  whileInView={"visible"}
                  transition={{ duration: 1.2 }}
                  initial="hidden"
                  variants={{
                    hidden: { x: 120, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                >
                  <Image
                    src="/img/about.jpg"
                    alt=""
                    className="h-120 w-lg rounded-br-[5em]"
                    height={500}
                    width={500}
                  />
                </motion.div>
              </div>
              <div className="overflow-hidden h-fit absolute -bottom-[4em]">
                <motion.div
                  whileInView={"visible"}
                  transition={{ duration: 1.2 }}
                  initial="hidden"
                  variants={{
                    hidden: { x: -120 },
                    visible: { x: 0 },
                  }}
                >
                  <Image
                    src="/img/viks-office.jpg"
                    alt=""
                    className="h-62 w-sm rounded-br-[3em]"
                    height={500}
                    width={500}
                  />
                </motion.div>
              </div>
            </div>
            <div className="grid gap-5 items-start w-xl">
              <h2 className="text-center text-[#00008B] text-4xl font-semibold uppercase">
                About
              </h2>
              <span className="text-base px-4 w-[98%]">
                At Viks Cleaning, we take pride in delivering premium cleaning
                services that consistently exceed expectations. With a deep
                passion for hygiene and an unwavering commitment to quality, our
                experienced professionals work diligently to ensure every space
                we touch is left spotless, fresh, and thoroughly sanitized.
              </span>
              <div className="flex flex-col px-4 gap-3 w-[90%]">
                <span className="text-base font-semibold">
                  Trusted Cleaning Solutions with a Commitment to Care
                </span>
                <span className="text-base">
                  We understand that every space deserves meticulous care,
                  whether it’s a private residence, commercial facility, or
                  transitional property. We specialize in delivering reliable,
                  detail-oriented cleaning services tailored to meet the
                  specific needs of each client. From deep surface treatments to
                  specialized carpet care, our services are designed with
                  precision, flexibility, and consistency at their core.
                </span>
                <span className="text-base">
                  Our commitment extends beyond clean spaces. We prioritize your
                  well-being and the environment by using non-toxic,
                  eco-conscious products and sustainable cleaning methods
                  ensuring a safer, healthier home for you, your family, and
                  your pets.
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid w-full gap-4 p-5 mt-8 pt-7">
            <div className="grid gap-4 overflow-hidden">
              <motion.div
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { x: -120, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                <Image
                  src="/img/about.jpg"
                  alt=""
                  className="h-84 w-full rounded-xl"
                  height={500}
                  width={500}
                />
              </motion.div>
              <span className="text-base font-semibold">
                Let's Us Take Care of Your Cleaning Needs
              </span>
              <span className="text-sm">
                We understand that every space deserves meticulous care, whether
                it’s a private residence, commercial facility, or transitional
                property. We specialize in delivering reliable, detail-oriented
                cleaning services tailored to meet the specific needs of each
                client. From deep surface treatments to specialized carpet care,
                our services are designed with precision, flexibility, and
                consistency at their core.
              </span>
            </div>
            <div className="grid gap-5 w-full overflow-hidden">
              <motion.div
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { x: 120, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                <Image
                  src="/img/about-2.jpeg"
                  alt=""
                  className="h-84 w-full rounded-xl"
                  height={500}
                  width={500}
                />
              </motion.div>
              <h2 className="text-2xl font-semibold uppercase">Who we are</h2>
              <span className="text-sm w-full">
                At Viks Cleaning, we take pride in delivering premium cleaning
                services that consistently exceed expectations. With a deep
                passion for hygiene and an unwavering commitment to quality, our
                experienced professionals work diligently to ensure every space
                we touch is left spotless, fresh, and thoroughly sanitized.
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex w-full items-center justify-center lg:h-screen h-full bg-[#4942ea] text-white mt-3">
        <div className="flex md:w-6xl w-full p-5">
          <div className="grid justify-between space-y-8 h-full items-start w-full overflow-hidden">
            <motion.h2
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { x: -120, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="text-center text-3xl font-semibold uppercase md:mb-5 mb-2"
            >
              Our values
            </motion.h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols md:mt-5 mt-0 pt-5 gap-5 overflow-hidden">
              {VALUE.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    whileInView={"visible"}
                    transition={{ duration: 1.2 }}
                    initial="hidden"
                    variants={{
                      hidden: { y: 90, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    className="h-54 rounded-lg flex flex-col gap-4 border-white border px-5 justify-center md:mt-5 mt-3"
                    key={i}
                  >
                    <div className="h-7 w-7 rounded-full bg-[#FF0000] relative flex items-start justify-end">
                      <Icon className="absolute -end-2" size={22} />
                    </div>
                    <h6 className="text-3xl">{val.name}</h6>
                    <span className="text-sm">{val.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="text-[#BDBDBD]" />
      <Testimonial />
      <hr className="text-[#BDBDBD]" />
      <div className="flex w-full items-center justify-center h-72">
        <div className="flex md:w-6xl w-full items-center justify-between p-5">
          <div className="flex flex-col gap-6 items-center w-full text-center overflow-hidden">
            <motion.h2
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { x: -120, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="text-center text-[#00008B] text-4xl font-semibold"
            >
              If you have any questions
            </motion.h2>
            <span className="text-base font-medium">
              Feel free to contact us by clicking on the button
            </span>
            <a
              href="/contact"
              className="bg-[#0C06AC] text-sm h-11 flex items-center justify-center w-42 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
