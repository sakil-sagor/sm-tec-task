import Airlines from "../../Components/Airlines/Airlines";
import Banner from "../../Components/Banner/Banner";
import FeaturedDestination from "../../Components/FeaturedDestination/FeaturedDestination";
import Offers from "../../Components/Offers/Offers";
import TravelBlog from "../../Components/TravelBlog/TravelBlog";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="">
        <Banner></Banner>
      </div>
      <div className="container mx-auto px-2 ">
        <div className="py-12">
          <FeaturedDestination></FeaturedDestination>
        </div>
        <div className="py-12">
          <Offers></Offers>
        </div>
        <div className="py-12">
          <Airlines></Airlines>
        </div>
        <div className="py-12">
          <TravelBlog></TravelBlog>
        </div>
      </div>
    </div>
  );
};

export default Home;
