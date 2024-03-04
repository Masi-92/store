import userModels from "../models/user.models.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client();

export const getGooglAuth = async (req, res) => {
  const { credential, client_id } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: client_id,
    });

    const payload = ticket.getPayload();
    const userId = payload["sub"];
    let user = await userModels.findOne({ email: payload.email });
    if (!user) {
      user = await userModels.create({
        email: payload.email,
        name: payload.name,
        image: payload.picture,
      });
  
    }
    const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1day",
    });
    res.send({ token, msg: "Welcome to our store" });
 
  } catch (err) {
    res.status(400).json({ err });
  }

};



export const register = async (req, res) => {
  const { name, email, password } = req.body;

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

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!(email, password)) {
    return res.status(400).send({ mas: "pleas Enter all field" });
  }

  const user = await userModels.findOne({ email });
  if (!user) {
    return res.status(400).send({ msg: "user is not exist" });
  }
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ msg: "The password is incorrect" });
  }

  const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1day",
  });
  res.send({ token, msg: "Welcome to our store" });
  //console.log(token,"***Welcome to our store***")
};
