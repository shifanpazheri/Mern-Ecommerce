import express from "express";
import data from "./data.js"; //.js is very imp

const app = express();

app.get("/api/products", function (req, res) {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("serve at http://localhost:" + port);
});
