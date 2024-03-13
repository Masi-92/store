import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../config/cloudinaryCongig.js";
import { Router } from "express";
import { uploadFile } from "../controllers/file.controllers.js";
import multer from "multer";


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "store",
    format: async (req, file) => {
      return file.originalname.substring(
        file.originalname.lastIndexOf(".") + 1
      );
    }, // supports promises as well
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      return (
        uniqueSuffix +
        "-" +
        file.originalname.substring(0, file.originalname.lastIndexOf("."))
      );
    },
  },
});
const upload = multer({ storage });

const route = Router();

route.post("/upload", upload.single("image"), uploadFile);

export default route;


