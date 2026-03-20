import Footer from "../component/Footer";

export default function BookService() {
  return (
    <div className="h-full bg-slate-100">
      <div className="h-46 flex items-end">
        <div className="h-fit w-full text-white flex justify-center items-center text-xl font-medium uppercase bg-[#00008B] p-8 relative">
          <span className="p-0 mt-0">Book our cleaning service</span>
        </div>
      </div>
      <div className="flex p-5 text-center items-center justify-center w-full">
        <div className="flex flex-col text-center items-center justify-center bg-white shadow shadow-lg h-96 border border-gray-100 rounded-xl xl:w-2xl lg:w-xl md:w-lg sm:w-sm w-full">
          <form className="w-full h-full p-3">
            <div className="bg-slate-100 w-full h-5"></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
