import { Schema, model } from "mongoose";



const schema = new Schema({

    name:String,
    image:String

})

export default model("category",schema)