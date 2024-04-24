import { featured1, featured2, featured3 } from "../../assets";
import Card from "../Card/Card";
import Title from "../Shared/Title";

const featuredData = [
  {
    id: 1,
    title: "Stopover opportunity in İstanbul with Turkish Airlines",
    img: featured1,
  },
  {
    id: 2,
    title: "Discover the timeless city with Touristanbul of Turkish Airlines",
    img: featured2,
  },
  {
    id: 3,
    title: "the best of Abu Dhabi with exclusive Etihad Airways!",
    img: featured3,
  },
];
const FeaturedDestination = () => {
  return (
    <div>
      <div>
        <div>
          <Title title={"Featured Destinations"}></Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12  justify-items-center">
          {featuredData.map((data) => (
            <Card key={data.id} data={data}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestination;
