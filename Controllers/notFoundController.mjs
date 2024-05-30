import fs from "fs";
export async function notFoundController(req, res) {
  fs.readFile("public/notFound.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);

    return res.end();
  });
}
