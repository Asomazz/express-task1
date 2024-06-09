const {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
} = require("./controllers");

const express = require("express");
const productsRouter = express.Router();

productsRouter.get("/api/products", getAllProducts);

productsRouter.get("/api/products/:id", getProductById);

productsRouter.post("/api/products", addProduct);

productsRouter.delete("/api/products/:id", deleteProductById);

module.exports = productsRouter;
