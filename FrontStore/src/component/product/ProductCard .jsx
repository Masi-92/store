import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../Api/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = () => {
  const [product, setProduct] = useState({
    productName: "",
    image: "",
    price: "",
    disCount: "",
  });
  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        toast("product not found");
      });
  }, []);
  return (
    <Card className=" md:w-96  sm:w-80 w-40 border-2 ">
      <CardHeader floated={false} className=" md:h-80 sm:h-60  h-20 relative">
        <img
          src={product.image}
          alt="product-picture"
          className="h-full object-cover w-full"
        />
        <span className="absolute top-1 right-1 border-red bg-teal-800 rounded-full h-12 w-12 flex justify-center items-center text-white p-.5">
          %{product.disCount}€
        </span>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {product.productName}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Price: {product.price}€
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
