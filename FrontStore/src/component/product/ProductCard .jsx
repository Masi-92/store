import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ productName, image, price, disCount }) => {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80 relative">
        <img src={image} alt="product-picture" />
        <span className="absolute top-1 right-1 border-red bg-teal-800 rounded-full h-12 w-12 flex justify-center items-center text-white p-.5">
          %{disCount}€
        </span>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {productName}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Price: {price}€
        </Typography>
      </CardBody>
    </Card>
    
  );
};

export default ProductCard;
