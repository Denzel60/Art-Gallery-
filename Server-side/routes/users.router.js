import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";
import { validateInformation } from "../middlewares/users.middlewares.js";
import { createBooking } from "../controllers/bookings.controllers.js";
import { logout } from "../controllers/logout.js";
import verifyToken from "../middlewares/bookings.middlewares.js";
const router = Router();

router.post("/register", validateInformation, createUser);

router.post("/login", verifyToken, loginUser);

router.post("/bookings", verifyToken, createBooking);

// app.get("/logout", logout);

export default router;
