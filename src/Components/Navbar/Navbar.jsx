import { logo } from "../../assets";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="   sticky top-0 border-b shadow-lg shadow-blue-200 bg-blue-50 z-[9999]">
      <div className="">
        <div className="py-4 container mx-auto px-2">
          <div className="flex justify-between items-center">
            <div>
              <img className="w-2/3 md:w-full" src={logo} alt="" />
            </div>
            <div>
              <ul className="  flex items-center justify-center gap-1 md:gap-4 font-bold">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li key={_id}>
                    <a className="text-[#1E1E1E]" href={`#${link}`}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <button className="bg-blue-500 text-red-50 px-3 py-1 rounded-md ">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
