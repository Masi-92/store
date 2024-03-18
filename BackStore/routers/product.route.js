import { Router } from "express";
import {
  EditProduct,
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
} from "../controllers/product.controllers.js";
import { auth } from "../middleware/authMiddlware.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { getCategory } from "../../FrontStore/src/Api/category.api.js";
const router = Router();

router.get("/:id", getProductById)
router.get("/", getProduct);
router.post("/createProduct", auth, isAdmin, createProduct);
router.put("/editProduct/:id", auth, isAdmin, EditProduct);
router.delete("/delProduct/:id", auth, isAdmin, deleteProduct);
export default router;
