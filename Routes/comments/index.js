import express from "express";
import create from "./create";
import deleteComment from "./delete";

const router = express.Router();

router.post("/", create);
router.delete("/:id", deleteComment);

export default router;
