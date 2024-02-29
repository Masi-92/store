import { Router } from "express";
import { getGoogleLink, login, register } from "../controllers/authController.js";

const route = Router();

route.get("/google",getGoogleLink )
route.post("/register",register)
route.post("/login",login)

export default route;
