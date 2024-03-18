import { useEffect, useState } from "react";
import { getCategory } from "../../Api/category.api";
import DataTable from "../Table/datatable/datatable";
import { IconButton } from "@material-tailwind/react";
import { Edit, Trash } from "iconsax-react";
import ModalCategory from "../ModalCategory/ModalCategory";

const CategoryList = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [selectedId, setSelectedId] = useState();

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
          <IconButton
            onClick={() => {
              handleOpen();
              setSelectedId(row._id);
            }}
          >
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
    <div>
      Create Category
      <DataTable columns={columns} data={categories} />
      <ModalCategory
        handleOpen={handleOpen}
        open={open}
        id={selectedId}
        getData={getAllCategory}
      />
    </div>
  );
};

export default CategoryList;
