import { User } from "../types/User";
import sql from "mssql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginService = async (
  username: string,
  password: string
): Promise<{ token: string; user: User } | null> => {
  try {
    const request = new sql.Request();
    const result = await request
      .input("username", sql.VarChar, username)
      .query("SELECT * FROM Users WHERE username = @username");

    if (result.recordset.length === 0) {
      return null; // User not found
    }

    const user = result.recordset[0] as User;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null; // Password does not match
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    return { token, user };
  } catch (error) {
    throw new Error(`Error logging in: ${error.message}`);
  }
};
