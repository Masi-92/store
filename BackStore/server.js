import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./utils/mongodb.js";
import cors from "cors";
import router from "./routers/index.js";

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cors());


app.use("/api",router)

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
