import { useEffect, useState } from "react";
import ProductSlider from "../productSlider/ProductSlider";
import { getAllProduct } from "../../../Api/product";
import { toast } from "react-toastify";

const BestSelling = () => {
  const [product,setProduct]=useState([])
  useEffect(()=>{
  getAllProduct()
  .then((res)=>{
  setProduct(res.data)
  
  })
  .catch(()=>{
   toast("product not found")
  })
  },[])
  return (
    <div>
  <ProductSlider title={"Best-selling products"} list={product}/> 
    </div>
  );
};
export default BestSelling;
