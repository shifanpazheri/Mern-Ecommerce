import express from "express";
import data from "./data.js"; //.js is very imp
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use("/api/seed", seedRouter);
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("serve at http://localhost:" + port);
});
