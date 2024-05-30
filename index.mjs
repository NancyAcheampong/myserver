// import http from "http";
// import {pool} from "./dbs.mjs"

// let app = http.createServer(async function (req, res) {
//   const resp = await pool.query("SELECT $1::text as message", [
//     "Hello world!",
//   ]);

//   res.write(resp.rows[0].message);

//   console.log(resp); // Hello world!

//   res.end();
// });
// app.listen(8080, function () {
//   console.log("Server starts");
// });

// import http from "http";
// import { pool } from "./dbs.mjs";
// import { homeController } from "./Controllers/homeController.mjs";
// import { aboutController } from "./Controllers/aboutController.mjs";

// let app = http.createServer(async function (req, res) {
//   switch (req.url) {
//     case "/":
//       homeController(req, res);
//       break;
//     case "/about":
//       aboutController(req, res);
//       break;
//     default:
//       res.statusCode = 404;
//       res.end("Page not found!");
//   }
// });
// app.listen(8080, function () {
//   console.log("Server");
// });

import http from "http";
import { homeController } from "./Controllers/homeController.mjs";
import { aboutController } from "./Controllers/aboutController.mjs";
import { notFoundController } from "./Controllers/notFoundController.mjs";

let app = http.createServer(async function (req, res) {
  switch (req.url) {
    case "/":
      homeController(req, res);
      break;
    case "/about":
      aboutController(req, res);
      break;
    default:
      res.statusCode = 404;
      notFoundController(req, res);
  }
});
app.listen(8080, function () {
  console.log("Server");
});

console.log("Changes made");
