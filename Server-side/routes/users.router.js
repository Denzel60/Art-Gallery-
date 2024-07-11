import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";
import { validateInformation } from "../middlewares/users.middlewares.js";
import {
  createBooking,
  getSpecificBooking,
  getAllBookings,
  deleteBooking,
  updateBooking,
} from "../controllers/bookings.controllers.js";
import { logout } from "../controllers/logout.controllers.js";
import verifyToken from "../middlewares/bookings.middlewares.js";
const router = Router();

router.post("/register", validateInformation, createUser);

router.post("/login", loginUser);

router.post("/bookings", verifyToken, createBooking);

router.get("/getSpecificBooking", verifyToken, getSpecificBooking);

router.get("/getAllBookings", getAllBookings);

router.get("/logout", verifyToken, logout);

router.delete("/delete/:id", verifyToken, deleteBooking);

router.patch("/update/:id", verifyToken, updateBooking);

export default router;
