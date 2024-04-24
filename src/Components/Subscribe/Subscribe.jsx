import { subscrib } from "../../assets";

const Subscribe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
      <div>
        <img className="w-2/3" src={subscrib} alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-bold">
          Subscribe to our <br /> Newsletter!
        </h2>
        <p className="text-[#006CE4] my-2">
          Subscribe to our newsletter and stay updated.
        </p>
        <div className="flex flex-col gap-3">
          <div>
            <input
              type="text"
              placeholder="Your Email"
              className=" border border-[#006CE4] p-2 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Subscribe"
              className="bg-[#FFB700] rounded-md w-full py-2 font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
