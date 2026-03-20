"use client";

import { BiGlobe, BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import { motion } from "motion/react";
import Footer from "../component/Footer";
import { ContactFormData, ContactFormErrors } from "../data/form";
import { useState } from "react";
import { postToAPI } from "../service/api";
import ModelPopUP from "../component/Model";

export default function Contact() {
  const [error, setError] = useState<ContactFormErrors>({});
  const [modelDisplay, setModelDisplay] = useState<boolean>(false);
  const [modelType, setModelType] = useState<string>("");
  const [modelResponse, setModelResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactFormData>({
    full_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setError((prev: any) => ({ ...prev, [name]: "" }));

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errors: ContactFormErrors = {};
    const symbols = /[!#$%^&*()]/;
    const symbol = /[@!#$%^&*()]/;
    const digits = /[0-9]/;
    const startWithDigit = /^\d/;

    if (!form.full_name) {
      errors.full_name = "Name required";
    } else if (symbol.test(form.full_name) || digits.test(form.full_name)) {
      errors.full_name = "Invalid name: must not contain digit or symbols";
    } else if (!form.email) {
      errors.email = "Email required";
    } else if (symbols.test(form.email)) {
      errors.email = "Invalid email: must not contain symbols except @";
    } else if (!form.message) {
      errors.message = "Message required";
    } else if (symbol.test(form.message)) {
      errors.message = "Invalid message: must not contain symbols";
    } else if (startWithDigit.test(form.message)) {
      errors.message = "Message must not start with digits";
    } else {
      const url = "forms";
      setLoading(true);
      try {
        const detail = await postToAPI(form, url);
        if (detail) {
          setModelDisplay(true);
          setModelResponse(detail.data.message);
          setModelType("success");
          window.location.reload();
          document.body.style.overflow = "hidden";
        }
      } catch (err: any) {
        if (err) {
          if (err.message == "Network Error") {
            setModelDisplay(true);
            setModelResponse(err.message);
            setModelType("error");
            document.body.style.overflow = "hidden";
          }

          if (err.response.data.email) {
            setModelDisplay(true);
            setModelResponse(`${err.response.data.email[0]}`);
            setModelType("error");
            document.body.style.overflow = "hidden";
          }
          console.log(err);
        }
      } finally {
        setLoading(false);
      }
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
  };

  const closeModal = () => {
    setModelDisplay(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div>
        <div className="bg-[url('/img/contact.jpg')] w-full lg:h-screen sm:h-160 h-svh bg-no-repeat bg-cover bg-center relative before:bg-black/55 before:h-full before:w-full before:absolute before:z-1 text-white flex items-center justify-center overflow-hidden">
          <motion.h2
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2 }}
            variants={{
              hidden: { x: -150, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            <h2 className="relative z-2 text-5xl font-semibold uppercase">
              Contact us
            </h2>
          </motion.h2>
        </div>
        <div className="flex items-center justify-center w-full py-5">
          <div className="p-5 w-6xl flex md:flex-row flex-col-reverse items-center gap-4 sm:h-160 h-fit justify-between">
            <form
              onSubmit={handleSubmit}
              className="md:w-lg w-full p-4 rounded-lg grid items-start gap-3 shadow border-[#E7E7E7] border shadow-[#00000040]"
            >
              <div className="flex flex-col gap-2 items-start">
                <label className="text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  name="full_name"
                  type="text"
                  value={form.full_name}
                  onChange={(e) => handleChange(e)}
                  className="h-11 rounded-lg w-full border-[#000000] border p-2 outline-transparent"
                />
                <p className="text-xs text-red-500">{error.full_name}</p>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange(e)}
                  className="h-11 rounded-lg w-full border-[#000000] border p-2 outline-transparent"
                />
                <p className="text-xs text-red-500">{error.email}</p>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <label className="text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => handleChange(e)}
                  className="resize-none h-48 rounded-lg w-full border-[#000000] border"
                ></textarea>
                <p className="text-xs text-red-500">{error.message}</p>
              </div>
              <button
                disabled={loading}
                className="bg-[#0C06AC] text-sm h-12 flex items-center justify-center w-full cursor-pointer rounded-lg text-white p-3 px-4 m-0"
              >
                {loading ? (
                  <span className="h-10 w-10 rounded-full border-white border-l border-t border-e border-b-transparent border-l-3 border-t-3 border-e-3 border-b-3 border-solid animate-spin"></span>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
            <div className="sm:h-115 h-1 flex relative bg-black before:content-[' '] before:absolute before:bg-black before:h-full md:before:w-[0.5px] before:w-full before:z-1 before:flex"></div>
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
                  href="tel:+447823972770"
                  className="flex items-center text-xs gap-[2px]"
                >
                  <BiPhone />
                  <span>+44 7823972770</span>
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
        <Footer />
      </div>
      <ModelPopUP
        display={modelDisplay}
        type={modelType}
        res={modelResponse}
        onClose={closeModal}
      />
    </>
  );
}
