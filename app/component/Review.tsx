"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import localFont from "next/font/local";
import Image from "next/image";
import { TESTIMONIAL } from "./test";
import { motion } from "motion/react";

export default function Testimonial() {
  return (
    <section className="w-full mt-5 h-[fit] flex flex-col items-center justify-center">
      <div className="flex items-center w-full justify-center p-3 my-3 pb-6 flex-col gap-4">
        <h5
          className={`md:text-3xl text-2xl uppercase text-white text-center`}
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
            What our students say
          </motion.h5>
        </h5>
        <div className="grid md:grid-cols-1 grid-cols w-full gap-3 lg:px-9 md:px-5 px-1">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            allowTouchMove={false}
            loop={false}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            className="mySwiper flex items-center lg:w-[50%] md:w-[60%] w-full"
          >
            {TESTIMONIAL.map((con, i) => (
              <SwiperSlide
                className="h-[fit] w-full flex justify-center items-center"
                key={i}
              >
                <div
                  className="flex flex-col gap-3 w-full py-3 px-2 rounded-[8px] md:h-67 h-75 shadow-md bg-white items-center"
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
        </div>
        <button className="swiper-pagination-custom"></button>
      </div>
    </section>
  );
}
