"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ServiceDetail from "./ServiceDetail";
import React, { useEffect, useState } from "react";
import { SERVICES } from "./ts/services";

interface SERVICEPROPS {
  home: Boolean;
}

const Services: React.FC<SERVICEPROPS> = ({ home }) => {
  const [id, setId] = useState("");
  const [state, setState] = useState(false);
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 780 : false,
  );
  const [isMounted, setIsMounted] = useState(false);

  const openDetail = (val: string) => {
    setId(val);
    document.body.style.overflow = "hidden";
    setState(true);
  };

  const closeDetail = () => {
    setState(false);
    document.body.style.overflow = "auto";
  };

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
    <>
      {!home ? (
        <div className="grid md:grid-cols-2 grid-cols gap-5 mt-4 overflow-hidden">
          {SERVICES.map((val, i) => (
            <motion.div
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              key={i}
              className="perspective overflow-hidden h-fit w-fit rounded-lg cursor-pointer"
            >
              <div className="relative h-82 block w-full duration-500 transform-style preserve-3d hover:rotate-y-180">
                <div className="backface-hidden h-fit w-full flex">
                  <Image
                    src={val.img}
                    className="h-82 rounded-lg border-gray-200 border"
                    alt=""
                    height={500}
                    width={500}
                  />
                  <div className="h-12 flex items-center absolute end-0 w-fit p-3 bg-[#00008B] top-4 text-white capitalize">
                    {val.title}
                  </div>
                </div>
                <div className="absolute top-0 rotate-y-180 backface-hidden h-82 w-full bg-[#00008B]/55 flex flex-col gap-4 text-white items-center justify-center">
                  <span className="text-3xl capitalize">{val.title}</span>
                  <button
                    type="button"
                    onClick={() => openDetail(val.title)}
                    className="w-64 h-11 rounded-lg text-center justify-center flex items-center bg-[#00008B] cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : !mobile ? (
        <div className="grid grid-cols-3 gap-4 items-end mt-5">
          {SERVICES.slice(0, 3).map((val, i) => (
            <motion.div
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { y: 70, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="perspective shadow-[#00000040] h-92 rounded-lg overflow-hidden"
              key={i}
            >
              <div className="relative h-full block w-full duration-500 transform-style preserve-3d hover:rotate-y-180">
                <div className="backface-hidden h-full w-full shadow border-[#BDBDBD] border p-5 flex items-start justify-between flex-col gap-5 cursor-pointer">
                  <span className="text-2xl">{val.title}</span>
                  <Image
                    className="h-56 w-full rounded-lg"
                    src={val.img}
                    alt=""
                    width={500}
                    height={400}
                  />
                </div>
                <div className="absolute top-0 rotate-y-180 backface-hidden h-[inherit] w-full bg-[#00008B]/55 flex flex-col gap-4 text-white items-center justify-center">
                  <span className="text-3xl capitalize">{val.title}</span>
                  <button
                    type="button"
                    onClick={() => openDetail(val.title)}
                    className="w-64 h-11 rounded-lg text-center justify-center flex items-center bg-[#00008B] cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols gap-4 items-end mt-5">
          {SERVICES.slice(0, 2).map((val, i) => (
            <motion.div
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { y: 70, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="perspective cursor-pointer h-86 rounded-lg overflow-hidden"
              key={i}
            >
              <div className="relative h-full block w-full duration-500 transform-style preserve-3d hover:rotate-y-180">
                <div className="backface-hidden h-full w-full shadow-[#00000040] shadow border-[#BDBDBD] border p-5 flex items-start justify-between flex-col gap-5">
                  <span className="text-xl">{val.title}</span>
                  <Image
                    className="h-56 w-full rounded-lg"
                    src={val.img}
                    alt=""
                    width={500}
                    height={400}
                  />
                </div>
                <div className="absolute top-0 rotate-y-180 backface-hidden h-full w-full bg-[#00008B]/55 flex flex-col gap-4 text-white items-center justify-center">
                  <span className="text-3xl capitalize">{val.title}</span>
                  <button
                    type="button"
                    onClick={() => openDetail(val.title)}
                    className="w-64 h-11 rounded-lg text-center justify-center flex items-center bg-[#00008B] cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <ServiceDetail id={id} close={closeDetail} isOpen={state} />
    </>
  );
};

export default Services;
