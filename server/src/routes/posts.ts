import express from "express";
import { addPosts } from "../controllers/posts";

const router = express.Router();

router.get("/", addPosts);

export default router;
