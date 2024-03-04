import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String,minLength: 6 },
  image: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

export default model("user", userSchema);
