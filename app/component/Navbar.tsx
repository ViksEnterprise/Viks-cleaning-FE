"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NAVBAROUTE } from "./nav";

export default function NavBar() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 780 : false
  );
  const [openNav, setOpenNav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const checkWindowWIdth = () => {
    setMobile(window.innerWidth <= 765);
  };

  const openNavMenu = () => {
    setOpenNav(true);
    document.body.style.overflow = "hidden";
  };

  const closeNavMenu = () => {
    setOpenNav(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    setIsMounted(true);

    checkWindowWIdth();
    window.addEventListener("resize", checkWindowWIdth);

    return () => window.removeEventListener("resize", checkWindowWIdth);
  }, []);
  if (!isMounted) return null;

  return (
    <header className="fixed top-0 w-full z-3 md:px-7 px-3 flex items-center justify-center py-2 h-24 bg-white">
      {!mobile ? (
        <div className="flex justify-between items-center w-[90%] p-3 py-2">
          <div className="w-[fit] h-fit">
            <Image
              src="/img/logo-no-bg.jpeg"
              className="h-20"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="w-fit">
            <nav>
              <ul className="flex items-center gap-5">
                {NAVBAROUTE.map((item, i) => (
                  <li key={i}>
                    <a
                      className={`${
                        item.path !== "Book Now"
                          ? "font-[200]"
                          : "font-[200] h-11 rounded-[4px] text-white bg-[#00008B] p-2 w-40 flex items-center justify-center"
                      }`}
                      href={`${item.url}`}
                      onClick={closeNavMenu}
                    >
                      {item.path}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full p-2 py-2">
          <div className="w-[fit]">
            <Image
              src="/img/logo-no-bg.jpeg"
              className="h-20"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="w-[fit] h-[fit]">
            <div
              className="w-[fit] flex flex-col gap-1 items-center cursor-pointer"
              onClick={openNavMenu}
            >
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
            </div>
            {openNav ? (
              <nav className="absolute start-0 bottom-0 top-0 bg-gradient-to-r from-[#171717]/50 to-[#0a0a0a]/50 w-full h-svh flex flex-col items-end justify-end">
                <ul className="flex flex-col items-start gap-5 text-black w-[85%] bg-[#fff] h-[inherit] p-3">
                  <div className="flex w-full items-end justify-end">
                    <FaTimes
                      className="cursor-pointer"
                      size="20"
                      onClick={closeNavMenu}
                    />
                  </div>
                  {NAVBAROUTE.map((item, i) => (
                    <li key={i} className="w-full text-base font-medium">
                      <a
                        className={`${
                          item.path !== "Book Now"
                            ? "font-[200]"
                            : "flex items-center justify-center font-[200] h-11 rounded-[4px] text-white bg-[#00008B] p-2 w-40 flex items-center justify-centerll"
                        }`}
                        href={`${item.url}`}
                        onClick={closeNavMenu}
                      >
                        {item.path}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </header>
  );
}
