
import {

  Input,
 
} from "@material-tailwind/react";
import { DefaultTable } from "../Table/DefaultTable";

const CreateCategoryAdmin= () => {
  return (
    <div>CategoryAdmin
      <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

<Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

    </div>
  )
}

export default CreateCategoryAdmin