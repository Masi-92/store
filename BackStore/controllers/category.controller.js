import categoryModel from "../models/category.model.js";

export const getCategory = async (req, res) => {
  const category = await categoryModel.find().sort({ _id: -1 });
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

export const EditCategory = async (req, res) => {
  const categoryId = req.params.id;
  const body = req.body;
  const category = await categoryModel.findByIdAndUpdate(categoryId, {
    $set: body,
  },{new:true});
  if (!category) return res.status(400).send({ message: "category not found" });

  res.send(category);
};

export const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  const delCategory = await categoryModel.findOneAndDelete({
    _id: categoryId,
  });
  if (!delCategory)
    return res.status(400).send({ message: "category not found" });
  res.send(delCategory);
};
