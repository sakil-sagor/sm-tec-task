import React from "react";
import {
  airline1,
  airline2,
  airline3,
  airline4,
  airline5,
  airline6,
} from "../../assets";
import Title from "../Shared/Title";
import AirlineCard from "./AirlineCard";
const datas = [
  {
    id: 1,
    title: "Biman Bangladesh Airlines",
    rating: 4,
    review: 783,
    img: airline2,
  },
  {
    id: 2,
    title: "Emirates",
    rating: 5,
    review: 753,
    img: airline3,
  },
  {
    id: 3,
    title: "Turkish Airlines",
    rating: 5,
    review: 753,
    img: airline6,
  },
  {
    id: 4,
    title: "malaysia Airlines",
    rating: 5,
    review: 753,
    img: airline4,
  },
  {
    id: 5,
    title: "Singapore Airlines",
    rating: 5,
    review: 753,
    img: airline5,
  },
  {
    id: 6,
    title: "malaysia Airlines",
    rating: 3,
    review: 753,
    img: airline4,
  },
  {
    id: 7,
    title: "Biman Bangladesh Airlines",
    rating: 4,
    review: 783,
    img: airline1,
  },
  {
    id: 8,
    title: "american airlines",
    rating: 5,
    review: 753,
    img: airline1,
  },
  {
    id: 9,
    title: "Emirates",
    rating: 5,
    review: 753,
    img: airline1,
  },
  {
    id: 10,
    title: "Biman Bangladesh Airlines",
    rating: 4,
    review: 783,
    img: airline1,
  },
  {
    id: 11,
    title: "malaysia Airlines",
    rating: 3,
    review: 753,
    img: airline4,
  },
  {
    id: 12,
    title: "Turkish Airlines",
    rating: 5,
    review: 753,
    img: airline1,
  },
];
const Airlines = () => {
  return (
    <div>
      <div>
        <div>
          <Title title={"Popular Airlines"}></Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12  justify-items-center">
          {datas.map((data) => (
            <AirlineCard key={data.id} data={data}></AirlineCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Airlines;
