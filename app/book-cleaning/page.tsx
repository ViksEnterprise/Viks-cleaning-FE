"use client";

import { useEffect, useState } from "react";
import DatePicker from "../component/Calender";
import Footer from "../component/Footer";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FormData, FormErrors } from "../data/form";
import { usePostcodeVerification } from "../composable/map&code_verification";
import {
  ACCESS,
  CLEANING_TYPE,
  IRONING,
  PARKING,
  PETS,
  TITLE,
} from "../component/ts/formBooking";
import { postToAPI } from "../service/api";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";

export default function BookService() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState<FormData>({
    postcode: "",
    title: "",
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    location: "",
    city: "",
    cleaning_type: "",
    pet: "",
    parking: "",
    ironing: "",
    access: "",
    hours: 0,
    date_time: "",
    price: 0,
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const price = 25;

  const { verifyPostcode, result, error, isLoading } =
    usePostcodeVerification();

  const steps = [
    { id: 1, title: "Cleaning Location and Email" },
    { id: 2, title: "Service Details" },
    { id: 3, title: "More Information" },
    { id: 4, title: "Cleaning hours" },
    { id: 5, title: "Calender and time" },
    { id: 6, title: "Personal Information" },
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setErrors((prev: any) => ({ ...prev, [name]: "" }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeChange = (e: any) => {
    setTime(e.target.value);
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({
      ...prev,
      phone_number: value,
    }));
    setErrors((prev) => ({
      ...prev,
      phone_number: undefined,
    }));
  };

  const stepFields = (): Record<number, (keyof FormData)[]> => ({
    1: ["postcode", "email", "location", "city"],
    2: ["cleaning_type", "pet"],
    3: ["parking", "ironing", "access"],
    4: ["hours"],
    5: ["date_time"],
    6: ["title", "full_name", "address", "phone_number"],
  });

  const validateStep = (step: number) => {
    const stepField = stepFields();
    const fields = stepField[step] || [];

    return fields.every((field) => {
      const value = formData[field];

      if (typeof value === "string") return value.trim() !== "";
      if (typeof value === "number") return value > 0;

      return !!value;
    });
  };

  const isFormInvalid = !validateStep(currentStep) || !!error;

  const previouStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const nextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleAddressSubmit(e);
    }
  };

  const decreaseHours = () => {
    if (count > 2) {
      setCount((prev) => prev - 1);
    } else {
      return;
    }
  };

  const increaseHours = () => {
    if (count < 30) {
      setCount((prev) => prev + 1);
    } else {
      return;
    }
  };

  const handleAddressSubmit = async (e?: any) => {
    if (e) e.preventDefault();
    const err: FormErrors = {};
    // const alpha = /[a-z, A-Z]/g;
    const symbol = /[!@#$%-+=_^&*()'><]/;
    const number = /[0-9]/;

    if (!formData.full_name) {
      err.full_name = "Name field required";
    } else if (
      symbol.test(formData.full_name) ||
      number.test(formData.full_name)
    ) {
      err.full_name = "No digit and symbols allowed";
    } else if (!formData.phone_number) {
      err.phone_number = "Field required";
    } else if (
      formData.phone_number &&
      !isValidPhoneNumber(formData.phone_number)
    ) {
      err.phone_number = "Invalid phone number";
    } else {
      const url = "booking";

      setLoading(true);

      try {
        const response = await postToAPI(formData, url);
        if (response) {
          const data = response.data
          localStorage.setItem('user_data', data.token)
          localStorage.setItem("reference", data.sessions);
          window.location.href = `${data.payment_url}`
        }
      } catch (err) {
        console.log(err);
        return;
      } finally {
        setLoading(false);
      }
      return;
    }

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
  };

  useEffect(() => {
    if (currentStep >= 4 || formData.hours) {
      setCount(formData.hours ? formData.hours : 2)
    } else {
      setCount(0);
    }
  }, [currentStep >= 4]);

  useEffect(() => {
    setTotal(price * count);
    setFormData((prev) => ({
      ...prev,
      hours: count,
      price: price * count,
    }));
  }, [count]);

  useEffect(() => {
    if (!formData.postcode) return;

    const timeout = setTimeout(() => {
      verifyPostcode(formData.postcode.trim().toUpperCase());
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData.postcode]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      location: result.admin_district,
      city: result.country
    }));
  }, [result]);

  useEffect(() => {
    if (!date || !time) return;

    const dateTimeString = `${date}T${time}`;
    const parsedDate = new Date(dateTimeString);

    if (isNaN(parsedDate.getTime())) return;

    const newDate = parsedDate.toISOString();

    setFormData((prev) => ({
      ...prev,
      date_time: newDate,
    }));
  }, [date, time]);

  return (
    <div className="h-full bg-slate-100">
      <div className="h-46 flex items-end">
        <div className="h-fit w-full text-white flex md:flex-row flex-col text-center justify-center items-center text-xl font-medium uppercase bg-[#00008B] p-8 relative">
          <span className="p-0 mt-0">Book our cleaning service</span>
        </div>
      </div>
      <div className="flex md:flex-row flex-col p-5 items-start justify-center w-full gap-5">
        <div className="flex flex-col items-center justify-center bg-white shadow shadow-lg h-fit border border-gray-100 rounded-xl xl:w-2xl lg:w-xl md:w-lg sm:w-sm w-full">
          <div className={`w-full h-fit grid-cols-6 grid gap-4 p-3`}>
            {steps.map((i) => (
              <div
                className={
                  i.id < currentStep
                    ? "h-2 rounded-sm bg-[#00C950] w-full"
                    : i.id === currentStep
                      ? "h-2 rounded-sm bg-[#00008B] w-full"
                      : "h-2 rounded-sm bg-slate-200 w-full"
                }
                key={i.id}
              ></div>
            ))}
          </div>
          <form
            className="w-full h-full p-3 text-[#6E7191] font-semibold flex flex-col gap-5"
            onSubmit={nextStep}
          >
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
                    value={formData.postcode}
                    name="postcode"
                    onChange={(e) => handleChange(e)}
                  />
                  <span className="text-xs text-[#FF0000!important]">
                    {error}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                  />
                </div>
              </div>
            ) : currentStep == 2 ? (
              <div className="grid items-start space-y-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="service">Cleaning type</label>
                  <select
                    name="cleaning_type"
                    value={formData.cleaning_type}
                    onChange={(e) => handleChange(e)}
                    className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                  >
                    <option value="choose">Choose</option>
                    {CLEANING_TYPE.map((val, i) => (
                      <option value={val} key={i}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="pets">Do you have pet?</label>
                  <div className="flex gap-5 items-center">
                    {PETS.map((val, i) => (
                      <div
                        className="flex gap-1 items-center text-black capitalize"
                        key={i}
                      >
                        <input
                          value={val.label}
                          checked={formData.pet === val.label}
                          onChange={(e) => handleChange(e)}
                          type="radio"
                          name="pet"
                        />{" "}
                        {val.key}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : currentStep == 3 ? (
              <div className="grid items-start space-y-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="parking">Is parking available?</label>
                  <div className="flex gap-5 items-center text-sm">
                    {PARKING.map((val, i) => (
                      <div
                        className="flex gap-1 items-center text-black"
                        key={i}
                      >
                        <input
                          value={val.label}
                          checked={formData.parking === val.label}
                          onChange={(e) => handleChange(e)}
                          type="radio"
                          name="parking"
                        />{" "}
                        {val.key}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="iron">Do you need ironing?</label>
                  <div className="flex gap-5 items-center text-sm">
                    {IRONING.map((val, i) => (
                      <div
                        className="flex gap-1 items-center text-black capitalize"
                        key={i}
                      >
                        <input
                          value={val.label}
                          checked={formData.ironing === val.label}
                          onChange={(e) => handleChange(e)}
                          type="radio"
                          name="ironing"
                        />{" "}
                        {val.key}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="iron">How will the building be access?</label>
                  <div className="flex gap-5 items-center text-sm">
                    {ACCESS.map((val, i) => (
                      <div
                        className="flex gap-1 items-center text-black capitalize"
                        key={i}
                      >
                        <input
                          value={val}
                          checked={formData.access === val}
                          onChange={(e) => handleChange(e)}
                          type="radio"
                          name="access"
                        />{" "}
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : currentStep == 4 ? (
              <div className="grid items-start space-y-5">
                <div className="flex justify-between items-center gap-1 px-3 text-black font-normal py-2">
                  <label htmlFor="service">Number of hours</label>
                  <div className="flex gap-2 items-center text-xs font-bold">
                    <button
                      type="button"
                      disabled={formData.hours <= 2}
                      onClick={() => decreaseHours()}
                      className="p-1 bg-[#FF0000] text-white rounded-sm disabled:bg-[#FF0000]/40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <BiMinus size={13} />
                    </button>
                    <span>{count}</span>
                    <button
                      type="button"
                      onClick={() => increaseHours()}
                      className="p-1 bg-[#00008B] text-white rounded-sm cursor-pointer"
                    >
                      <BiPlus size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ) : currentStep == 5 ? (
              <div className="grid items-start space-y-5">
                <DatePicker
                  value={date}
                  onChange={(date: string) => setDate(date)}
                />
                <div className="flex flex-col gap-1 px-4">
                  <label htmlFor="service">Select Time</label>
                  <input
                    className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                    type="time"
                    name="time"
                    value={time}
                    onChange={handleTimeChange}
                  />
                </div>
                <div className="flex flex-col gap-1 px-4">
                  <label htmlFor="parking">Additional notes</label>
                  <textarea
                    className="resize-none h-32 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                    name="notes"
                    value={formData.notes}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
              </div>
            ) : (
              <div className="grid items-start space-y-5">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="title">Title</label>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={(e) => handleChange(e)}
                      className="h-12 capitalize p-2 w-24 rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                    >
                      <option value="choose">Choose</option>
                      {TITLE.map((val, i) => (
                        <option key={i} value={val}>
                          {val}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="full name">Full Name</label>
                    <input
                      className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="address">Address</label>
                  <input
                    className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="phone number">Phone number</label>
                  <PhoneInput
                    className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black font-normal"
                    placeholder="Phone number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handlePhoneChange}
                    defaultCountry={`GB`}
                  />
                  <p className="text-xs font-semibold text-red-500 m-0">
                    {errors.phone_number}
                  </p>
                </div>
              </div>
            )}
            <div className="w-full flex md:flex-row flex-col gap-3 justify-between md:items-center items-start">
              <button
                onClick={() => previouStep()}
                type="button"
                disabled={currentStep == 1}
                className="border border-[#00008B] text-[#00008B] rounded-lg h-12 md:w-2xs w-full font-normal cursor-pointer disabled:cursor-normal disabled:border-blue-200 disabled:text-blue-200"
              >
                Back
              </button>
              <button
                onClick={() => nextStep()}
                disabled={isFormInvalid || loading}
                type="button"
                className="bg-[#00008B] text-white rounded-lg h-12 md:w-2xs w-full font-normal cursor-pointer disabled:bg-[#00008B]/50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <div className="h-8 w-8 rounded-full border-r border-white border-b-transparent border-l border-t border-t-4 border-b-4 border-l-4 border-r-4 animate-spin"></div>
                ) : (
                  <span>
                    {currentStep === steps.length ? "Submit" : "Next"}
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="xl:w-lg lg:w-xs md:w-2xs w-full h-fit grid items-start space-y-5">
          <div className="w-full h-fit p-3 bg-white shadow shadow-lg border border-gray-100 rounded-xl">
            <div className="flex items-start flex-col gap-4 justify-between">
              <h5 className="text-lg uppercase font-bold text-[#00008B]">
                price
              </h5>
              <span className="text-base capitalize font-bold">
                £ {price} per hour
              </span>
            </div>
          </div>
          <div className="w-full h-fit p-3 bg-white shadow shadow-lg border border-gray-100 rounded-xl grid items-start space-y-5">
            <h2 className="text-xl uppercase font-bold text-[#00008B]">
              Booking summary
            </h2>
            <div className="flex flex-col gap-5">
              {formData.postcode && (
                <span className="text-sm capitalize font-bold">
                  Post code:{" "}
                  <span className="text-xs uppercase font-normal">
                    {formData.postcode}
                  </span>
                </span>
              )}
              {result && !error && (
                <span className="text-sm capitalize font-bold">
                  Location and city:{" "}
                  <span className="text-xs font-normal">
                    {result.admin_district}, {result.country}
                  </span>
                </span>
              )}
              {formData.email && (
                <span className="text-sm font-bold">
                  Email:{" "}
                  <span className="text-xs font-normal normal-case">
                    {formData.email}
                  </span>
                </span>
              )}
              {formData.cleaning_type && (
                <span className="text-sm font-bold">
                  Cleaning Type:{" "}
                  <span className="text-xs font-normal normal-case">
                    {formData.cleaning_type}
                  </span>
                </span>
              )}
              {formData.pet && (
                <span className="text-sm font-bold">
                  Pet Information:{" "}
                  <span className="text-xs font-normal normal-case">
                    {formData.pet}
                  </span>
                </span>
              )}
              {formData.parking && (
                <span className="text-sm font-bold">
                  Parking:{" "}
                  <span className="text-xs font-normal">
                    {formData.parking}
                  </span>
                </span>
              )}
              {formData.ironing && (
                <span className="text-sm font-bold">
                  Ironing:{" "}
                  <span className="text-xs font-normal">
                    {formData.ironing}
                  </span>
                </span>
              )}
              {formData.access && (
                <span className="text-sm font-bold">
                  Access:{" "}
                  <span className="text-xs font-normal">{formData.access}</span>
                </span>
              )}
              {formData.hours !== 0 && (
                <span className="text-sm capitalize font-bold">
                  Hours:{" "}
                  <span className="text-xs font-normal">
                    {formData.hours} hours
                  </span>
                </span>
              )}
              {formData.date_time && (
                <span className="text-sm font-bold">
                  Schedule Date:{" "}
                  <span className="text-xs font-normal">
                    {date} by {time}
                  </span>
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-base uppercase font-bold text-[#00008B]">
                Total price
              </h5>
              <span className="text-base uppercase font-bold text-[#00008B]">
                £ {total}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
