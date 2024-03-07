import BestSelling from "./BestSelling/BestSelling";
import YourComponent from "./carousel/YourComponent";
import { MyCarousel } from "./carousel/myCarousel";
import Category from "./catgorie/Category";

const Home = () => {
  return (
    <div>
      <MyCarousel />
      <Category />
      <BestSelling/>
      <YourComponent/>
    
    </div>
  );
};
export default Home;
