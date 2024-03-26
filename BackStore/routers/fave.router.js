import { Router } from "express";
import { favProductId, getFavProduct } from "../controllers/fave.Controller.js";

import { isUser } from "../middleware/isUser.js";
import { auth } from "../middleware/authMiddlware.js";

const router = Router();

router.get("/", auth, isUser, getFavProduct);
router.post("/:product", auth, isUser, favProductId);

export default router;
