"use client";

import { useEffect, useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { postToAPI } from "../service/api";

export default function PaymentVerification() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  let ref = localStorage.getItem("reference");
  let tok = localStorage.getItem("user_data");

  const setRedirect: any = setTimeout(() => {
    localStorage.removeItem("reference");
    localStorage.removeItem("user_data");

    window.location.href = "/";
  }, 4000);

  const handleVerify = async () => {
    const url = "verify-reg";
    setLoading(true);

    const payload = {
      session_id: ref,
      token: tok,
    };
    try {
      const res = await postToAPI(payload, url);
      if (res) {
        setResponse(res.data.message);
        setRedirect();
      }
    } catch (err: any) {
      if (err) {
        setResponse(err.data.error);
        setRedirect();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    handleVerify();

    if (!ref && !tok) {
      window.location.href = "/";
    }

    return () => clearTimeout(setRedirect);
  }, []);

  if (!mounted) {
    return;
  }

  return (
    <div>
      <div className="mt-7 py-3 h-[90svh] w-full flex items-center justify-center">
        {loading && !response ? (
          <div className="flex flex-col gap-3 items-center text-center justify-center">
            <span className="h-25 w-25 rounded-full border-purple-800 border-l border-t border-e border-b-transparent border-l-5 border-t-5 border-e-5 border-b-5 border-solid animate-spin"></span>
            <span className="text-gray-600 font-medium text-lg">
              Please do not close or leave this page while we verify your
              registration
            </span>
          </div>
        ) : (
          <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
            <div
              className={
                response == "Payment successful. Please check your email"
                  ? "w-fit h-fit p-4 rounded-full items-center flex justify-center bg-green-500 text-white"
                  : "w-fit h-fit p-4 rounded-full items-center flex justify-center bg-red-500 text-white"
              }
            >
              {response == "Payment successful. Please check your email" ? (
                <BiCheck size={120} />
              ) : (
                <BiX size={120} />
              )}
            </div>
            <div className="text-lg font-[500] text-center capitalize">
              <span className="font-bold m-0 inline-flex items-center justify-center w-fit gap-1">
                {response}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
