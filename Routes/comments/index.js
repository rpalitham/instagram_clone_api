import express from "express";
import create from "./create";
import likeComment from "./likeComment";
import deleteComment from "./delete";

const router = express.Router();

router.post("/", create);
router.post("/:id/:like", likeComment);
router.delete("/:id", deleteComment);

export default router;
