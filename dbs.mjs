import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "postgres", // username 'postgres' by default
  password: "1234", // password of psql
  host: "localhost", // host name
  port: 5432, // port number, 5432 by default
  database: "postgres", // database name
});

pool.connect((err) => {
  if (err) {
    console.log("Error Ocurred", err);
  } else {
    console.log("Database Started Successfully");
  }
});
