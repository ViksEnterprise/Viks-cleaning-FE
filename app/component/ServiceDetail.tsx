import Image from "next/image";
import React from "react";
import { FaX } from "react-icons/fa6";
import { SERVICES } from "./ts/services";

interface ServiceDetailProps {
  id: String;
  isOpen: Boolean;
  close: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ isOpen, close, id }) => {
  const detail = SERVICES.find((i) => i.title === id);

  if (!isOpen) {
    return;
  }
  return (
    <div className="fixed z-6 bg-black/45 w-full start-0 top-0 h-full bottom-0 flex items-center justify-center p-3">
      <div className="w-2xl bg-white rounded-2xl h-fit p-4 flex flex-col gap-4 relative">
        <FaX
          onClick={close}
          className="absolute top-3 end-3 cursor-pointer"
          size={17}
        />
        <h2 className="text-center text-2xl font-bold capitalize m-0 p-0">
          {detail?.title}
        </h2>
        <Image
          src={`${detail?.img}`}
          className="lg:h-84 sm:h-72 h-68 rounded-lg border-gray-200 border w-full m-0"
          alt=""
          height={500}
          width={500}
        />
        <p className="font-normal text-sm">{detail?.des}</p>
        <div className="w-full flex items-center justify-end">
          <a
            href="/book-cleaning"
            className="bg-[#0C06AC] text-sm h-11 flex items-center justify-center w-54 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetail;
