import { FaStar } from "react-icons/fa";

const AirlineCard = ({ data }) => {
  return (
    <div>
      <div className=" pr-3 w-full rounded-lg text-sm ">
        <div className="flex items-center">
          <div className="mr-4">
            <img className="w-full h-full" src={data?.img} alt="" />
          </div>
          <div className="my-4">
            <p className="text-[#006CE4] font-semibold">{data?.title}</p>
            <div className="flex items-center gap-2">
              <p className="flex items-center gap-1 text-sm">
                <FaStar className="text-[#FFB700]" />
                <span>{data?.rating}</span>
              </p>
              <p className="text-sm"> ( {data?.review} Review ) </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineCard;
