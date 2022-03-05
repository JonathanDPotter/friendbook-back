import { Router } from "express";
import controller from "../controllers/image";

const router = Router();

router.post("/", controller.upload);

export default router;
