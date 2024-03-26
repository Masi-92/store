import productModel from "../models/productModel/product.model.js";

export const getProduct = async (req, res) => {
  const products = await productModel.find().populate("category").sort({ _id: -1 });
  if (!products) return res.send(400).send({ msg: "product not found" });
  res.send(products);
 // console.log(products);
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


export const getProductById = async (req,res) =>{
  const id = req.params.id
  const productId = await productModel.findById(id)
  if (!productId) return res.send(400).send({ msg: "product not found" })
  res.send(productId);

}

export const  getProductByCategoryId = async (req,res)=>{

  const {id}= req.params
  const product = await productModel.find({category:id})
res.send(product)
}

export const getDetails = async(req,res)=>{
const {id} = req.params;
const details = await productModel.findById(id)
res.send(details)

}
