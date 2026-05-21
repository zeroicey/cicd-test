const express = require("express");

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("hello cicd worldfjklsjflajskfjaklsfjklas");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
