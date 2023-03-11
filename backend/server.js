import express from "express";
import data from "./data.js"; //.js is very imp
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import cors from "cors";

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

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedRouter);
app.use("/api/products", productRoutes);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("serve at http://localhost:" + port);
});
