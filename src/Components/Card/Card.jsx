import React from "react";

const Card = ({ data }) => {
  return (
    <div className="p-3 w-full rounded-lg shadow-2xl">
      <div>
        <div>
          <img className="w-full" src={data?.img} alt="" />
        </div>
        <div className="my-4">
          <p className="text-black font-semibold">{data?.title}</p>
        </div>
        <div className="flex items-center justify-center ">
          <button className=" px-3 py-1 text-black rounded-md bg-[#FFB700]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
