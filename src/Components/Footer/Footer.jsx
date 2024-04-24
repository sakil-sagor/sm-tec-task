import { flogo11, flogo12, flogo13, footLogo } from "../../assets";

const Footer = () => {
  return (
    <div className="bg-[#006CE4] py-10 ">
      <div className="  text-gray-100 font-semibold container mx-auto px-2 ">
        <div className=" grid grid-cols-2 md:grid-cols-4 justify-items-stretch">
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
        <div className="grid  grid-cols-2 md:grid-cols-3 justify-items-stretch items-center text-left">
          <div>
            <img src={footLogo} alt="" />
          </div>
          <div>
            <span className="text-white text-xs"> airbook @ copyright</span>
          </div>
          <div className="hidden md:flex justify-center items-end gap-4 ">
            <img src={flogo11} alt="" />
            <img src={flogo12} alt="" />
            <img src={flogo13} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
