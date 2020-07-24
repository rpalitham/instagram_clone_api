import express from "express";
import create from "./create";
import deleteLike from "./delete";

const router = express.Router();

router.post("/:id/:type", create);
router.delete("/:id", deleteLike);

export default router;
