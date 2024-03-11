import { Schema, model } from "mongoose";


const productSchema = new Schema({
   image:String,
   productName:String,
   disCount:String,
   price:String,
   satisfaction:String,
})

export default model("product",productSchema)