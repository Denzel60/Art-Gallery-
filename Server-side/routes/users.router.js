import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { validateInformation } from "../middlewares/users.middlewares.js";
const router = Router();

router.post("/register", validateInformation, createUser);

export default router;
