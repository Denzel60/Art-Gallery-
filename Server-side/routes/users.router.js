import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";
import { validateInformation } from "../middlewares/users.middlewares.js";
import { createBooking } from "../controllers/bookings.controllers.js";
import verifyToken from "../middlewares/bookings.middlewares.js";
const router = Router();

router.post("/register", validateInformation, createUser);

router.post("/login", loginUser);

router.post("/bookings", verifyToken, createBooking);

export default router;
