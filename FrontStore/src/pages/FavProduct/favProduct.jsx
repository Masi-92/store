import { useEffect, useState } from "react";
import { getAllFav } from "../../Api/fav.api";
import ProductCard from "../../component/product/ProductCard ";

const FavProduct = () => {
  const [favProduct, setFavProduct] = useState([]);

  useEffect(() => {
    favProductFun();
  }, []);

  const favProductFun = () => {
    getAllFav().then((res) => {
      setFavProduct(res.data);
      getData()
    });
  };
  
  const getData = () => {
    getAllFav().then((res) => {
      setFavProduct(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex ">
      favProduct
      {favProduct.map((item, index) => {
        return <ProductCard key={index} product={item} />;
      })}
    </div>
  );
};

export default FavProduct;
