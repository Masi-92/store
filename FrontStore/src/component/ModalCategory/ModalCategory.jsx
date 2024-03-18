import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import InputImage from "../inputImage/inputImage";
import { editCategory, getCategoryById } from "../../Api/category.api";
import { toast } from "react-toastify";

const ModalCategory = ({ open, handleOpen, id, getData }) => {
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  const handelEdit = () => {
    editCategory(id, form)
      .then(() => {
        handleOpen();
        getData();
      })
      .catch(() => {
        toast("category not found");
      });
  };

  useEffect(() => {
    if(id)
    getAllCategoryById();
  
  }, [id]);


  const getAllCategoryById = () => {
    getCategoryById(id).then((res) => {
      setForm(res.data);
    });
  };

  const handleChangeImage = (value) => {
    form.image = value;
    setForm({ ...form });
  };

  const handleChangName = (e) => {
    const { value } = e.target;
    form.name = value;
    setForm({ ...form });
  };
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="blue-gray">
            Edit Category
          </Typography>

          <Typography className="-mb-2" variant="h6">
            change name
          </Typography>
          <Input
            label="name"
            size="lg"
            value={form.name}
            onChange={handleChangName}
          />
          <Typography className="-mb-2" variant="h6">
            Update Image
          </Typography>
          <InputImage value={form.image} setValue={handleChangeImage} />
        </CardBody>
        <CardFooter className="pt-0 flex  gap-2 ">
          <Button variant="gradient" onClick={handelEdit} fullWidth>
            Edit
          </Button>
          <Button
            variant="outlined"
            className="!bg-gray-500"
            onClick={handleOpen}
            fullWidth
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default ModalCategory;
