import { FaFacebookF, FaLinkedin, IoLogoYoutube } from "react-icons/fa";
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
        <div className="grid  grid-cols-1 md:grid-cols-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <span className="text-white">@copyright AIRBOOK</span>
          </div>
          <div>
            <FaFacebookF className="text-white" />
            <IoLogoYoutube className="text-white" />
            <FaLinkedin className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
