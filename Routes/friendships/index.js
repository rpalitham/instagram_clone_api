import express from "express";
import create from "./create";
import update from "./update";
import get from "./get";

const router = express.Router();

router.get("/:username", get);
router.post("/:userId/follow", create);
router.post("/:userId/:type", update);

export default router;
