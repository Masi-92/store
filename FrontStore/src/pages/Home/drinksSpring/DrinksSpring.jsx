import ProductSlider from "../productSlider/ProductSlider"
import { useEffect, useState } from "react"
import { getAllProduct } from "../../../Api/product"
import { toast } from "react-toastify"

export const DrinksSpring = () => {

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
        <ProductSlider title={"DrinksSpring"} list={product} />



    </div>
  )
}
