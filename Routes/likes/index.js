import express from "express";
import create from "./create";
import getPostLikes from "./getPostLikes";
// import deleteLike from "./delete";

const router = express.Router();

router.post("/:id/:type", create);
router.get("/:id", getPostLikes);
// router.delete("/:id", deleteLike);

export default router;
