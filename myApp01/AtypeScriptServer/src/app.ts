// app.ts
import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";
import cors from "cors";

const app: Application = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

export default app;
