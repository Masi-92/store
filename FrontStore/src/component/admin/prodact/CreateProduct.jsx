import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import InputImage from "../../inputImage/inputImage";
import { Button } from "@material-tailwind/react";
import { createProductApi } from "../../../Api/product";
import { getCategory } from "../../../Api/category.api";
const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    image: "",
    name: "",
    discount: "",
    price: "",
    category: "",
  });
  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data);
    });
  },[]);
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

  const createNewProduct = () => {
    createProductApi(form).then(() => {
     
      navigate(-1);
    });
  };
  return (
    <div>
      <div className="flex flex-col">
        <h1>Add product</h1>

        <InputImage value={form.image} setValue={handleChangeImage} />

        <input
          value={form.name}
          onChange={handleChangeInput}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          value={form.disCount}
          onChange={handleChangeInput}
          name="disCount"
          type="number"
          placeholder="disCount"
        />
        <input
          value={form.price}
          onChange={handleChangeInput}
          name="price"
          type="number"
          placeholder="price"
        />

        <select
          value={form.category}
          onChange={handleChangeInput}
          name="category"
          type="text"
        >
          {categories.map((item, index) => {
            return <option   key={index}  value={item._id}>{item.name}</option>;
          })}
          category
        </select>

        <Button onClick={createNewProduct}>Create</Button>
      </div>
    </div>
  );
};

export default CreateProduct;
