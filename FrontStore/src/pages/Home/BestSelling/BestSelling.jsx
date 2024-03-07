import { TriangleLogo } from "iconsax-react";
import products from "../../../data.json";
import ProductCard from "../../../component/product/ProductCard ";

const BestSelling = () => {

  return (
    <div>
      <div className="mt-20 flex flex-col items-center justify-center ">
        <p>Best-selling products</p>
        <TriangleLogo />
      </div>
      <div className="carousel carousel-end rounded-box flex">
      <div className="flex" >
        {products.map((product, index) => (
          <div className="carousel-item" key={index}>
            <ProductCard
              productName={product.productName}
              image={product.image}
              price={product.price}
              disCount={product.disCount}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
export default BestSelling;