import { FaCircle, FaRegCircle } from "react-icons/fa";
import { offer1, offer2, offer3 } from "../../assets";
import Title from "../Shared/Title";
import OfferCard from "./OfferCard";

const datas = [
  {
    id: 1,
    sub: "With bkash payment only",
    title: "up to 14% discount on the base fare of domestic flights",
    img: offer1,
  },
  {
    id: 2,
    sub: "With bkash payment only",
    title: "up to 14% discount on the base fare of domestic flights",
    img: offer2,
  },
  {
    id: 3,
    sub: "With bkash payment only",
    title: "up to 14% discount on the base fare of domestic flights",
    img: offer3,
  },
];
const Offers = () => {
  return (
    <div>
      <div>
        <div>
          <Title title={"Deals and Offers"}></Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12  justify-items-center">
          {datas.map((data) => (
            <OfferCard key={data.id} data={data}></OfferCard>
          ))}
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="flex gap-3 my-3 ">
          <FaRegCircle className="text-sm" />
          <FaCircle className="text-[#FFB700] text-sm" />
          <FaRegCircle className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
