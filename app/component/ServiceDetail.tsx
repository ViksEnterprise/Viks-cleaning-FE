"use client";

import Image from "next/image";
import React from "react";
import { FaX } from "react-icons/fa6";
import { SERVICES } from "./ts/services";
import { motion } from "motion/react";

interface ServiceDetailProps {
  id: String;
  isOpen: Boolean;
  close: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ isOpen, close, id }) => {
  const detail = SERVICES.find((i) => i.title === id);

  if (!isOpen) {
    return;
  }
  return (
    <div className="fixed z-6 bg-black/45 w-full start-0 top-0 h-full bottom-0 flex items-center justify-center p-3">
      <div className="w-2xl bg-white rounded-2xl h-fit p-4 flex flex-col gap-4 relative overflow-hidden">
        <FaX
          onClick={close}
          className="absolute top-3 end-3 cursor-pointer"
          size={17}
        />
        <motion.h2
          whileInView={"visible"}
          transition={{ duration: 1.2 }}
          initial="hidden"
          variants={{
            hidden: { x: -120, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          className="text-center text-2xl font-bold capitalize m-0 p-0"
        >
          {detail?.title}
        </motion.h2>
        <motion.div
          whileInView={"visible"}
          transition={{ duration: 1.2 }}
          initial="hidden"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          className="h-fit w-full"
        >
          <Image
            src={`${detail?.img}`}
            className="lg:h-84 sm:h-72 h-68 rounded-lg border-gray-200 border w-full m-0"
            alt=""
            height={500}
            width={500}
          />
        </motion.div>
        <motion.p
          whileInView={"visible"}
          transition={{ duration: 1.2 }}
          initial="hidden"
          variants={{
            hidden: { x: -120, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          className="font-normal text-sm"
        >
          {detail?.des}
        </motion.p>
        <div className="w-full flex items-center justify-end">
          <a
            href="/book-cleaning"
            className="bg-[#0C06AC] text-sm h-11 flex items-center justify-center w-54 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetail;
