// import { pool } from "../dbs.mjs";
import fs from "fs";
export async function homeController(req, res) {
  //   const resp = await pool.query("SELECT $1::text as message", [
  //     "You are on the main page!",
  //   ]);

  //   res.end(resp.rows[0].message);

  fs.readFile("public/home.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);

    return res.end();
  });
}
