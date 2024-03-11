import { Router } from "express";
import { createCategory, getCategory } from "../controllers/category.controller.js";


const route = Router()


route.get("/category",getCategory)
route.post("/CreateCategory", createCategory)

export default route;
