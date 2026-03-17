"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Testimonial from "../component/Review";
import { motion } from "motion/react";
import Services from "../component/Service";

export default function LandingPage() {
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
    <div className="w-full">
      <div className="md:bg-[#E5E8FF] bg-white w-full lg:h-screen h-full flex items-end justify-center gap-6 lg:pt-0  pt-5">
        <div className="flex flex-col md:flex-row items-end md:gap-6 gap-5 lg:items-start items-center justify-between md:w-6xl w-full px-5 lg:pt-0 pt-5 lg:mt-0 mt-7 overflow-hidden">
          <div className="flex flex-col md:gap-5 gap-4 md:w-lg w-full justify-center h-full font-bold md:pt-0 py-3 pt-5 md:mt-0 mt-7">
            <div className="bg-[#0C06AC] text-xs h-10 flex items-center justify-center w-fit rounded-3xl text-white p-3 px-4 md:mt-0 mt-7">
              Professional Cleaning Service Company
            </div>
            <motion.h2
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { x: -120, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="m-0 md:text-4xl text-2xl font-[500] leading-[155%] p-0"
            >
              Exceptional Cleaning Services for{" "}
              <span className="text-[#00008B]">Homes</span> and{" "}
              <span className="text-[#00008B]">Workspaces</span>
            </motion.h2>
            <motion.span
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              className="text-base font-normal m-0 p-0 leading-[145%]"
            >
              We take pride in our attention to detail and providing maximum
              customer satisfaction.
            </motion.span>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { x: -120, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="md:w-fit w-full flex items-center md:items-start justify-center md:justify-center"
            >
              <a className="bg-[#0C06AC] font-[500] text-sm h-10 flex items-center justify-center w-38 cursor-pointer rounded-lg text-white p-3 px-4 m-0">
                Book our service
              </a>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="w-fit"
          >
            {!mobile ? (
              <Image
                className="h-120 w-full"
                src="/img/hero.png"
                alt=""
                width={500}
                height={400}
              />
            ) : (
              <Image
                className="h-68 w-full"
                src="/img/mobile-home.jpg"
                alt=""
                width={500}
                height={400}
              />
            )}
          </motion.div>
        </div>
      </div>
      <div className="lg:h-screen h-fit md:mt-0 mt-4 flex flex-col gap-4 items-center">
        <div className="grid gap-6 items-start p-5 xl:w-6xl w-full overflow-hidden">
          <div className="flex justify-between flex-col md:flex-row gap-5 items-start w-full">
            <div className="grid space-y-2 itms-start md:w-2xs w-full">
              <h3 className="lg:text-sm md:text-base text-lg uppercase font-medium">
                About us
              </h3>
              <motion.span
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { x: -120, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                className="m-0 md:text-2xl text-xl leading-[155%]"
              >
                <span className="text-[#00008B]">Your top choice</span> for
                cleaning service
              </motion.span>
            </div>
            <motion.div
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              className="xl:w-2xl lg::w-xl sm:w-sm w-full flex items-end justify-end md:h-34 h-fit"
            >
              <span className="text-sm leading-[145%]">
                At Viks Cleaning, we understand that a clean space is essential
                to health, productivity, and peace of mind. Backed by trained
                professionals and industry-grade equipment, we offer tailored
                cleaning solutions for homes, offices, and commercial spaces.
                Our commitment to excellence, punctuality, and client
                satisfaction has earned us the trust of households and
                businesses alike.
              </span>
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols gap-4 items-end mt-5">
            {!mobile && (
              <motion.div
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { y: 70, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <Image
                  className="h-92 w-full rounded-lg"
                  src="/img/viks-clean.jpg"
                  alt=""
                  width={500}
                  height={400}
                />
              </motion.div>
            )}
            <motion.div
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { y: 70, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <Image
                className="lg:h-72 sm:h-92 w-full rounded-lg"
                src="/img/viks-office.jpg"
                alt=""
                width={500}
                height={400}
              />
            </motion.div>
            {!mobile && (
              <motion.div
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { y: 70, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <Image
                  className="h-92 w-full rounded-lg"
                  src="/img/viks-home.jpg"
                  alt=""
                  width={500}
                  height={400}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <hr className="text-[#BDBDBD]" />
      <div className="lg:h-screen h-full flex flex-col gap-4 items-center">
        <div className="grid gap-6 items-start p-5 xl:w-6xl w-full">
          <div className="flex md:flex-row flex-col justify-between items-center w-full">
            <div className="grid space-y-2 itms-start md:w-xs w-full">
              <h3 className="lg:text-sm md:text-base text-lg uppercase font-medium">
                Our services
              </h3>
              <motion.span
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { x: -120, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                className="m-0 md:text-xl lg:text-2xl text-lg leading-[155%]"
              >
                Explore our
                <span className="text-[#00008B]"> cleaning services</span>
              </motion.span>
            </div>
            {!mobile && (
              <a
                href="/services"
                className="bg-[#0C06AC] text-sm h-10 flex items-center justify-center w-42 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
              >
                View all our services
              </a>
            )}
          </div>
          <Services home={true} />
          {mobile && (
            <div className="w-full flex items-center justify-center">
              <a
                href="/services"
                className="bg-[#0C06AC] text-sm h-10 flex items-center justify-center w-52 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
              >
                View all our services
              </a>
            </div>
          )}
        </div>
      </div>
      <hr className="text-[#BDBDBD]" />
      <div className="lg:h-screen sm:h-130 h-fit md:py-5 px-3 flex flex-col gap-4 items-center py-0 mb-5 relative">
        <div className="grid gap-6 items-start p-5 py-7 xl:w-6xl w-full bg-[#00000033] h-full rounded-2xl">
          <div className="flex justify-between items-center w-full mt-5">
            <div className="grid gap-5 itms-start xl:w-lg lg:w-sm sm:w-2xs w-full overflow-hidden">
              <motion.h2
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { x: -120, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                className="md:text-2xl text-xl font-medium"
              >
                Our Commitment to Excellence Experiences
              </motion.h2>
              <motion.span
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                className="m-0 text-sm leading-[155%]"
              >
                At Viks Cleaning Services, we’re not just about cleaning homes,
                we’re about making a difference in the lives of our clients and
                our community. Explore our core mission and vision that drives
                us every day. We offer customized cleaning packages and use
                eco-friendly cleaning products.
              </motion.span>
              <motion.a
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { x: -120, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                className="bg-[#0C06AC] text-xs h-10 flex items-center justify-center w-38 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
              >
                Request service
              </motion.a>
            </div>
            {!mobile && (
              <div className="flex xl:w-xl sm:w-sm flex-col items-start relative">
                <div className="w-full">
                  <Image
                    src="/img/viks-clean.jpeg"
                    className="rounded-2xl"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-full flex gap-3 absolute xl:-start-7 lg:-start-[6em] bottom-0">
                  <Image
                    src="/img/viks-clean.jpg"
                    className="rounded-2xl xl:w-68 lg:w-49 w-44 -rotate-[20deg] xl:-start-[3em] lg:-end-[2em] sm:-start-[2em] xl:-bottom-[6em] lg:-bottom-[5em] -bottom-[4em] relative"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/img/viks-office.jpg"
                    className="rounded-2xl xl:w-68 lg:w-49 w-44 rotate-[20deg] xl:-end-[2em] lg:-end-[5em] -end-[1.7em] xl:-bottom-[6em] lg:-bottom-[5em] -bottom-[4em] relative"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="text-[#BDBDBD]" />
      <Testimonial />
    </div>
  );
}
