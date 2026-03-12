import Image from "next/image";
import { SERVICES } from "../component/services";

export default function OurServices() {
  return (
    <div>
      <div className="bg-[url('/img/service.jpg')] w-full h-115 bg-no-repeat bg-cover bg-center relative before:bg-black/60 before:h-full before:w-full before:absolute before:z-1 text-white flex items-center justify-center">
        <h2 className="relative z-2 text-5xl font-semibold uppercase">
          Our services
        </h2>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-6xl items-center justify-between p-5">
          <div className="flex flex-col gap-6 items-start w-full">
            <span className="text-lg font-medium leading-[150%]">
              At Viks Cleaning Services, we offer a large range of different
              cleaning services ranging from commercial, residential and others
              listed below. Here are the services we offer.
            </span>
            <div className="grid md:grid-cols-2 grid-cols gap-5 mt-4">
              {SERVICES.map((val, i) => (
                <div className="flex relative overflow-hidden before:absolute before:w-full before:h-full before:bg-black/20 rounded-lg cursor-pointer" key={i}>
                  <Image
                    src={val.img}
                    className="h-82 rounded-lg border-gray-200 border"
                    alt=""
                    height={500}
                    width={500}
                  />
                  <div className="h-12 flex items-center absolute end-0 w-fit p-3 bg-[#00008B] top-4 text-white capitalize">
                    {val.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <a
                href="/"
                className="bg-[#0C06AC] text-sm h-11 flex items-center justify-center w-54 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
              >
                Book our services now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
