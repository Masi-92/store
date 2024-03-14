import { Router } from "express";
import fileRoute from "./file.route.js"

import productRouter from "../routers/product.route.js"
import categoryRouter from "../routers/category.route.js"
import authRouter from "../routers/auth.route.js"


const router = Router()
router.use("/auth", authRouter);
router.use("/product",productRouter)
router.use("/category",categoryRouter )
router.use("/file" , fileRoute);




export default router