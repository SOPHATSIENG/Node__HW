import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);

export default router;