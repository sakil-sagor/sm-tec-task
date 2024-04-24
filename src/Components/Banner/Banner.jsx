import { FaCircle, FaRegCircle, FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-back">
      <div className="container mx-auto px-2 py-32">
        <div className="">
          <p className="font-bold text-5xl text-white mb-6">
            Welcome to <span className="text-blue-500">AirBook</span>
          </p>
        </div>
        <div className="bg-white p-12 rounded-lg">
          <div className="flex  justify-between mb-6">
            <div className="flex gap-3">
              <div className="flex justify-center items-center gap-2 bg-gray-300 p-2 rounded">
                <FaRegCircle className="text-sm" />
                <p>One Way</p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-blue-500 p-2 rounded">
                <FaCircle className="text-sm text-white border rounded-full" />
                <p>Round Trip</p>
              </div>
            </div>
            <div>
              <button>Traveller </button>
              <button>Economy </button>
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-cols-5 justify-between">
            <div className="flex justify-center items-center border p-2 gap-3 ">
              <p className="border-r pr-2">DAC</p>
              <div>
                <p>Dhaka</p>
                <p>Hazrat Shahjalal Internatio</p>
              </div>
            </div>
            <div className="flex justify-center items-center border p-2 gap-3">
              <p>COX</p>
              <div>
                <p>Coxbazar</p>
                <p>Cox’s Bazar international</p>
              </div>
            </div>
            <div className="flex justify-center items-center border p-2 gap-3">
              <p>03</p>
              <div>
                <p>Octaber</p>
                <p>tuesday, 2023</p>
              </div>
            </div>
            <div className="flex justify-center items-center border p-2 gap-3">
              <p>05</p>
              <div>
                <p>Octaber</p>
                <p>tuesday, 2023</p>
              </div>
            </div>
            <div className="flex justify-center items-center border p-2 gap-3">
              <button className="bg-[#FFB700] p-4 rounded-md ">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
