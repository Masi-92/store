import { IconButton } from "@mui/material";
import DataTable from "../Table/datatable/datatable";
import { Edit, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../Api/product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        toast("product not found");
      });
  }, []);

  const handelClick = () => {
    navigate("/admin/createProduct");
  };

  const columns = [
    { header: "Name", accessorKey: "name" },

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
    { header: "Price", accessorKey: "price" },
    { header: "discount", accessorKey: "discount" },
    { header: "Category", accessorKey: "category" },
    {
      header: "Actions",
      enableSorting: false,
      accessorFn: (row) => (
        <div className="flex gap-2">
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Trash />
          </IconButton>
        </div>
      ),
      size: 150,
    },
  ];

  return (
    <div>
      ProductList
      <div className="flex justify-end">
      <Button onClick={handelClick}
      className="border-none  text-black bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg bg-cover bg-center font-bold text-lg h-12 w-48 mt-4 ml-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-900 hover:to-cyan-400 hover:bg-cover hover:bg-center"
    >
      Add Product
    </Button>
      </div>
   
      <DataTable columns={columns} data={product} />
    </div>
  );
};

export default ProductList;
