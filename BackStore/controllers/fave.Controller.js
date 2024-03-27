import faveProduct from "../models/faveProduct.js";

export const favProductId = async (req, res) => {
  const productId = req.params.product;

  const product = await faveProduct.findOne({ productId });
  if (product) {
    await faveProduct.findOneAndDelete({ productId });
    return res.send({
      msg: "product removed from favorites",
      isAdded: false,
    });
  }
  const result = await faveProduct.create({ productId, userId: req.user.id });
  res.send({ msg: "add to favProduct ", isAdded: true });
};

export const getFavProduct = async (req, res) => {
  const userId = req.user.id;
  const favProduct = await faveProduct.find({ userId }).populate("productId");
  res.send(favProduct.map((item) => item.productId));
};
