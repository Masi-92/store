import { Router } from "express";

import productRouter from "../routers/product.route.js"
import categoryRouter from "../routers/category.route.js"

const router = Router()
router.use("/auth", router);
router.use("/product",productRouter)
router.use("/category",categoryRouter )


export default router