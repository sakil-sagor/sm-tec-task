import React from "react";

const OfferCard = ({ data }) => {
  return (
    <div className="p-3 w-full rounded-lg shadow-2xl ">
      <div className="flex">
        <div>
          <img className="w-full" src={data?.img} alt="" />
        </div>
        <div className="my-4">
          <p className="text-black font-semibold">{data?.sub}</p>
          <p className="text-black font-semibold">{data?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
