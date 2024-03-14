import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import InputImage from "../../inputImage/inputImage";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { createProductApi, getAllProduct } from "../../../Api/product";
import { getCategory } from "../../../Api/category.api";
import { toast } from "react-toastify";
import DataTable from "../../Table/datatable/datatable";
import { IconButton } from "@mui/material";
import { Edit, Trash } from "iconsax-react";
const CreateProduct = () => {
  //____________________________________________________________
  const columns = [
    {
      header: "image",
      accessorFn: (row) => {
        return (
          <div>
            <img src={row.image} className="w-20" alt="" />
          </div>
        );
      },
    },
    { header: "Name", accessorKey: "name" },

    {
      header: "Actions",
      enableSorting: false,
      accessorFn: (row) => (
        <div className="flex gap-2">
          <IconButton></IconButton>
          <IconButton></IconButton>
        </div>
      ),
      size: 150,
    },
  ];

  //__________________________________________________________
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

  const createNewProduct = () => {
    createProductApi(form).then(() => {
      navigate(-1);
    });
  };
  return (
    <div>
      <DataTable columns={columns} data={product} />
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
            
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            disCount
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="disCount "
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChangeInput}
            
          />

          <select
            value={form.category}
            onChange={handleChangeInput}
            name="category"
            type="text"
          >
            {categories.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}{" "}
                
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
