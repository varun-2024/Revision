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
/* app.get("/rolldice", (req, res) => {
  let num = Math.floor(Math.random() * 6) + 1; 
  res.render("rolldice.ejs", { diceVal: num }); // diceVal is the Key and num is the value
}); */
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal }); // Same name Key : Value Pair for convenience
});

app.get("/ig/:username", (req, res) => {
  let followers = ["Bob", "John", "Sam", "Pete", "Toby", "Robin"];
  const { username } = req.params;
  res.render("ig.ejs", { username, followers });
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
