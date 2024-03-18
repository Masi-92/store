import { Router } from "express";
import {
  EditCategory,
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
} from "../controllers/category.controller.js";
import { auth } from "../middleware/authMiddlware.js";
import { isAdmin } from "../middleware/isAdmin.js";

const route = Router();
route.get("/:id",getCategoryById)
route.get("/", getCategory);
route.post("/", auth, isAdmin, createCategory);
route.put("/editCategory/:id", auth, isAdmin, EditCategory);
route.delete("/delCategory/:id", auth, isAdmin, deleteCategory);
export default route;
