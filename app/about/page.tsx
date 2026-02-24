import Image from "next/image";

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
            <div className="flex flex-col px-4">
              <span className="text-base font-semibold">
                Trusted Cleaning Solutions with a Commitment to Care
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
