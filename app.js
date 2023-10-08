const express = require("express");

const PORT = 5000;

const app = express();

app.get("/", firstHandler, secondHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

function firstHandler(req, res, next) {
  console.log("First handler");
  next()
}

function secondHandler(req, res, next) {
  console.log("First handler");
  res.status(200).send("Response from the server");
}