import { Request, Response } from "express";
import { loginService } from "../services/AuthService";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // const result = await loginService(username, password);
    const result = {
      token: "dsdfdsf",
      user: {
        username: "siva",
        email: "jjk",
        id: 23,
      },
    };
    if (result) {
      res.json({
        message: "Login successful",
        token: result.token,
        user: {
          username: result.user.username,
          email: result.user.email,
          userId: result.user.id,
        },
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
