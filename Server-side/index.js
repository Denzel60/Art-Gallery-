import express from "express";
import usersRouter from "./routes/users.router.js";
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(3006, () => {
  console.log("Server running on port 3006");
});