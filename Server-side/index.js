import express from "express";
import usersRouter from "./routes/users.router.js";
import { config } from "dotenv";
config();
const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(3006, () => {
  console.log("Server running on port 3006");
});
