import { auth1, auth2, auth3, travel1, travel2, travel3 } from "../../assets";
import TravelCard from "../FeaturedDestination/TravelCard";
import Title from "../Shared/Title";

const datas = [
  {
    id: 1,
    sub: "Work and Travel",
    date: "16 septembar 23",
    author: "Ys Stafen",
    title: "Embracing the Digital Nomad Lifestyle the Digital Nomad thr...",
    img: travel1,
    authorImg: auth1,
  },
  {
    id: 2,
    sub: "Historical",
    date: "14 septembar 23",
    author: "Aria Montague",
    title: "Historical Journeys: Stepping Back in Time Through Travel",
    img: travel2,
    authorImg: auth2,
  },
  {
    id: 3,
    sub: "Sustainable Tourism",
    date: "10 septembar 23",
    author: "Elara Thorne",
    title: "Sustainable Tourism: Preserving the Planet While Seeing It All",
    img: travel3,
    authorImg: auth3,
  },
];

const TravelBlog = () => {
  return (
    <div>
      <div>
        <div>
          <Title title={"Travel Blog"}></Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12  justify-items-center">
          {datas.map((data) => (
            <TravelCard key={data.id} data={data}></TravelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelBlog;
