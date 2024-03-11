import productModel from "../models/productModel/product.model.js";

export const getProduct = async (req, res) => {
  const products = await productModel.find();
  if (!products) return res.send(400).send({ msg: "product not found" });
  res.send(products);
  console.log(products);
};

/* export const createProduct = async (req, res) => {
  const body = req.body;
  const newProduct = await productModel.create(...body);
  res.send(newProduct);
}; */

export const createProduct = async (req, res) => {
    const {productName,price,image,disCount} = req.body;
    const newProduct = await productModel.create({productName,price,image,disCount});
    console.log(newProduct)
    res.send(newProduct);

  };
  