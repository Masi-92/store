import { Router } from "express";

import productRouter from "../routers/product.route.js"

const router = Router()
router.use("/auth", router);
router.use("/product",productRouter)


export default router