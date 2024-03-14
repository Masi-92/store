import productModel from "../models/productModel/product.model.js";

export const getProduct = async (req, res) => {
  const products = await productModel.find();
  if (!products) return res.send(400).send({ msg: "product not found" });
  res.send(products);
  console.log(products);
};
export const createProduct = async (req, res) => {
  const body = req.body;
  /*   const newProduct = await productModel.create({...body});
   */ const newProduct = await productModel.create(body);

  res.send(newProduct);
};

/* export const createProduct = async (req, res) => {
    const {name,price,image,discount} = req.body;
    const newProduct = await productModel.create({name,price,image,discount});
    console.log(newProduct)
    res.send(newProduct);

  }; */


export const EditProduct = async (req, res) => {
  const  ProductId  = req.params.id;
  const body = req.body;
  const Product = await productModel.findByIdAndUpdate(ProductId, {
    $set: body,
  });
  if (!Product) return res.status(400).send({ message: "product not found" });

  res.send( Product);
};

export const deleteProduct = async (req, res) => {
  const ProductId = req.params.id;
  const delProduct = await productModel.findOneAndDelete({
    _id: ProductId,
  },{new:true});
  res.send(delProduct);
};
