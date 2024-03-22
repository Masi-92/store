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
import ReactQuill from 'react-quill';

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
    description:""
  });
  const quillModules = {
    toolbar: [
      [{ 'color': [] }],
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['clean']
    ]
  };
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


    const handleChangeDescription = (value) => {
    form.description = value;
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
    <div className="flex flex-col  gap-4  justify-center items-center">
      <div className="flex flex-col gap-4  ">
        <Card color="transparent" shadow={false} className="flex flex-col  shadow-md ">
          <Typography variant="h4" color="blue-gray">
            Add new product
          </Typography>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Product Name
          </Typography>
          <Input
            size="lg"
            placeholder=" Product Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 shadow-md "
            onChange={handleChangeInput}
            name="name"
            value={form.name}
          />
     
          <Typography  variant="h6" color="blue-gray" className=" mt-2 shadow-md ">
          <InputImage  value={form.image} setValue={handleChangeImage} />
          </Typography>
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Price
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="price "
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 shadow-md "
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 shadow-md "
            onChange={handleChangeInput}
            name="discount"
            value={form.discount}
          />

          <select
            value={form.category}
            onChange={handleChangeInput}
            label="category"
            id=""
            name="category"
            className="border-2 rounded-md border-gray-400 h-11 my-2 shadow-md "
          >
            <option value="" className="border text-white bg-blue-gray-500"> select Category</option>
            {categories.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <ReactQuill theme="snow" value={form.description} modules={quillModules} onChange={handleChangeDescription} />
          <Button className="mt-6 shadow-md " onClick={createNewProduct}>
            Create
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CreateProduct;
