"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import localFont from "next/font/local";
import Image from "next/image";
import { TESTIMONIAL } from "./test";
import { motion } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <section className="w-full mt-5 h-[fit] flex flex-col items-center justify-center">
      <div className="flex items-center w-full justify-center p-3 my-3 pb-6 flex-col gap-4">
        <h5
          className={`md:text-3xl text-2xl uppercase text-[#00008B] font-bold text-center`}
        >
          <motion.h5
            whileInView={"visible"}
            transition={{ duration: 1.2 }}
            initial="hidden"
            variants={{
              hidden: { x: -120, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            What our clients say
          </motion.h5>
        </h5>
        <div className="grid md:grid-cols-1 grid-cols w-full gap-3 lg:px-9 md:px-5 px-1 relative justify-center">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={12}
            slidesPerView={1}
            allowTouchMove={false}
            loop={false}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            className="mySwiper flex items-center lg:w-[52%] md:w-[60%] w-full"
          >
            {TESTIMONIAL.map((con, i) => (
              <SwiperSlide
                className="h-[fit] w-full flex justify-center items-center shadow-md shadow-[#00000040]"
                key={i}
              >
                <div
                  className="flex flex-col gap-3 w-full py-3 px-2 rounded-[8px] md:h-67 h-75 shadow-lg border border-[#00000040] bg-white items-center"
                  key={i}
                >
                  {/* <Image
                    className="rounded-full h-22 w-22"
                    src={con.image}
                    alt=""
                    width={250}
                    height={250}
                   /> */}
                  <p className="font-normal text-base leading-6 md:w-[90%] w-[95%]">
                    {con.review}
                  </p>
                  <span className="font-semibold text-xl uppercase text-end gap-3 w-full">
                    {con.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-0 top-0 w-full h-full items-center justify-center end-0 z-2 md:m-0 mt-5 flex gap-4">
            <div className="md:w-[70%] w-full h-full items-center justify-between flex gap-4">
              <button className="prev-btn bg-[#FF0000] disabled:bg-[#BDBDBD] hover:bg-[#FF0000]/40 text-white md:w-14 w-9 md:h-14 h-9 rounded-full flex items-center justify-center transition-all shadow-lg cursor-pointer md:m-0 -ms-3">
                <FaChevronLeft className="md:text-xl text-base" size="20" />
              </button>
              <button className="next-btn bg-[#FF0000] disabled:bg-[#BDBDBD] hover:bg-[#FF0000]/40 text-white md:w-14 w-9 md:h-14 h-9 rounded-full flex items-center justify-center transition-all shadow-lg cursor-pointer md:m-0 -me-3">
                <FaChevronRight className="md:text-xl text-base" size="20" />
              </button>
            </div>
          </div>
        </div>
        <button className="swiper-pagination-custom"></button>
      </div>
    </section>
  );
}
