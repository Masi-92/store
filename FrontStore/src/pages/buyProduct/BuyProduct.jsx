import { useEffect, useState } from "react";
import { getAllBuy } from "../../Api/buy.api";
import DataTable from "../../component/Table/datatable/datatable";
import { IconButton } from "@material-tailwind/react";
import { Trash } from "iconsax-react";

const BuyProduct = () => {
  const [buyProduct, setBuyProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getAllBuy().then((res) => {
      setBuyProduct(res.data);
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
      header: "Actions",
      enableSorting: false,
      accessorFn: (row) => (
        <div className="flex gap-2">
          <IconButton>
            <Trash />
          </IconButton>
        </div>
      ),
      size: 150,
    },
  ];

  return (
    <div className=" w-full mt-40 px-10 ">
 
      <DataTable columns={columns} data={buyProduct} />
    </div>
  );
};

export default BuyProduct;
