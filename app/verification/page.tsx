"use client";

import { useEffect, useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { postToAPI } from "../service/api";

export default function PaymentVerification() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ref = localStorage.getItem("reference");
    const tok = localStorage.getItem("user_data");

    if (!ref || !tok) {
      window.location.href = "/";
      return;
    }

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
        }
      } catch (err: any) {
        setResponse(err?.data?.error || "Verification failed");
      } finally {
        setLoading(false);

        setTimeout(() => {
          localStorage.removeItem("reference");
          localStorage.removeItem("user_data");
          window.location.href = "/";
        }, 4000);
      }
    };

    handleVerify();
  }, []);

  return (
    <div className="mt-7 py-3 h-[90svh] w-full flex items-center justify-center">
      {loading && !response ? (
        <div className="flex flex-col gap-3 items-center text-center justify-center">
          <span className="h-25 w-25 rounded-full border-purple-800 border-l border-t border-e border-b-transparent border-[5px] animate-spin"></span>
          <span className="text-gray-600 font-medium text-lg">
            Please do not close or leave this page while we verify your registration
          </span>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
          <div
            className={
              response === "Payment successful. Please check your email"
                ? "p-4 rounded-full bg-green-500 text-white"
                : "p-4 rounded-full bg-red-500 text-white"
            }
          >
            {response === "Payment successful. Please check your email" ? (
              <BiCheck size={120} />
            ) : (
              <BiX size={120} />
            )}
          </div>

          <div className="text-lg font-[500] text-center capitalize">
            <span className="font-bold inline-flex items-center gap-1">
              {response}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
