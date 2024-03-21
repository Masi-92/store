import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ name, image, price, discount,id}) => {
  const navigate = useNavigate()
const handelClick = ()=>{
navigate(`/details/${id}`)

}
  return (
    <Card className=" md:w-96  sm:w-80 w-40 border-2 ">
      <CardHeader floated={false} className=" md:h-80 sm:h-60  h-20 relative">
        <img src={image} alt="product-picture" className="h-full object-cover w-full"  onClick={()=>handelClick(id)}/>
        <span className="absolute top-1 right-1 border-red bg-teal-800 rounded-full h-12 w-12 flex justify-center items-center text-white p-.5">
          %{discount}€
        </span>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Price: {price}€
        </Typography>
  
      </CardBody>
    </Card> 
    
  );
};

export default ProductCard;
