import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-10 ">
      <div className="  text-gray-100 font-semibold container mx-auto px-2 ">
        <div className=" grid grid-cols-2 md:grid-cols-4">
          <div>
            <p>Address</p>
            <br />
            <p>House-75, Main Rd,Dhaka</p>
          </div>
          <div>
            <ul>
              <li>About Us</li>
              <li>Stories </li>
              <li>Blog </li>
              <li>Aurlines </li>
              <li>Testimonials </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Join Us</li>
              <li>Terms Of Service </li>
              <li>Privacy Policy </li>
              <li>Support </li>
            </ul>
          </div>
          <div>
            <p>Address</p>
            <br />
            <ul>
              <li>+88 0147258369</li>
              <li>+88 0147258369</li>
              <li>+88 0147258369</li>
            </ul>
            <p>info@airbook.com</p>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="grid  grid-cols-1 md:grid-cols-3 justify-center items-center text-left">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <span className="text-white text-xs">@ copyright AIRBOOK</span>
          </div>
          <div className="hidden md:flex justify-center items-center gap-3 ">
            <FaFacebookF className="text-white" />
            <FaYoutube className="text-white" />
            <FaLinkedin className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
