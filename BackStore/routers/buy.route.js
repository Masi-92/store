import { Router } from "express";
import { buyProduct, getBuyProduct } from "../controllers/buy.controller.js";
import { auth } from "../middleware/authMiddlware.js";
import { isUser } from "../middleware/isUser.js";


const router = Router();

router.get("/",auth,isUser,getBuyProduct)
router.post("/:product",auth,isUser,buyProduct)

export default router