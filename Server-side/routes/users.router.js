import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";
import { validateInformation } from "../middlewares/users.middlewares.js";
import {
  createBooking,
  getSpecificBooking,
  getAllBookings,
} from "../controllers/bookings.controllers.js";
import { logout } from "../controllers/logout.controllers.js";
import verifyToken from "../middlewares/bookings.middlewares.js";
const router = Router();

router.post("/register", validateInformation, createUser);

router.post("/login", loginUser);

router.post("/bookings", verifyToken, createBooking);

router.get("/getSpecificBooking", verifyToken, getSpecificBooking);

router.get("/getAllBookings", getAllBookings);

// app.get("/logout", logout);

export default router;
