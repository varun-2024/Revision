const express = require("express");

const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//app.use(express.static(__dirname + "./public"));
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
