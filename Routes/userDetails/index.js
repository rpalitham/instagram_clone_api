import express from "express";
import get from "./get";
import getFeed from "./getFeed";
import search from "./search";
import getPosts from "./getPosts";

const router = express.Router();

router.get("/feed", getFeed);
router.get("/search/", search);
router.get("/:username", get);
router.get("/:username/:type", getPosts);

export default router;
