const express = require("express");
const app = express();
const path = require("path");

const jokesDb = require("./data/jokes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("dad-jokes", {
    jokes: jokesDb.getAll(),
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
