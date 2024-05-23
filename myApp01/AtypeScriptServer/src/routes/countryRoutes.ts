// countryRoutes.ts
import express, { Request, Response } from "express";
import { getAllCountries } from "../services/CountryService";
import { Location } from "../types/types";

const router = express.Router();

router.get("/getlist", async (req: Request, res: Response) => {
  try {
    const countries: Location[] = await getAllCountries();
    res.json({ success: true, data: countries });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
