import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { auth1, auth2, auth3 } from "../../assets";

const Testimonials = () => {
  return (
    <div className="container  mx-auto px-2 ">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-2 flex relative">
          <img className="w-full  opacity-30 " src={auth1} alt="" />
          <button className=" absolute left-1/2 top-1/2">
            <FaArrowLeft className="text-white text-4xl" />
          </button>
        </div>
        <div className="md:col-span-8 flex items-center gap-x-4 bg-white rounded-2xl">
          <div className="h-full mr-6">
            <img className="w-full  h-full" src={auth2} alt="" />
          </div>
          <div className="">
            <p>
              "Unforgettable journeys with John and Sarah! Their travel <br />
              expertise turned our dreams into reality. Can't wait to explore
              with them again!"
            </p>
            <br />
            <div>
              <h4 className="text-2xl">Emily</h4>
              <p className="text-sm">Adventure Enthusiast</p>
              <div className="flex gap-1">
                <FaStar className="text-[#FFB700]" />
                <FaStar className="text-[#FFB700]" />
                <FaStar className="text-[#FFB700]" />
                <FaStar className="text-[#FFB700]" />
              </div>
            </div>
            <p className="text-9xl font-bold "></p>
          </div>
        </div>
        <div className="md:col-span-2 flex  relative">
          <img className="w-full   opacity-30" src={auth3} alt="" />
          <button className=" absolute left-1/2 top-1/2">
            <FaArrowRight className="text-white text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
