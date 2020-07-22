import express from "express";
import multer from "multer";
import create from "./create";
// import update from "./update";
// import get from "./get";
import deletePost from "./delete";

const router = express.Router();
const upload = multer();

router.post("/", upload.array("files", 5), create);
// router.put("/:id", update);
// router.get("/:id", get);
router.delete("/:id", deletePost);

export default router;
