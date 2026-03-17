'use client'

import Image from "next/image";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { WHYCHOOSEUS } from "../data/why-c-us";
import { useState } from "react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const [activeID, setActiveID] = useState(0);

  const toggle = (i: any) => {
    setActiveID(activeID === i ? null : i);
    console.log(i)
  };

  return (
    <div className="w-full items-center flex justify-center py-8 my-6">
      <div className="grid items-start gap-5 w-6xl p-5">
        <div className="flex items-start gap-2 mb-2">
          <div className="h-[1.5px] w-8 bg-black mt-4"></div>
          <div className="flex flex-col gap-2 items-start h-fit">
            <span className="text-2xl capitalize text-[#00008B] font-bold">
              Why choose us
            </span>
            <span>Here is why our customers choose us</span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-5 gap-7 h-full overflow-hidden">
          <div className="md:w-lg w-full flex flex-col gap-5">
            {WHYCHOOSEUS.map((val, i) => (
              <div className="grid grid-cols gap-3 w-full h-full" key={i}>
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <div className="flex items-center gap-5">
                    <div className="h-7 w-7 rounded-full bg-[#FF0000] relative flex items-start justify-end">
                      <HiOutlineCheckBadge
                        className="absolute -end-2"
                        size={22}
                      />
                    </div>
                    <span className="md:text-xl text-base font-medium">{val.title}</span>
                  </div>
                  {activeID == i ? (
                    <BiChevronUp size={34} />
                  ) : (
                    <BiChevronDown size={34} />
                  )}
                </div>
                {activeID == i && (
                  <span className="md:text-base text-sm font-normal">{val.info}</span>
                )}
              </div>
            ))}
          </div>
          <motion.div
            whileInView={"visible"}
            transition={{ duration: 1.2 }}
            initial="hidden"
            variants={{
              hidden: { x: 120, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="md:w-lg w-full h-full"
          >
            <Image
              src="/img/about-2.jpeg"
              className="lg:h-96 sm:h-full h-64 border-gray-200 border w-full m-0"
              alt=""
              height={500}
              width={500}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
