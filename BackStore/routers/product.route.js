import { Router } from "express";
import { createProduct, getProduct } from "../controllers/product.controllers.js";


const router =Router()


router.get("/",getProduct)
router.post("/createProduct",createProduct)

export default router