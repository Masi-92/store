import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../Api/product";
import { Card } from "iconsax-react";
import { Typography } from "@material-tailwind/react";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getData = () => {
    getDetails(id).then((res) => {
      setProduct(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
    {product ? ( 
      <div>

        <Card>
        <h2>Details</h2>

        <div  className=" md:h-80 sm:h-60  h-20 relative">
        <img src={product.image} alt="product-picture" className="h-full object-cover w-full"  />
     
      </div>
      <div className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {product.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Price: {product.price}€
        </Typography>
  

        <Typography color="blue-gray" className="font-medium" textGradient>
        description:{product.description}
        </Typography>
      </div>


        </Card>
      
    
        
      </div>
    ) : (
      <p>Loading product details...</p> 
    )}
  </div>
  );
};

export default Details;
