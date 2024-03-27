import buyProductModel from "../models/buyModel.model.js";

export const buyProduct = async (req, res) => {
  const productId = req.params.product;
  const userId = req.user.id;
  const product = await buyProductModel.findOne({ productId, userId });
  if (product) {
    await buyProductModel.findOneAndDelete({ productId,userId });
    return res.send({
      msg: "Product removed from buy list",
      isAdded: false,
    });
  }
  await buyProductModel.create({
    productId,
    userId: req.user.id,
  });
  res.send({ message: "add to buying", isAdded: true });
};

export const getBuyProduct = async (req, res) => {
  const userId = req.user.id;
  const buyProduct = await buyProductModel.find({userId}).populate("productId");
  res.send(buyProduct.map((item) => item.productId));
};
