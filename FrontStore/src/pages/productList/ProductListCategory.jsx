import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategoryId } from "../../Api/product";
import ProductCard from "../../component/product/ProductCard ";

const ProductListCategory = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  const getProductCategory = () => {
    getProductByCategoryId(id)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductCategory();
  }, [id]);

  return (
    <div className="flex col-span-3 gap-2 mt-24 h-full bg-blue-gray-100 p-10">
      
      {products.map((item, index) => {
       
       return (  <ProductCard
    product={item}
          />)
      
      })}
    </div>
  );
};

export default ProductListCategory;
