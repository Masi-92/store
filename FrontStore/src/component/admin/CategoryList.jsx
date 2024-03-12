import { useEffect, useState } from "react";
import { getCategory } from "../../Api/category.api";
import DataTable from "../Table/datatable/datatable";
import { IconButton } from "@material-tailwind/react";
import { Edit, Trash } from "iconsax-react";


const CategoryList = () => {



  const columns = [
    {
      header: "image",
      accessorFn: (row) => {
        return (
          <div >
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
            <IconButton >
           <Edit/>
            </IconButton>
            <IconButton >
           <Trash/>
            </IconButton>
            </div>
       
      ),
      size: 150,
    }, 
  ];


  const [categories, setCategories] = useState([]);

  const getAllCategory = () => {
    getCategory()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div>CreateCaetrgoryAdmin


        
<DataTable columns={columns} data={categories} />
    </div>
  )
}

export default CategoryList