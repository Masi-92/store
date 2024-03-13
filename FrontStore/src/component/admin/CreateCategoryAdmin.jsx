import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { createCategory } from "../../Api/category.api";
import { useNavigate } from "react-router-dom";
import InputImage from "../inputImage/inputImage";

const CreateCategoryAdmin = () => {
  const [create, setCreate] = useState({
    name: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChangeImage = (value) => {
    create.image = value;
    setCreate({ ...create });
  };
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const { value } = e.target;
    create[name] = value;
    setCreate({ ...create });
  };

  const createNewCategory = () => {
    createCategory(create).then(() => {
      navigate(-1);
    });
  };
  return (
    <div className="ml-9">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          create Category
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name Category
            </Typography>
            <Input
              size="lg"
              placeholder=" Name Category"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={handleChangeInput}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image
              <InputImage value={create.image} setValue={handleChangeImage} />
            </Typography>
          </div>
          <Button className="mt-6" fullWidth onClick={createNewCategory}>
            Create
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateCategoryAdmin;
