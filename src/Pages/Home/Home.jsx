import FeaturedDestination from "../../Components/FeaturedDestination/FeaturedDestination";
import Offers from "../../Components/Offers/Offers";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-2 ">
        <div className="py-12">
          <FeaturedDestination></FeaturedDestination>
        </div>
        <div className="py-12">
          <Offers></Offers>
        </div>
      </div>
    </div>
  );
};

export default Home;
