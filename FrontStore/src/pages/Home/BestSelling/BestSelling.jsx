import products from "../../../data.json";
import ProductSlider from "../productSlider/ProductSlider";

const BestSelling = () => {
  return (
    <div>
  <ProductSlider title={"Best-selling products"} list={products}/> 
    </div>
  );
};
export default BestSelling;
