import { Router } from "express";
import {
  EditProduct,
  createProduct,
  deleteProduct,
  getProduct,
} from "../controllers/product.controllers.js";
import { auth } from "../middleware/authMiddlware.js";
import { isAdmin } from "../middleware/isAdmin.js";
const router = Router();

router.get("/", getProduct);
router.post("/createProduct", auth, isAdmin, createProduct);
router.put("/editProduct/:id", auth, isAdmin, EditProduct);
router.post("/delProduct/:id", auth, isAdmin, deleteProduct);
export default router;
