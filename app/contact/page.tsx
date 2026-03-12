import { BiGlobe, BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";

export default function Contact() {
  return (
    <div>
      <div className="bg-[url('/img/contact.jpg')] w-full lg:h-screen sm:h-135 h-svh bg-no-repeat bg-cover bg-center relative before:bg-black/55 before:h-full before:w-full before:absolute before:z-1 text-white flex items-center justify-center">
        <h2 className="relative z-2 text-5xl font-semibold uppercase">
          Contact us
        </h2>
      </div>
      <div className="flex items-center justify-center w-full py-5">
        <div className="p-5 w-6xl flex md:flex-row flex-col-reverse items-center gap-4 h-fit justify-between">
          <form
            method="post"
            className="md:w-lg w-full p-4 rounded-lg grid items-start gap-3 shadow border-[#E7E7E7] border shadow-[#00000040]"
          >
            <div className="flex flex-col gap-2 items-start">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="h-11 rounded-lg w-full border-[#000000] border"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="h-11 rounded-lg w-full border-[#000000] border"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label className="text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className="resize-none h-48 rounded-lg w-full border-[#000000] border"
              ></textarea>
            </div>
            <button className="bg-[#0C06AC] text-sm h-10 flex items-center justify-center w-full cursor-pointer rounded-lg text-white p-3 px-4 m-0">
              Send message
            </button>
          </form>
          <div className="md:h-118 h-1 flex relative bg-black before:content-[' '] before:absolute before:bg-black before:h-full md:before:w-[0.5px] before:w-full before:z-1 before:flex"></div>
          <div className="md:w-sm w-full flex flex-col gap-6">
            <div className="grid items-start gap-2 mb-4">
              <h5 className="text-4xl capitalize">Get in touch</h5>
              <span className="text-sm font-[500]">
                We would love to hear from you
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center text-xs gap-[2px]">
                <SlLocationPin />
                <span>15 Adejope Street, UK</span>
              </div>
              <a
                href="tel:082694235585"
                className="flex items-center text-xs gap-[2px]"
              >
                <BiPhone />
                <span>082694235585</span>
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="mailto:vikscleaningservices@gmail.com"
                className="flex items-center text-xs gap-[2px]"
              >
                <CgMail size={18} />
                <span>vikscleaningservices@gmail.com</span>
              </a>
              <a
                href="https://www.vikscleaning.co.uk"
                className="flex items-center text-xs gap-[2px]"
              >
                <BiGlobe size={18} />
                <span>www.vikscleaning.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
