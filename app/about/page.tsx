import Image from "next/image";
import { BsShieldCheck } from "react-icons/bs";
import { VALUE } from "../component/values";

export default function About() {
  return (
    <div>
      <div className="flex w-full items-center justify-center h-screen">
        <div className="flex w-6xl items-center justify-between p-5">
          <div className="relative w-fit">
            <Image
              src="/img/about.jpg"
              alt=""
              className="h-120 w-lg rounded-br-[5em]"
              height={500}
              width={500}
            />
            <Image
              src="/img/viks-office.jpg"
              alt=""
              className="h-62 w-sm absolute -bottom-[4em] rounded-br-[3em]"
              height={500}
              width={500}
            />
          </div>
          <div className="grid gap-5 items-start w-xl">
            <h2 className="text-center text-[#00008B] text-4xl font-semibold uppercase">
              About
            </h2>
            <span className="text-base px-4 w-[98%]">
              At Viks Cleaning, we take pride in delivering premium cleaning
              services that consistently exceed expectations. With a deep
              passion for hygiene and an unwavering commitment to quality, our
              experienced professionals work diligently to ensure every space we
              touch is left spotless, fresh, and thoroughly sanitized.
            </span>
            <div className="flex flex-col px-4 gap-3 w-[90%]">
              <span className="text-base font-semibold">
                Trusted Cleaning Solutions with a Commitment to Care
              </span>
              <span className="text-base">
                We understand that every space deserves meticulous care, whether
                it’s a private residence, commercial facility, or transitional
                property. We specialize in delivering reliable, detail-oriented
                cleaning services tailored to meet the specific needs of each
                client. From deep surface treatments to specialized carpet care,
                our services are designed with precision, flexibility, and
                consistency at their core.
              </span>
              <span className="text-base">
                Our commitment extends beyond clean spaces. We prioritize your
                well-being and the environment by using non-toxic, eco-conscious
                products and sustainable cleaning methods ensuring a safer,
                healthier home for you, your family, and your pets.
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-[#E7E7E7]" />
      <div className="flex w-full items-center justify-center h-screen bg-[#4942ea] text-white">
        <div className="flex w-6xl p-5">
          <div className="grid justify-between space-y-8 h-full items-start w-full">
            <h2 className="text-center text-3xl font-semibold uppercase mb-5">
              Our values
            </h2>
            <div className="grid grid-cols-3 mt-5 pt-5 gap-5">
              {VALUE.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    className="h-54 rounded-lg flex flex-col gap-4 border-white border px-5 justify-center mt-5"
                    key={i}
                  >
                    <div className="h-7 w-7 rounded-full bg-[#FF0000] relative flex items-start justify-end">
                      <Icon className="absolute -end-2" size={22} />
                    </div>
                    <h6 className="text-3xl">{val.name}</h6>
                    <span className="text-sm">{val.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center h-72">
        <div className="flex w-6xl items-center justify-between p-5">
          <div className="flex flex-col gap-6 items-center w-full text-center">
            <h2 className="text-center text-[#00008B] text-4xl font-semibold">
              If you have any questions
            </h2>
            <span className="text-base font-medium">
              Feel free to contact us by clicking on the button
            </span>
            <a href="/contact" className="bg-[#0C06AC] text-sm h-11 flex items-center justify-center w-42 cursor-pointer rounded-lg text-white p-3 px-4 m-0">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
