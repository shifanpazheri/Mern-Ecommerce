import express from "express";
import Product from "../models/productModel.js";

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

productRoutes.get("/slug/:slug", async function (req, res) {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

productRoutes.get("/:id", async function (req, res) {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

export default productRoutes;
