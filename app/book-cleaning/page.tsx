"use client";

import { useState } from "react";
import DatePicker from "../component/Calender";
import Footer from "../component/Footer";

export default function BookService() {
  const [formData, setFormData] = useState({
    date: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { id: 1, title: "Postcode Address and Email" },
    { id: 2, title: "Service Type" },
    { id: 3, title: "" },
    { id: 4, title: "Calender and time" },
  ];

  const previouStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="h-full bg-slate-100">
      <div className="h-46 flex items-end">
        <div className="h-fit w-full text-white flex md:flex-row flex-col text-center justify-center items-center text-xl font-medium uppercase bg-[#00008B] p-8 relative">
          <span className="p-0 mt-0">Book our cleaning service</span>
        </div>
      </div>
      <div className="flex p-5 items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center bg-white shadow shadow-lg h-fit border border-gray-100 rounded-xl xl:w-2xl lg:w-xl md:w-lg sm:w-sm w-full">
          <div className={`w-full h-fit grid-cols-6 grid gap-4 p-3`}>
            {steps.map((i) => (
              <div
                className={
                  i.id != currentStep
                    ? "h-2 rounded-sm bg-slate-200 w-full"
                    : i.id < currentStep
                      ? "h-2 rounded-sm bg-[#00C950] w-full"
                      : "h-2 rounded-sm bg-[#00008B] w-full"
                }
                key={i.id}
              ></div>
            ))}
          </div>
          <form className="w-full h-full p-3 text-[#6E7191] font-semibold flex flex-col gap-5">
            <span className="text-xl text-center text-black">
              {steps[currentStep - 1].title}
            </span>
            {currentStep == 1 ? (
              <div className="grid items-start space-y-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="post_code">Post code</label>
                  <input
                    type="text"
                    className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                  />
                </div>
              </div>
            ) : currentStep == 2 ? (
              <div className="grid items-start space-y-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="service">Cleaning type</label>
                  <select className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal">
                    <option value="">Choose</option>
                    <option value="">Residential cleaning</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="pets">Do you have pet?</label>
                  <div className="flex gap-5 items-center">
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> Yes
                    </div>
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> No
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="service">
                    How often do you need our service?
                  </label>
                  <select className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal">
                    <option value="">Choose</option>
                    <option value="">Residential cleaning</option>
                  </select>
                </div>
              </div>
            ) : currentStep == 3 ? (
              <div className="grid items-start space-y-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="service_day">Preferred cleaning day</label>
                  <select className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal">
                    <option value="">Choose</option>
                    <option value="">Residential cleaning</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="parking">Is parking available?</label>
                  <div className="flex gap-5 items-center text-sm">
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> Yes
                    </div>
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> Permit/meter parking
                    </div>
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> No
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="iron">Do you need ironing?</label>
                  <div className="flex gap-5 items-center text-sm">
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> Yes
                    </div>
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> No
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="iron">How will the building be access?</label>
                  <div className="flex gap-5 items-center text-sm">
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> I will provide keys
                    </div>
                    <div className="flex gap-1 items-center text-black">
                      <input type="radio" name="" /> I will let the cleaner in
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              currentStep == 4 && (
                <div className="grid items-start space-y-5">
                  <DatePicker
  value={formData.date}
  onChange={(date: string) =>
    setFormData((prev) => ({
      ...prev,
      date,
    }))
  }
/>
                  <div className="flex flex-col gap-1 px-4">
                    <label htmlFor="service">Select Time</label>
                    <select className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal">
                      <option value="">Choose</option>
                      <option value="">Residential cleaning</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1 px-4">
                    <label htmlFor="parking">Additional notes</label>
                    <textarea
                      className="resize-none h-32 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                      name=""
                    ></textarea>
                  </div>
                </div>
              )
            )}
            <div className="w-full flex md:flex-row flex-col gap-3 justify-between md:items-center items-start">
              <button
                onClick={() => previouStep()}
                type="button"
                className="border border-[#00008B] text-[#00008B] rounded-lg h-12 md:w-2xs w-full font-normal"
              >
                Back
              </button>
              <button
                onClick={() => nextStep()}
                type="button"
                className="bg-[#00008B] text-white rounded-lg h-12 md:w-2xs w-full font-normal"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
