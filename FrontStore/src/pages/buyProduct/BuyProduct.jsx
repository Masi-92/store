import { useEffect, useState } from "react";
import { getAllBuy } from "../../Api/buy.api";
import DataTable from "../../component/Table/datatable/datatable";
import {

  IconButton,

} from "@material-tailwind/react";
import { Trash } from "iconsax-react";
import Count from "../../component/count/Count";

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


    {
      header: "image",
      accessorFn: (row) => {
        return (
          <div>
            <img src={row.image} className="w-20" alt="" />
            <span>    { row.name}</span>
          </div>
        );
      },
    },
    {
      header: "NewPrice",
      accessorFn: (row) => {
        const darsad = (row.discount * row.price) / 100;
        return (
          <div className="flex flex-col">
            {" "}
            <span>{row.price}</span>
            <span>{row.price - darsad} </span>
           
          </div>
        );
      },
    },

    {
      header: "Actions",
      enableSorting: false,
      accessorFn: (row) => (
        <div className="flex gap-3">
          <Count onIncrement={() => console.log('Incremented in BuyProduct')} />
          <button onClick={() => console.log('Delete clicked')}>
       
          </button>
        </div>
      ),
      size: 150,
    },
  ];

  return (
    <div className="mt-28">
      <div className="grid xl:grid-cols-[1fr_0.5fr] grid-cols-1  ">
        <div className=" ">
          {" "}
          <DataTable columns={columns} data={buyProduct} />
        </div>

        <div className=" bg-gray-400 border rounded-lg min-w-80 ">
          <button>buy</button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
