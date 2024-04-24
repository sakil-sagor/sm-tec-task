import React from "react";

const TravelCard = ({ data }) => {
  return (
    <div className="p-3 w-full rounded-lg shadow-2xl">
      <div>
        <div>
          <img className="w-full" src={data?.img} alt="" />
        </div>
        <div className="flex justify-between text-sm my-2">
          <p className="text-[#FFB700]"> {data?.sub} </p>
          <p> {data?.date} </p>
        </div>
        <div className="my-4">
          <p className="text-black font-semibold">{data?.title}</p>
        </div>
        <hr />
        <div className="flex items-center  mt-2">
          <div className="flex  items-center justify-between">
            <div className="flex justify-center items-center gap-2 mr-4">
              <img
                className="w-12 h-12 rounded-full"
                src={data?.authorImg}
                alt=""
              />
              <p> {data?.author} </p>
            </div>

            <p className="text-[#FFB700] ">Read More . . . </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
