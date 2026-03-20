import Footer from "../component/Footer";

export default function BookService() {
  return (
    <div className="h-full bg-slate-100">
      <div className="h-46 flex items-end">
        <div className="h-fit w-full text-white flex md:flex-row flex-col text-center justify-center items-center text-xl font-medium uppercase bg-[#00008B] p-8 relative">
          <span className="p-0 mt-0">Book our cleaning service</span>
        </div>
      </div>
      <div className="flex p-5 items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center bg-white shadow shadow-lg h-fit border border-gray-100 rounded-xl xl:w-2xl lg:w-xl md:w-lg sm:w-sm w-full">
          <div className="w-full h-fit grid-cols-4 grid p-3">
            <div className="h-2 rounded-sm bg-slate-200 w-full"></div>
          </div>
          <form className="w-full h-full p-3 text-[#6E7191] font-semibold flex flex-col gap-5">
            <div className="grid items-start space-y-4 hidden">
              <div className="flex flex-col gap-2">
                <label htmlFor="post_code">Post code</label>
                <input
                  type="text"
                  className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black"
                />
              </div>
            </div>
            <div className="grid items-start space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="service">Service type</label>
                <select className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black">
                  <option value="">Choose</option>
                  <option value="">Residential cleaning</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="h-12 p-2 w-full rounded-lg border border-[#0000000F] bg-[#F0F2F5] outline-transparent text-black"
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-3 justify-between md:items-center items-start">
              <button className="border border-[#00008B] text-[#00008B] rounded-lg h-12 md:w-2xs w-full font-normal">
                Back
              </button>
              <button className="bg-[#00008B] text-white rounded-lg h-12 md:w-2xs w-full font-normal">
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
