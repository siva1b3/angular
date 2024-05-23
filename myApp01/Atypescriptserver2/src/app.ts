import express, { Request, Response } from "express";
import dotenv from "dotenv";
import AuthRoutes from "./routes/AuthRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", AuthRoutes);
// GET method for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Server is up and running!");
});

export default app;
