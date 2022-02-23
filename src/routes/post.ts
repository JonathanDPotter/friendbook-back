import { Router, Request, Response } from "express";
import controller from "../controllers/post";

const router = Router();

router.get("/", controller.getPosts);

router.get("/:_id", controller.getPost);

router.post("/", controller.makePost);

router.put("/:_id", controller.updatePost);

router.delete("/:_id", controller.deletePost);

export default router;
