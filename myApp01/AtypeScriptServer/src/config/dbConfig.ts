// dbConfig.ts
import sql, { ConnectionPool } from "mssql";

const config = {
  user: "siva",
  password: "Welcome@123",
  server: "QRA-sivanagababu\\SQLEXPRESS",
  database: "TestMain",
  options: {
    encrypt: true,
  },
};

const poolPromise: Promise<ConnectionPool> = new Promise((resolve, reject) => {
  const pool = new sql.ConnectionPool(config);
  pool
    .connect()
    .then(() => {
      console.log("Connected to SQL Server");
      resolve(pool);
    })
    .catch((err) => {
      console.error("Database Connection Failed! Bad Config: ", err);
      reject(err);
    });
});

export { sql, poolPromise };
