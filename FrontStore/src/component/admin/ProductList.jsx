import { IconButton } from "@mui/material";
import DataTable from "../Table/datatable/datatable";
import { Edit, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProduct } from "../../Api/product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import ModalProduct from "./prodact/ModalProduct/ModalProduct";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getAllProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        toast("product not found");
      });
  };

  const handelClick = () => {
    navigate("/admin/createProduct");
  };
  const handelDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        getData();
        toast("Product is remove");
      })
      .catch(() => {
        toast("Product ist not fund");
      });
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

    {
      header: "Category",
      accessorFn: (row) => {
        return (
          <div>
            <span>{row.category.name} </span>
          </div>
        );
      },
    },
    {
      header: "Actions",
      enableSorting: false,
      accessorFn: (row) => (
        <div className="flex gap-2">
          <IconButton
            onClick={() => {
              handleOpen();
              setSelectedId(row._id);
            }}
          >
            <Edit />
          </IconButton>
          <IconButton onClick={() => handelDelete(row._id)}>
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
        <Button
          onClick={handelClick}
          className="border-none  text-black bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg bg-cover bg-center font-bold text-lg h-12 w-48 mt-4 ml-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-900 hover:to-cyan-400 hover:bg-cover hover:bg-center"
        >
          Add Product
        </Button>
      </div>
      <DataTable columns={columns} data={product} />
      <ModalProduct
        handleOpen={handleOpen}
        open={open}
        id={selectedId}
        getData={getData}
      />
    </div>
  );
};

export default ProductList;
