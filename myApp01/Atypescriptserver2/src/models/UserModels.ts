import sql from "mssql";

export const getUserByUsername = async (username: string) => {
  const request = new sql.Request();
  const result = await request
    .input("username", sql.VarChar, username)
    .query("SELECT * FROM Users WHERE username = @username");
  return result.recordset[0];
};
