import { Schema, model } from "mongoose";

const productSchema = new Schema({
  image: String,
  name: String,
  discount: String,
  price: String,
  satisfaction: String,
  description:String,
  category: {
    ref: "category",
    type: Schema.Types.ObjectId,
  },
});

export default model("product", productSchema);
