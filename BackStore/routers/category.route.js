import { Router } from "express";
import { createCategory, getCategory } from "../controllers/category.controller.js";


const route = Router()


route.get("/",getCategory)
route.post("/", createCategory)

export default route;
