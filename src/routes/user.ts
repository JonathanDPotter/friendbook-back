import { Router } from "express";
import controller from "../controllers/user";
import extractJWT from "../middleware/extractJWT";
import { Schemas, ValidateJoi } from "../middleware/joi";

const router = Router();

router.get("/", controller.getAllUsers);

router.get("/validate", extractJWT, controller.validateToken);

router.get("/:_id", controller.getUser);

router.post("/register", ValidateJoi(Schemas.user), controller.register);

router.post("/login", ValidateJoi(Schemas.user), controller.login);


export default router;