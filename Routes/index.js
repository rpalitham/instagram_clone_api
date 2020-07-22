import express from "express";
import auth from "./auth";
import friendships from "./friendships";
import posts from "./posts";
import likes from "./likes";
import comments from "./comments";
import media from "./media";
import userDetails from "./userDetails";
import verifyToken from "./verifyToken";

const router = express.Router();

router.use("/auth", auth);
router.use("/media", media);
router.use(verifyToken);
router.use("/user", userDetails);
router.use("/friendships", friendships);
router.use("/post", posts);
router.use("/like", likes);
router.use("/comment", comments);

export default router;
