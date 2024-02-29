import { Router } from "express";
import { getGoogleLink, register } from "../controllers/authController.js";

const route = Router();

route.get("/google",getGoogleLink )
route.post("/",register)
export default route;
