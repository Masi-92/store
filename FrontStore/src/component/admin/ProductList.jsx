import { IconButton } from "@mui/material";
import DataTable from "../Table/datatable/datatable";
import { Edit, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../Api/product";
import { toast } from "react-toastify";

const ProductList = () => {
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
      <DataTable columns={columns} data={product} />
    </div>
  );
};

export default ProductList;
