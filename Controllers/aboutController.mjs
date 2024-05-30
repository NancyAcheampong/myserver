// import { pool } from "../dbs.mjs";
import fs from "fs";
export async function aboutController(req, res) {
    // const respond = await pool.query("SELECT $1::text as message", [
    //     "You are on the about page!",
    //   ]);

    //   res.end(respond.rows[0].message);

    fs.readFile("public/about.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
    
        return res.end();
      });
}
