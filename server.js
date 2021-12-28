require("dotenv").config({ path: `${__dirname}/.env` });

const port = process.env.PORT ?? 8084;
const path = require("path"),
  fs = require("fs"),
  os = require("os"),
  express = require("express");

var app = express();

/* Router 1 */
app.get("/", function (req, res) {
  res.status(200).send("All done!");
});
/* Router 2 */
app.get("/test", async function (req, res) {
  let start = new Date().getTime();

  // do somethings

  end = new Date().getTime();
  res.status(200).send(`"name": ${end - start} ms; ${(end - start) / 1000} s;`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
