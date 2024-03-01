import { Router } from "express";
import { getGooglAuth , login, register } from "../controllers/authController.js";

const route = Router();

route.post("/google",getGooglAuth  )
route.post("/register",register)
route.post("/login",login)

export default route;
