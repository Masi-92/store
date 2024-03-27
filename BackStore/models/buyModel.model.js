import { Schema, model } from "mongoose";

const buySchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "product",
      require: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { timestamps: { updatedAt: false, createdAt: true } }
);
export default model("buy", buySchema);
