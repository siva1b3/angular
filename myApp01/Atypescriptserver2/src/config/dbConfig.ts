import { config } from "mssql";

export const dbConfig: config = {
  user: process.env.DB_USER || "your_db_user",
  password: process.env.DB_PASSWORD || "your_db_password",
  server: process.env.DB_SERVER || "localhost",
  database: process.env.DB_NAME || "your_db_name",
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    enableArithAbort: true,
  },
};
