const express = require("express");
const app = express();
const port = 8080;

/* app.use((req, res) => {
  console.log("Request Recieved");
  res.send("Hello");
}); */
app.get("/", (req, res) => {
  console.log(req);
  //res.send("Welcome to my API!");
  let code =
    "<h1>Hello Everyone</h1><br> <ul><li>Apple</li><li>Orange</li><li>Banana</li></ul>";
  res.send("My Website" + code);
  console.log("Hello");
});

app.get(/.*/, (req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
