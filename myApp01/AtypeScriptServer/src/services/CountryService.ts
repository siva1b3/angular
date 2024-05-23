// CountryService.ts
import { getCountries } from "../models/Country";
import { Location } from "../types/types";

async function getAllCountries(): Promise<Location[]> {
  try {
    const countries = await getCountries();
    return countries;
  } catch (err) {
    console.error("Error fetching countries:", err);
    throw err;
  }
}

export { getAllCountries };
