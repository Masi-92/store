import categoryModel from "../models/category.model.js";

export const getCategory = async (req, res) => {
  const category = await categoryModel.find();
  if (!category) return res.send(400).send({ msg: "product not found" });
  res.send(category);
  //console.log(products);
};

export const createCategory = async (req, res) => {
  const body = req.body;
  /*   const newProduct = await productModel.create({...body});
   */ const category = await categoryModel.create(body);

  res.send(category);
};
