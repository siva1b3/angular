// authRoutes.ts
import express, { Request, Response } from "express";
import { authenticateUser } from "../services/AuthService";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(400)
      .json({ success: false, message: "Username and password are required" });
    return;
  }

  console.log(username, password);
  console.log("part apprutre is over");

  try {
    const result = await authenticateUser(username, password);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
