import express from "express";
import getImage from "./getImage";

const router = express.Router();

router.get("/image/:img_path", getImage);

export default router;
