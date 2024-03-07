import BestSelling from "./BestSelling/BestSelling";
/* import YourComponent from "./carousel/YourComponent"; */
import { MyCarousel } from "./carousel/myCarousel";
import Category from "./catgorie/Category";
import { DrinksSpring } from "./drinksSpring/DrinksSpring";

const Home = () => {
  return (
    <div>
      <MyCarousel />
      <Category />
      <BestSelling />
      <DrinksSpring />
    </div>
  );
};
export default Home;
