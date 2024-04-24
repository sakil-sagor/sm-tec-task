import React from "react";

const OfferCard = ({ data }) => {
  return (
    <div className=" pr-3 w-full rounded-lg shadow-2xl ">
      <div className="flex items-center">
        <div className="mr-4">
          <img className="w-full h-full" src={data?.img} alt="" />
        </div>
        <div className="my-4 ">
          <p className="text-gray-700 font-semibold text-sm ">{data?.sub}</p>
          <p className="text-[#006CE4] font-semibold">{data?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
