import Airlines from "../../Components/Airlines/Airlines";
import Banner from "../../Components/Banner/Banner";
import FeaturedDestination from "../../Components/FeaturedDestination/FeaturedDestination";
import Offers from "../../Components/Offers/Offers";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TravelBlog from "../../Components/TravelBlog/TravelBlog";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="">
        <Banner></Banner>
      </div>

      <div className="container mx-auto px-2 py-12 ">
        <FeaturedDestination></FeaturedDestination>
      </div>
      <div className="container mx-auto px-2 py-12 ">
        <Offers></Offers>
      </div>
      <div className="container mx-auto px-2 py-12 ">
        <Airlines></Airlines>
      </div>
      <div className="py-12 bg-blue-500">
        <Testimonials></Testimonials>
      </div>
      <div className="container mx-auto px-2 py-12 ">
        <TravelBlog></TravelBlog>
      </div>
      <div className="container mx-auto px-2 py-12 ">
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
