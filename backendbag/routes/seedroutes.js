import express from "express";
import Product from "../models/productmodel.js";
import data from "../data.js";

const seedRouter = express.Router();
seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
  console.log({ createdProducts });
});
export default seedRouter;
