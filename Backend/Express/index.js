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

app.get("/:username/:id", (req, res) => {
  let id = req.params.id;
  let userName = req.params.username;
  console.log(req.params);
  res.send(`Hello ${userName}! Your ID is ${id}`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  let { q, color } = req.query;
  if (!q && !color) {
    res.send(`No search Query`);
  } else if (q && color) {
    res.send(`Your Search for ${q} in ${color} would be performed`);
  } else {
    res.send(`Your Search ${q} would be performed`);
  }
});

app.get(/.*/, (req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
