import userModels from "../models/user.models.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
export const getGoogleLink = (req, res) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&scope=profile email`;
  res.redirect(url);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(user)
  if (!(name && email && password)) {
    return res.status(400).send({ msg: "pleas Enter all field" });
  }

  const user = await userModels.findOne({ email });
  if (user) {
    return res.status(400).send({ msg: "email is already in use" });
  }

  const hash = await bcrypt.hash(password, 10);
  const newUser = await userModels.create({ name, email, password: hash });
  res.send(newUser);
};
