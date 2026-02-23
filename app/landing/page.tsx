import Image from "next/image";
import { SERVICES } from "../component/services";

export default function LandingPage() {
  return (
    <div className="w-full">
      <div className="bg-[#E5E8FF] w-full h-screen flex items-end justify-center gap-6">
        <div className="flex items-end gap-6 items-start justify-between w-6xl px-5">
          <div className="flex flex-col gap-5 w-lg justify-center h-full">
            <div className="bg-[#0C06AC] text-xs h-10 flex items-center justify-center w-fit rounded-3xl text-white p-3 px-4 m-0">
              Professional Cleaning Service Company
            </div>
            <h2 className="m-0 text-4xl font-[300] leading-[155%] p-0">
              Exceptional Cleaning Services for{" "}
              <span className="text-[#00008B]">Homes</span> and{" "}
              <span className="text-[#00008B]">Workspaces</span>
            </h2>
            <span className="text-base m-0 p-0 leading-[145%]">
              We take pride in our attention to detail and providing maximum
              customer satisfaction.
            </span>
            <a className="bg-[#0C06AC] text-sm h-10 flex items-center justify-center w-38 cursor-pointer rounded-lg text-white p-3 px-4 m-0">
              Book our service
            </a>
          </div>
          <div className="w-fit">
            <Image
              className="h-120 w-full"
              src="/img/hero.png"
              alt=""
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-4 items-center">
        <div className="grid gap-6 items-start p-5 w-6xl">
          <div className="flex justify-between items-start w-full">
            <div className="grid space-y-2 itms-start w-2xs">
              <h3 className="text-sm uppercase font-medium">About us</h3>
              <span className="m-0 text-2xl leading-[155%]">
                <span className="text-[#00008B]">Your top choice</span> for
                cleaning service
              </span>
            </div>
            <div className="w-xl flex items-end justify-end h-34">
              <span className="text-sm leading-[145%]">
                At Viks Cleaning, we understand that a clean space is essential
                to health, productivity, and peace of mind. Backed by trained
                professionals and industry-grade equipment, we offer tailored
                cleaning solutions for homes, offices, and commercial spaces.
                Our commitment to excellence, punctuality, and client
                satisfaction has earned us the trust of households and
                businesses alike.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 items-end mt-5">
            <Image
              className="h-92 w-full rounded-lg"
              src="/img/viks-clean.jpg"
              alt=""
              width={500}
              height={400}
            />
            <Image
              className="h-72 w-full rounded-lg"
              src="/img/viks-office.jpg"
              alt=""
              width={500}
              height={400}
            />
            <Image
              className="h-92 w-full rounded-lg"
              src="/img/viks-home.jpg"
              alt=""
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      <hr className="text-[#E7E7E7]" />
      <div className="h-screen flex flex-col gap-4 items-center">
        <div className="grid gap-6 items-start p-5 w-6xl">
          <div className="flex justify-between items-center w-full">
            <div className="grid space-y-2 itms-start w-xs">
              <h3 className="text-sm uppercase font-medium">Our services</h3>
              <span className="m-0 text-2xl leading-[155%]">
                Explore our
                <span className="text-[#00008B]"> cleaning services</span>
              </span>
            </div>
            <a className="bg-[#0C06AC] text-sm h-10 flex items-center justify-center w-42 cursor-pointer rounded-lg text-white p-3 px-4 m-0">
              View all our services
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 items-end mt-5">
            {SERVICES.slice(0, 3).map((val, i) => (
              <div
                className="shadow-[#00000040] h-88 shadow border-[#E7E7E7] border p-5 rounded-lg flex items-start justify-between flex-col gap-5 cursor-pointer"
                key={i}
              >
                <span className="text-2xl">{val.title}</span>
                <Image
                  className="h-56 w-full rounded-lg"
                  src={val.img}
                  alt=""
                  width={500}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-4 items-center">
        <div className="grid gap-6 items-start p-5 py-7 w-6xl bg-[#00000033] h-full rounded-2xl">
          <div className="flex justify-between items-center w-full mt-5">
            <div className="grid gap-5 itms-start w-lg">
              <h2 className="text-xl font-medium">
                Our Commitment to Excellence Experiences
              </h2>
              <span className="m-0 text-sm leading-[155%]">
                At Viks Cleaning Services, we’re not just about cleaning homes,
                we’re about making a difference in the lives of our clients and
                our community. Explore our core mission and vision that drives
                us every day. We offer customized cleaning packages and use
                eco-friendly cleaning products.
              </span>
              <a className="bg-[#0C06AC] text-xs h-10 flex items-center justify-center w-38 cursor-pointer rounded-lg text-white p-3 px-4 m-0">
                Request service
              </a>
            </div>
            <div className="flex w-xl flex-col items-start relative">
              <div className="w-full">
                <Image
                  src="/img/viks-clean.jpeg"
                  className="rounded-2xl"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full flex gap-3 absolute -start-7 bottom-0">
                <Image
                  src="/img/viks-clean.jpg"
                  className="rounded-2xl w-68 -rotate-[20deg] -start-[3em] -bottom-[6em] relative"
                  alt=""
                  width={500}
                  height={500}
                />
                <Image
                  src="/img/viks-office.jpg"
                  className="rounded-2xl w-68 rotate-[20deg] -end-[2em] -bottom-[6em] relative"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
