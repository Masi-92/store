import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputImage from "../../inputImage/inputImage";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { createProductApi, getAllProduct } from "../../../Api/product";
import { getCategory } from "../../../Api/category.api";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    image: "",
    name: "",
    discount: "",
    price: "",
    category: "",
  });

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        toast("product not found");
      });
  }, []);
  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const { value } = e.target;
    form[name] = value;
    setForm({ ...form });
  };
  const handleChangeImage = (value) => {
    form.image = value;
    setForm({ ...form });
  };

  // telwind handelCanghe
/*   const handleChangeCategory = (value) => {
    form.category = value;
    setForm({ ...form });
  }; */
  // console.log(form)
  const createNewProduct = () => {
    createProductApi(form).then(() => {
      navigate(-1);
    });
  };
  return (
    <div>
      <div className="flex flex-col ml-9 p-3 ">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Add new product
          </Typography>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Product Name
          </Typography>
          <Input
            size="lg"
            placeholder=" Product Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChangeInput}
            name="name"
            value={form.name}
          />
          <InputImage value={form.image} setValue={handleChangeImage} />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Price
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="price "
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChangeInput}
            name="price"
            value={form.price}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            discount
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="discount "
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChangeInput}
            name="discount"
            value={form.discount}
          />

          <select
            value={form.category}
            onChange={handleChangeInput}
            label="category"
            id=""
          >
            <option value=""> select Category</option>
            {categories.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <Button className="mt-6" onClick={createNewProduct}>
            Create
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CreateProduct;
