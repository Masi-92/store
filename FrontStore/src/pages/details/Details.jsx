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


  const applyTailwindStyles = (html) => {
    // Replace <h1>, <p>, <ul>, <li> tags with Tailwind classes
    html = html.replace(/<h1/g, '<h1 class="text-2xl mb-4"');
    html = html.replace(/<p/g, '<p class="mb-4"');
    html = html.replace(/<ul/g, '<ul class="list-disc ml-6"');
    html = html.replace(/<li/g, '<li class="mb-2"');
    return html;
  };

  return (
    <div>
      {product ? (
        <div>
          <div className="mt-28 border-4">
            <h2 className="mx-auto text-center">Details</h2>

            <div className=" md:h-80 sm:h-60  h-20 relative">
              <img
                src={product.image}
                alt="product-picture"
                className="h-full  object-cover w-full "
              />
            </div>
            <div className=" ">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {product.name}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Price: {product.price}€
              </Typography>
              <p dangerouslySetInnerHTML={{__html:applyTailwindStyles(product.description)}}></p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default Details;
