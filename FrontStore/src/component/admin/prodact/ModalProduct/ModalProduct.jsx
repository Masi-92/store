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
import InputImage from "../../../inputImage/inputImage";
import { toast } from "react-toastify";
import { editProduct, getProductById } from "../../../../Api/product";
import { getCategory } from "../../../../Api/category.api";
import ReactQuill from "react-quill";

const ModalProduct = ({ open, handleOpen, id, getData }) => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    discount: "",
    category: "",
    description: "",
  });
  const quillModules = {
    toolbar: [
      [{ color: [] }],
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      ["link", "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
    ],
  };
  const handleChangeDescription = (value) => {
    form.description = value;
    setForm({ ...form });
  };
  const handelEdit = () => {
    editProduct(id, form)
      .then(() => {
        handleOpen();
        getData();
      })
      .catch(() => {
        toast("product not found");
      });
  };

  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    if (id) getAllProductById();
  }, [id]);

  const getAllProductById = () => {
    getProductById(id).then((res) => {
      setForm(res.data);
    });
  };

  useEffect(()=>{
    if(!open){
      setForm({image: "",
      productName: "",
      discount: "",
      price: "",
      description:"",
      category: "",})
    }
    
      },[open])
  const handleChangeImage = (value) => {
    form.image = value;
    setForm({ ...form });
  };

  const handleChang = (e) => {
    const name = e.target.name;
    const { value } = e.target;
    form[name] = value;
    setForm({ ...form });
  };
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent "
    
    >
      <Card className="mx-auto w-full max-w-[28rem]  overflow-y-auto h-screen">
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
            onChange={handleChang}
            name="name"
          />
          <Typography className="-mb-2" variant="h6">
            Update Image
          </Typography>
          <InputImage value={form.image} setValue={handleChangeImage} />

          <Typography className="-mb-2" variant="h6">
            change Price
          </Typography>
          <Input
            label="Price"
            size="lg"
            value={form.price}
            onChange={handleChang}
            name="price"
          />

          <Typography className="-mb-2" variant="h6">
            change discount
          </Typography>
          <Input
            label="discount"
            size="lg"
            value={form.discount}
            onChange={handleChang}
            name="discount"
          />
       
          <Typography className="-mb-2" variant="h6">
            description
            <ReactQuill
            theme="snow"
            value={form.description}
            modules={quillModules}
            onChange={handleChangeDescription}
          />
          </Typography>
     
          <select
            value={form.category}
            onChange={handleChang}
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

export default ModalProduct;
