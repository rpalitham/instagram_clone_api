import express from "express";
import create from "./create";
import get from "./get";
import likeComment from "./likeComment";
import deleteComment from "./delete";

const router = express.Router();

router.post("/:id/add", create);
router.get("/:id", get);
router.post("/:type/:commentId", likeComment);
router.delete("/:id/delete/:commentId", deleteComment);

export default router;
