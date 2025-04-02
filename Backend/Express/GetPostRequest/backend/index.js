const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { name, password } = req.query;
  res.send("Standard Get Response!");
  console.log("Get request sent!");
  console.log(`User name : ${name}, password : ${password}`);
});
app.post("/register", (req, res) => {
  let { name, password } = req.body;
  res.send(`Standard Post Response!, Welcome ${name}`);
  console.log("Post request sent!");
  console.log(req.body);
  console.log(`User name : ${name}, password : ${password}`);
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
