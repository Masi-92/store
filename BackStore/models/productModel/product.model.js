import { Schema, model } from "mongoose";

const productSchema = new Schema({
  image: String,
  productName: String,
  disCount: String,
  price: String,
  satisfaction: String,
  category: {
    ref: "category",
    type: Schema.Types.ObjectId,
  },
});

export default model("product", productSchema);
